// Copyright (c) 2016-2022 Association of Universities for Research in Astronomy, Inc. (AURA)
// For license information see LICENSE or https://opensource.org/licenses/BSD-3-Clause

package explore.common

import cats.effect.Async
import cats.effect.IO
import cats.implicits._
import clue.TransactionalClient
import clue.data.syntax._
import crystal.react.ReuseView
import crystal.react.StreamResourceRendererMod
import crystal.react.reuse._
import explore.data.KeyedIndexedList
import explore.implicits._
import explore.model.ConstraintGroup
import explore.model.ObsIdSet
import explore.model.ObsSummaryWithTitleAndConstraints
import explore.model.ObsSummaryWithTitleConstraintsAndConf
import explore.model.ScienceModeBasic
import explore.model.TargetSummary
import explore.model.reusability._
import explore.optics._
import explore.utils._
import japgolly.scalajs.react._
import japgolly.scalajs.react.callback.CallbackCatsEffect._
import japgolly.scalajs.react.vdom.html_<^._
import lucuma.core.model.ConstraintSet
import lucuma.core.model.ElevationRange
import lucuma.core.model.Observation
import lucuma.core.model.Program
import lucuma.core.model.Target
import lucuma.schemas.ObservationDB
import lucuma.schemas.ObservationDB.Types._
import lucuma.ui.reusability._
import monocle.Focus
import monocle.Getter
import monocle.Lens
import monocle.macros.GenIso
import queries.common.ObsQueriesGQL._
import react.common.ReactFnProps

import scala.collection.immutable.SortedMap

object ObsQueries {

  type ObservationList = KeyedIndexedList[Observation.Id, ObsSummaryWithTitleConstraintsAndConf]
  type ConstraintsList = SortedMap[ObsIdSet, ConstraintGroup]

  type ObservationData = ObsEditQuery.Data.Observation
  val ObservationData = ObsEditQuery.Data.Observation
  type ScienceRequirementsData = ObservationData.ScienceRequirements
  val ScienceRequirementsData = ObservationData.ScienceRequirements
  type Targets                      = ObservationData.TargetEnvironment
  type SpectroscopyRequirementsData = ObservationData.ScienceRequirements.Spectroscopy
  val SpectroscopyRequirementsData = ObservationData.ScienceRequirements.Spectroscopy

  case class ScienceData(
    requirements:  ScienceRequirementsData,
    configuration: Option[ScienceModeBasic],
    constraints:   ConstraintSet,
    targets:       Targets
  )

  object ScienceData {
    val requirements: Lens[ScienceData, ScienceRequirementsData] =
      Focus[ScienceData](_.requirements)
    val mode: Lens[ScienceData, Option[ScienceModeBasic]]        =
      Focus[ScienceData](_.configuration)
    val constraints: Lens[ScienceData, ConstraintSet]            =
      Focus[ScienceData](_.constraints)

    implicit val reusabilityScienceMode: Reusability[ScienceModeBasic] = Reusability.derive
  }

  val scienceDataForObs: Lens[ObservationData, ScienceData] =
    disjointZip(ObservationData.scienceRequirements,
                ObservationData.scienceMode,
                ObservationData.constraintSet,
                ObservationData.targetEnvironment
    )
      .andThen(GenIso.fields[ScienceData].reverse)

  case class ObsSummariesWithConstraints(
    observations:     ObservationList,
    constraintGroups: ConstraintsList,
    targetMap:        SortedMap[Target.Id, TargetSummary]
  )

  object ObsSummariesWithConstraints {
    val observations     = Focus[ObsSummariesWithConstraints](_.observations)
    val constraintGroups = Focus[ObsSummariesWithConstraints](_.constraintGroups)

    implicit val reusabilityObsSummaryWithConstraints: Reusability[ObsSummariesWithConstraints] =
      Reusability.derive
  }

  private val queryToObsSummariesWithConstraintsGetter
    : Getter[ProgramObservationsQuery.Data, ObsSummariesWithConstraints] = data =>
    ObsSummariesWithConstraints(
      KeyedIndexedList.fromList(
        data.observations.nodes.map(node =>
          ObsSummaryWithTitleConstraintsAndConf(
            node.id,
            node.title,
            node.subtitle,
            node.constraintSet,
            node.status,
            node.activeStatus,
            node.plannedTime.execution,
            node.scienceMode
          )
        ),
        ObsSummaryWithTitleConstraintsAndConf.id.get
      ),
      data.constraintSetGroup.nodes.toSortedMap(ConstraintGroup.obsIds.get),
      data.targetGroup.nodes
        .toSortedMap(_.target.id,
                     group => TargetSummary(group.observationIds.toSet, group.target.sidereal)
        )
    )

  implicit class ProgramObservationsQueryDataOps(val self: ProgramObservationsQuery.Data.type)
      extends AnyVal {
    def asObsSummariesWithConstraints = queryToObsSummariesWithConstraintsGetter
  }

  case class ObsLiveQuery(
    programId:        Program.Id,
    render:           ReuseView[ObsSummariesWithConstraints] ==> VdomNode
  )(implicit val ctx: AppContextIO)
      extends ReactFnProps[ObsLiveQuery](ObsLiveQuery.component)

  object ObsLiveQuery {
    type Props = ObsLiveQuery

    implicit val reuseProps: Reusability[Props] = Reusability.derive

    protected val component = ScalaFnComponent.withReuse[Props] { props =>
      implicit val ctx = props.ctx

      StreamResourceRendererMod(
        ProgramObservationsQuery
          .query(props.programId)
          .map(ProgramObservationsQuery.Data.asObsSummariesWithConstraints.get)
          .reRunOnResourceSignals(
            ProgramObservationsEditSubscription.subscribe[IO](props.programId)
          ),
        potRender(props.render)
      )
    }
  }

  def updateObservationConstraintSet[F[_]: Async](
    obsIds:      List[Observation.Id],
    constraints: ConstraintSet
  )(implicit
    c:           TransactionalClient[F, ObservationDB]
  ): F[Unit] = {
    val createER: ElevationRangeInput = constraints.elevationRange match {
      case ElevationRange.AirMass(min, max)   =>
        ElevationRangeInput(airMass =
          AirMassRangeInput(min = min.value.assign, max = max.value.assign).assign
        )
      case ElevationRange.HourAngle(min, max) =>
        ElevationRangeInput(hourAngle =
          HourAngleRangeInput(minHours = min.value.assign, maxHours = max.value.assign).assign
        )
    }
    val editInput                     = ConstraintSetInput(
      imageQuality = constraints.imageQuality.assign,
      cloudExtinction = constraints.cloudExtinction.assign,
      skyBackground = constraints.skyBackground.assign,
      waterVapor = constraints.waterVapor.assign,
      elevationRange = createER.assign
    )
    UpdateConstraintSetMutation.execute[F](obsIds, editInput).void
  }

  def createObservation[F[_]: Async](programId: Program.Id)(implicit
    c:                                          TransactionalClient[F, ObservationDB]
  ): F[Option[ObsSummaryWithTitleAndConstraints]] =
    ProgramCreateObservation.execute[F](CreateObservationInput(programId = programId)).map { data =>
      data.createObservation.map { obs =>
        ObsSummaryWithTitleAndConstraints(
          obs.id,
          obs.title,
          obs.subtitle,
          obs.constraintSet,
          obs.status,
          obs.activeStatus,
          obs.plannedTime.execution
        )
      }
    }
}
