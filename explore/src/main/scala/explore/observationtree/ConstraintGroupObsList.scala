// Copyright (c) 2016-2022 Association of Universities for Research in Astronomy, Inc. (AURA)
// For license information see LICENSE or https://opensource.org/licenses/BSD-3-Clause

package explore.observationtree

import cats.effect.IO
import cats.syntax.all._
import clue.TransactionalClient
import crystal.react.ReuseView
import crystal.react.View
import explore.Icons
import explore.common.ConstraintGroupQueries._
import explore.components.ui.ExploreStyles
import explore.components.undo.UndoButtons
import explore.implicits._
import explore.model.ConstraintGroup
import explore.model.ObsIdSet
import explore.model.SelectedPanel
import explore.model.SelectedPanel._
import explore.model.display._
import explore.model.enum.AppTab
import explore.model.reusability._
import explore.undo.UndoContext
import explore.undo._
import japgolly.scalajs.react._
import japgolly.scalajs.react.vdom.html_<^._
import lucuma.core.model.Observation
import lucuma.core.syntax.all._
import lucuma.schemas.ObservationDB
import lucuma.ui.reusability._
import monocle.Focus
import monocle.Lens
import mouse.boolean._
import react.beautifuldnd._
import react.common._
import react.common.implicits._
import react.fa.FontAwesomeIcon
import react.semanticui.elements.button.Button
import react.semanticui.elements.segment.Segment
import react.semanticui.elements.segment.SegmentGroup
import react.semanticui.sizes._

import scala.collection.immutable.SortedSet

final case class ConstraintGroupObsList(
  constraintsWithObs: ReuseView[ConstraintSummaryWithObervations],
  focusedObsSet:      Option[ObsIdSet],
  selected:           ReuseView[SelectedPanel[ObsIdSet]],
  expandedIds:        ReuseView[SortedSet[ObsIdSet]],
  undoStacks:         ReuseView[UndoStacks[IO, ConstraintGroupList]]
)(implicit val ctx:   AppContextIO)
    extends ReactProps[ConstraintGroupObsList](ConstraintGroupObsList.component)
    with ViewCommon

object ConstraintGroupObsList {
  type Props = ConstraintGroupObsList

  case class State(dragging: Boolean = false)
  object State {
    val dragging: Lens[State, Boolean] = Focus[State](_.dragging)
  }

  implicit val propsReuse: Reusability[Props] = Reusability.derive
  implicit val stateReuse: Reusability[State] = Reusability.derive

  class Backend($ : BackendScope[Props, State]) {

    def toggleExpanded(
      obsIds:      ObsIdSet,
      expandedIds: ReuseView[SortedSet[ObsIdSet]]
    ): Callback =
      expandedIds.mod { expanded =>
        expanded.exists(_ === obsIds).fold(expanded - obsIds, expanded + obsIds)
      }

    /**
     * When we're dragging, we can have an observation id as the draggable id. If we have a
     * selection, and that id is part of the selection, we drag all the items in the selection.
     * However, the user may have something selected, but be dragging something that is NOT in the
     * selection - in which case we just drag the individual item.
     */
    def getDraggedIds(dragId: String, selected: SelectedPanel[ObsIdSet]): Option[ObsIdSet] =
      Observation.Id.parse(dragId).map { dId =>
        val dIdSet = ObsIdSet.one(dId)
        selected.optValue.fold(dIdSet) { selectedIds =>
          if (selectedIds.contains(dId)) selectedIds
          else dIdSet
        }
      }

    def onDragEnd(
      undoCtx:     UndoContext[ConstraintGroupList],
      expandedIds: ReuseView[SortedSet[ObsIdSet]],
      selected:    ReuseView[SelectedPanel[ObsIdSet]]
    )(implicit
      c:           TransactionalClient[IO, ObservationDB]
    ): (DropResult, ResponderProvided) => Callback = (result, _) =>
      $.props.flatMap { props =>
        val oData = for {
          destination <- result.destination.toOption
          destIds     <- ObsIdSet.fromString.getOption(destination.droppableId)
          draggedIds  <- getDraggedIds(result.draggableId, props.selected.get)
          if !destIds.intersects(draggedIds)
          destCg      <- props.constraintsWithObs.get.constraintGroups.get(destIds)
        } yield (destCg, draggedIds)

        oData.foldMap { case (destCg, draggedIds) =>
          ConstraintGroupObsListActions
            .obsConstraintGroup(draggedIds, expandedIds, selected)
            .set(undoCtx)(destCg.some)
        }
      }

