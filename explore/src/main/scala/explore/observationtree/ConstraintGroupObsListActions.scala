// Copyright (c) 2016-2021 Association of Universities for Research in Astronomy, Inc. (AURA)
// For license information see LICENSE or https://opensource.org/licenses/BSD-3-Clause

package explore.observationtree

import cats.effect.Async
import cats.implicits._
import clue.TransactionalClient
import clue.data.syntax._
import explore.common.ConstraintGroupQueries._
import explore.common.ObsQueriesGQL._
import explore.implicits._
import explore.model.AirMassRange
import explore.model.ConstraintSet
import explore.model.HourAngleRange
import explore.model.SelectedPanel
import explore.model.SelectedPanel.Editor
import explore.schemas.ObservationDB
import explore.schemas.ObservationDB.Types._
import explore.undo._
import lucuma.core.model.Observation
import scala.collection.immutable.SortedSet

object ConstraintGroupObsListActions {
  private def updateConstraintSet[F[_]: Async](
    obsId:       Observation.Id,
    constraints: ConstraintSet
  )(implicit
    c:           TransactionalClient[F, ObservationDB]
  ): F[Unit] = {
    val createER: CreateElevationRangeInput = constraints.elevationRange match {
      case AirMassRange(min, max)   =>
        CreateElevationRangeInput(airmassRange =
          CreateAirmassRangeInput(min = min.value, max = max.value).assign
        )
      case HourAngleRange(min, max) =>
        CreateElevationRangeInput(hourAngleRange =
          CreateHourAngleRangeInput(minHours = min.value, maxHours = max.value).assign
        )
    }
    val editInput                           = EditConstraintSetInput(
      name = clue.data.Ignore,
      imageQuality = constraints.imageQuality.assign,
      cloudExtinction = constraints.cloudExtinction.assign,
      skyBackground = constraints.skyBackground.assign,
      waterVapor = constraints.waterVapor.assign,
      elevationRange = createER.assign
    )
    UpdateConstraintSetMutation.execute[F](List(obsId), editInput).void
  }

  private def getter(obsId: Observation.Id): ConstraintGroupList => Option[ConstraintSet] =
    cgl => cgl.values.find(_.obsIds.contains(obsId)).map(_.constraintSet)

  private def setter(
    obsId: Observation.Id
  )(ocs:   Option[ConstraintSet]): ConstraintGroupList => ConstraintGroupList = cgl => {
    val constraintGroups = cgl.values

    val updatedCgl = constraintGroups.find(_.obsIds.contains(obsId)).fold(cgl) { oldCg =>
      val updatedOldCg = oldCg.removeObsId(obsId)
      val newList      = cgl - oldCg.obsIds
      if (updatedOldCg.obsIds.isEmpty) newList else newList + updatedOldCg.asKeyValue
    }

    ocs.fold(updatedCgl) { cs =>
      constraintGroups
        .find(_.constraintSet === cs)
        .fold(updatedCgl + ConstraintGroup(cs, SortedSet(obsId)).asKeyValue) { newCg =>
          val updatedNewCg = newCg.addObsId(obsId)
          updatedCgl - newCg.obsIds + updatedNewCg.asKeyValue
        }
    }
  }

  private def updateExpandedIds(
    obsId:   Observation.Id,
    destIds: SortedSet[Observation.Id]
  )(
    eids:    SortedSet[SortedSet[Observation.Id]]
  ) =
    eids.map(ids => if (ids === destIds) destIds + obsId else ids - obsId)

  private def updateSelected(obsId: Observation.Id, destIds: SortedSet[Observation.Id])(
    selected:                       SelectedPanel[SortedSet[Observation.Id]]
  ) =
    selected match {
      // If in edit mode, always edit the destination.
      case Editor(_) => Editor(destIds + obsId)
      case _         => selected
    }

  def obsConstraintGroup[F[_]](
    obsId:          Observation.Id,
    expandedIds:    View[SortedSet[SortedSet[Observation.Id]]],
    selected:       View[SelectedPanel[SortedSet[Observation.Id]]]
  )(implicit async: Async[F], c: TransactionalClient[F, ObservationDB]) =
    Action[F](getter = getter(obsId), setter = setter(obsId))(
      onSet = (cgl, ocs) =>
        ocs.fold(async.unit) { cs =>
          // should always find the destIds, but...
          val destIds = cgl.values
            .find(_.constraintSet === cs)
            .map(_.obsIds)
            .getOrElse(SortedSet.empty[Observation.Id])
          updateConstraintSet[F](obsId, cs) >>
            expandedIds.mod(updateExpandedIds(obsId, destIds) _).to[F] >>
            selected.mod(updateSelected(obsId, destIds) _).to[F]
        }
    )
}
