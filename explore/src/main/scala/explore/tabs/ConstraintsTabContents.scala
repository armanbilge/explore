// Copyright (c) 2016-2023 Association of Universities for Research in Astronomy, Inc. (AURA)
// For license information see LICENSE or https://opensource.org/licenses/BSD-3-Clause

package explore.tabs

import cats.effect.IO
import cats.syntax.all.*
import crystal.*
import crystal.react.*
import crystal.react.hooks.*
import crystal.react.reuse.*
import explore.*
import explore.common.TimingWindowsQueries
import explore.components.Tile
import explore.components.TileController
import explore.constraints.ConstraintsPanel
import explore.constraints.ConstraintsSummaryTable
import explore.data.KeyedIndexedList
import explore.model.ConstraintGroupList
import explore.model.ObservationList
import explore.model.ProgramSummaries
import explore.model.*
import explore.model.enums.AppTab
import explore.model.enums.GridLayoutSection
import explore.model.enums.SelectedPanel
import explore.model.reusability.given
import explore.observationtree.ConstraintGroupObsList
import explore.shortcuts.*
import explore.shortcuts.given
import explore.timingwindows.TimingWindowsPanel
import explore.undo.*
import japgolly.scalajs.react.*
import japgolly.scalajs.react.callback.CallbackCatsEffect.*
import japgolly.scalajs.react.extra.router.SetRouteVia
import japgolly.scalajs.react.vdom.html_<^.*
import lucuma.core.model.ConstraintSet
import lucuma.core.model.Observation
import lucuma.core.model.Program
import lucuma.core.model.TimingWindow
import lucuma.core.model.User
import lucuma.react.common.ReactFnProps
import lucuma.react.hotkeys.*
import lucuma.react.hotkeys.hooks.*
import lucuma.react.resizeDetector.*
import lucuma.react.resizeDetector.hooks.*
import lucuma.refined.*
import lucuma.ui.reusability.given
import lucuma.ui.syntax.all.given
import monocle.Iso

import scala.collection.immutable.SortedSet

case class ConstraintsTabContents(
  userId:           Option[User.Id],
  programId:        Program.Id,
  programSummaries: UndoContext[ProgramSummaries],
  userPreferences:  UserPreferences,
  focusedObsSet:    Option[ObsIdSet],
  expandedIds:      View[SortedSet[ObsIdSet]]
) extends ReactFnProps(ConstraintsTabContents.component)

object ConstraintsTabContents extends TwoPanels:
  private type Props = ConstraintsTabContents

  private val component =
    ScalaFnComponent
      .withHooks[Props]
      .useContext(AppContext.ctx)
      .useGlobalHotkeysWithDepsBy((props, ctx) => props.programId) { (props, ctx) => pid =>
        def callbacks: ShortcutCallbacks = { case GoToSummary =>
          ctx.setPageVia(AppTab.Constraints, pid, Focused.None, SetRouteVia.HistoryPush)
        }
        UseHotkeysProps(List(GoToSummary).toHotKeys, callbacks)
      }
      .useStateView[SelectedPanel](SelectedPanel.Uninitialized)
      .useEffectWithDepsBy((props, _, state) => (props.focusedObsSet, state.reuseByValue)) {
        (_, _, _) => params =>
          val (focusedObsSet, selected) = params
          (focusedObsSet, selected.get) match {
            case (Some(_), _)                 => selected.set(SelectedPanel.Editor)
            case (None, SelectedPanel.Editor) => selected.set(SelectedPanel.Summary)
            case _                            => Callback.empty
          }
      }
      // Measure its size
      .useResizeDetector()
      .render { (props, ctx, state, resize) =>
        import ctx.given

        def findConstraintGroup(
          obsIds: ObsIdSet,
          cgl:    ConstraintGroupList
        ): Option[ConstraintGroup] =
          cgl.find(_._1.intersect(obsIds).nonEmpty).map(ConstraintGroup.fromTuple)

        val backButton: VdomNode =
          makeBackButton(props.programId, AppTab.Constraints, state, ctx)

        val observations: UndoSetter[ObservationList] =
          props.programSummaries.zoom(ProgramSummaries.observations)

        val rightSide = (_: UseResizeDetectorReturn) =>
          props.focusedObsSet
            .flatMap(ids =>
              findConstraintGroup(ids, props.programSummaries.get.constraintGroups)
                .map(cg => (ids, cg))
            )
            .fold[VdomNode] {
              Tile(
                "constraints".refined,
                "Constraints Summary",
                backButton.some
              )(renderInTitle =>
                ConstraintsSummaryTable(
                  props.userId,
                  props.programId,
                  props.programSummaries.get.constraintGroups,
                  props.expandedIds,
                  renderInTitle
                )
              )
            } { case (idsToEdit, constraintGroup) =>
              val obsTraversal = Iso
                .id[ObservationList]
                .filterIndex((id: Observation.Id) => idsToEdit.contains(id))
                .andThen(KeyedIndexedList.value)

              val csTraversal = obsTraversal.andThen(ObsSummary.constraints)

              val constraintSet: UndoSetter[ConstraintSet] =
                observations.zoom(csTraversal.getAll.andThen(_.head), csTraversal.modify)

              val constraintsTitle = idsToEdit.single match
                case Some(id) => s"Observation $id"
                case None     => s"Editing Constraints for ${idsToEdit.size} Observations"

              val constraintsTile = Tile(
                ObsTabTilesIds.ConstraintsId.id,
                constraintsTitle,
                backButton.some,
                canMinimize = true
              )(renderInTitle =>
                ConstraintsPanel(
                  props.programId,
                  idsToEdit,
                  constraintSet,
                  renderInTitle
                )
              )

              val twTraversal = obsTraversal.andThen(ObsSummary.timingWindows)

              val twView: View[List[TimingWindow]] =
                TimingWindowsQueries.viewWithRemoteMod(
                  props.programId,
                  idsToEdit,
                  observations
                    .undoableView[List[TimingWindow]](
                      twTraversal.getAll.andThen(_.head),
                      twTraversal.modify
                    )
                )

              val timingWindowsTile =
                Tile(ObsTabTilesIds.TimingWindowsId.id, "Scheduling Windows", canMinimize = true)(
                  renderInTitle => TimingWindowsPanel(twView, renderInTitle)
                )

              TileController(
                props.userId,
                resize.width.getOrElse(1),
                ExploreGridLayouts.sectionLayout(GridLayoutSection.ConstraintsLayout),
                props.userPreferences.constraintsTabLayout,
                List(constraintsTile, timingWindowsTile),
                GridLayoutSection.ConstraintsLayout,
                None
              )
            }

        val constraintsTree =
          ConstraintGroupObsList(
            props.programId,
            observations,
            props.programSummaries,
            props.programSummaries.get.constraintGroups,
            props.focusedObsSet,
            state.set(SelectedPanel.Summary),
            props.expandedIds
          )

        makeOneOrTwoPanels(state, constraintsTree, rightSide, RightSideCardinality.Multi, resize)
      }