    def render(props: Props) = {
      implicit val ctx = props.ctx

      val observations = props.constraintsWithObs.get.observations

      val constraintGroups = props.constraintsWithObs.get.constraintGroups.map(_._2)

      val state   = View.fromState($)
      val undoCtx = UndoContext(
        props.undoStacks,
        props.constraintsWithObs.zoom(ConstraintSummaryWithObervations.constraintGroups)
      )

      val renderClone: Draggable.Render = (provided, snapshot, rubric) =>
        <.div(provided.innerRef,
              provided.draggableProps,
              provided.dragHandleProps,
              props.getDraggedStyle(provided.draggableStyle, snapshot)
        )(
          getDraggedIds(rubric.draggableId, props.selected.get)
            .flatMap(obsIds =>
              if (obsIds.size === 1)
                observations.get(obsIds.head).map(obs => props.renderObsBadge(obs))
              else {
                val div: TagMod = <.div(
                  SegmentGroup(
                    obsIds.toList.toTagMod(id => Segment(id.show))
                  )
                )
                div.some
              }
            )
            .getOrElse(<.span("ERROR"))
        )

      val handleDragEnd = onDragEnd(undoCtx, props.expandedIds, props.selected)

      def isObsSelected(obsId: Observation.Id): Boolean =
        props.selected.get.optValue.exists(_.contains(obsId))

      def setObsSet(obsId: Option[ObsIdSet]): Callback =
        ctx.pushPage(AppTab.Constraints, obsId, none)

      def setSelectedPanelToSet(obsIdSet: ObsIdSet): Callback =
        props.selected.set(SelectedPanel.editor(obsIdSet))

      def setSelectedPanelToSingle(obsId: Observation.Id): Callback =
        setSelectedPanelToSet(ObsIdSet.one(obsId))

      def setSelectedPanelAndObs(obsId: Observation.Id): Callback =
        setObsSet(ObsIdSet.one(obsId).some) >> setSelectedPanelToSingle(obsId)

      def setSelectedPanelAndObsToSet(obsIdSet: ObsIdSet): Callback =
        setObsSet(obsIdSet.some) >> setSelectedPanelToSet(obsIdSet)

      def clearSelectedPanelAndObs: Callback =
        setObsSet(none) >> props.selected.set(SelectedPanel.tree)

      def handleCtrlClick(obsId: Observation.Id, groupIds: ObsIdSet) =
        props.selected.get.optValue.fold(setSelectedPanelAndObs(obsId)) { selectedIds =>
          if (selectedIds.forall(groupIds.contains)) {
            if (selectedIds.contains(obsId)) {
              selectedIds.removeOne(obsId).fold(clearSelectedPanelAndObs) {
                setSelectedPanelAndObsToSet
              }
            } else setSelectedPanelAndObsToSet(selectedIds.add(obsId))
          } else Callback.empty // Not in the same group
        }

      def renderGroup(constraintGroup: ConstraintGroup): VdomNode = {
        val obsIds        = constraintGroup.obsIds
        val cgObs         = obsIds.toList.map(id => observations.get(id)).flatten
        // if this group or something in it is selected
        val groupSelected = props.selected.get.optValue.exists(_.intersects(obsIds))

        val icon: FontAwesomeIcon = props.expandedIds.get
          .exists((ids: ObsIdSet) => ids === obsIds)
          .fold(Icons.ChevronDown, Icons.ChevronRight)
          .addModifiers(
            Seq(
              ^.cursor.pointer,
              ^.onClick ==> { e: ReactEvent =>
                e.stopPropagationCB >>
                  toggleExpanded(obsIds, props.expandedIds).asEventDefault(e).void
              }
            )
          )
          .fixedWidth()

        Droppable(ObsIdSet.fromString.reverseGet(obsIds), renderClone = renderClone) {
          case (provided, snapshot) =>
            val csHeader = <.span(ExploreStyles.ObsTreeGroupHeader)(
              icon,
              <.span(ExploreStyles.ObsGroupTitleWithWrap)(
                constraintGroup.constraintSet.shortName
              ),
              <.span(ExploreStyles.ObsCount, s"${obsIds.size} Obs")
            )

            <.div(
              provided.innerRef,
              provided.droppableProps,
              props.getListStyle(
                snapshot.draggingOverWith.exists(id => Observation.Id.parse(id).isDefined)
              )
            )(
              Segment(
                vertical = true,
                clazz = ExploreStyles.ObsTreeGroup |+| Option
                  .when(groupSelected)(ExploreStyles.SelectedObsTreeGroup)
                  .orElse(
                    Option.when(!state.get.dragging)(ExploreStyles.UnselectedObsTreeGroup)
                  )
                  .orEmpty
              )(^.cursor.pointer,
                ^.onClick --> setSelectedPanelAndObsToSet(constraintGroup.obsIds)
              )(
                csHeader,
                TagMod.when(props.expandedIds.get.contains(obsIds))(
                  cgObs.zipWithIndex.toTagMod { case (obs, idx) =>
                    props.renderObsBadgeItem(
                      selectable = true,
                      highlightSelected = true,
                      forceHighlight = isObsSelected(obs.id),
                      linkToObsTab = false,
                      onSelect = setSelectedPanelAndObs,
                      onCtrlClick = id => handleCtrlClick(id, obsIds)
                    )(obs, idx)
                  }
                ),
                provided.placeholder
              )
            )
        }
      }

      DragDropContext(
        onDragStart = (_: DragStart, _: ResponderProvided) => state.zoom(State.dragging).set(true),
        onDragEnd = (result, provided) =>
          state.zoom(State.dragging).set(false) >> handleDragEnd(result, provided)
      )(
        <.div(ExploreStyles.ObsTreeWrapper)(
          <.div(ExploreStyles.TreeToolbar)(UndoButtons(undoCtx, size = Mini)),
          <.div(
            Button(onClick = setObsSet(none) >> props.selected.set(SelectedPanel.summary),
                   clazz = ExploreStyles.ButtonSummary
            )(
              Icons.ListIcon.clazz(ExploreStyles.PaddedRightIcon),
              "Constraints Summary"
            )
          ),
          <.div(ExploreStyles.ObsTree)(
            <.div(ExploreStyles.ObsScrollTree)(
              constraintGroups.toTagMod(renderGroup)
            )
          )
        )
      )
    }
  }

  protected val component = ScalaComponent
    .builder[Props]
    .initialState(State())
    .renderBackend[Backend]
    .componentDidMount { $ =>
      val constraintsWithObs = $.props.constraintsWithObs.get
      val constraintGroups   = constraintsWithObs.constraintGroups
      val expandedIds        = $.props.expandedIds
      val selected           = $.props.selected

      val selectedGroup =
        $.props.focusedObsSet
          .flatMap(idSet => constraintGroups.find { case (key, _) => idSet.subsetOf(key) })
          .map(_._2)

      // Unfocus the group with observations doesn't exist
      val unfocus =
        if ($.props.focusedObsSet.nonEmpty && selectedGroup.isEmpty)
          $.props.ctx.replacePage(AppTab.Constraints, none, none)
        else Callback.empty

      val setAndGetSelected = selected.get match {
        case Uninitialized =>
          selected
            .set(
              selectedGroup.fold(SelectedPanel.tree[ObsIdSet]) { _ =>
                SelectedPanel.editor(
                  $.props.focusedObsSet.get
                ) // selectedGroup can't have a value without focusedobs having a value
              }
            )
            .as(selectedGroup)
        // .map(_ => infoFromFocused.map(_._2))
        case Editor(ids)   =>
          CallbackTo(constraintGroups.find(_._1.intersect(ids).nonEmpty).map(_._2))
        case _             => CallbackTo(none)
      }

      def expandSelected(cgOpt: Option[ConstraintGroup]) =
        cgOpt
          .map(cg => expandedIds.mod(_ + cg.obsIds))
          .orEmpty

      val cleanupExpandedIds =
        expandedIds.mod(_.filter(ids => constraintGroups.contains(ids)))

      for {
        _     <- unfocus
        cgOpt <- setAndGetSelected
        _     <- expandSelected(cgOpt)
        _     <- cleanupExpandedIds
      } yield ()
    }
    .configure(Reusability.shouldComponentUpdate)
    .build
}
