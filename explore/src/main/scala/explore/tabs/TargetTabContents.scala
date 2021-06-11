// Copyright (c) 2016-2021 Association of Universities for Research in Astronomy, Inc. (AURA)
// For license information see LICENSE or https://opensource.org/licenses/BSD-3-Clause

package explore.tabs

import cats.effect.IO
import cats.syntax.all._
import crystal.ViewF
import crystal.react.implicits._
import crystal.react.reuse._
import eu.timepit.refined.auto._
import explore.AppCtx
import explore.Icons
import explore.common.TargetObsQueries._
import explore.common.UserPreferencesQueries._
import explore.common.UserPreferencesQueriesGQL._
import explore.components.Tile
import explore.components.ui.ExploreStyles
import explore.implicits._
import explore.model.Focused._
import explore.model._
import explore.model.enum.AppTab
import explore.model.reusability._
import explore.observationtree.TargetObsList
import explore.targeteditor.TargetEditor
import explore.targeteditor.TargetSummaryTable
import japgolly.scalajs.react._
import japgolly.scalajs.react.component.builder.Lifecycle.ComponentDidMount
import japgolly.scalajs.react.vdom.html_<^._
import lucuma.core.model.Target
import lucuma.core.model.User
import lucuma.ui.reusability._
import lucuma.ui.utils._
import org.scalajs.dom.window
import react.common._
import react.common.implicits._
import react.draggable.Axis
import react.resizable._
import react.resizeDetector.ResizeDetector
import react.semanticui.elements.button.Button
import react.semanticui.elements.button.Button.ButtonProps
import react.semanticui.sizes._

import scala.concurrent.duration._
import explore.undo._

final case class TargetTabContents(
  userId:           Option[User.Id],
  focused:          View[Option[Focused]],
  searching:        View[Set[Target.Id]],
  expandedIds:      View[ExpandedIds],
  hiddenColumns:    View[Set[String]],
  undoStacks:       View[UndoStacks2[IO, PointingsWithObs]],
  size:             ResizeDetector.Dimensions
)(implicit val ctx: AppContextIO)
    extends ReactProps[TargetTabContents](TargetTabContents.component) {
  def isTargetSelected: Boolean = focused.get.collect { case Focused.FocusedTarget(_) =>
    ()
  }.isDefined
}

object TargetTabContents {
  type Props = TargetTabContents
  type State = TwoPanelState

  implicit val propsReuse: Reusability[Props] = Reusability.derive

  def readWidthPreference($ : ComponentDidMount[Props, State, Unit]): Callback = {
    implicit val ctx = $.props.ctx
    (UserAreaWidths.queryWithDefault[IO]($.props.userId,
                                         ResizableSection.TargetsTree,
                                         Constants.InitialTreeWidth.toInt
    ) >>= $.setStateLIn[IO](TwoPanelState.treeWidth)).runAsyncCB
  }

  def renderContents(
    userId:        User.Id,
    targetId:      Target.Id,
    searching:     View[Set[Target.Id]],
    renderInTitle: Tile.RenderInTitle
  ): VdomNode =
    AppCtx.using(implicit ctx =>
      TargetEditor(userId, targetId, searching, renderInTitle).withKey(targetId.show)
    )

  protected def renderFn(
    props:            Props,
    state:            View[State],
    pointingsWithObs: View[PointingsWithObs]
  )(implicit ctx:     AppContextIO): VdomNode = {
    val treeResize =
      (_: ReactEvent, d: ResizeCallbackData) =>
        (state.zoom(TwoPanelState.treeWidth).set(d.size.width) *>
          UserWidthsCreation
            .storeWidthPreference[IO](props.userId,
                                      ResizableSection.TargetsTree,
                                      d.size.width
            )).runAsyncCB
          .debounce(1.second)

    val treeWidth = state.get.treeWidth.toInt

    // Tree area
    def tree(objectsWithObs: View[PointingsWithObs]) =
      <.div(^.width := treeWidth.px, ExploreStyles.Tree |+| ExploreStyles.ResizableSinglePanel)(
        treeInner(objectsWithObs)
      )

    def treeInner(objectsWithObs: View[PointingsWithObs]) =
      <.div(ExploreStyles.TreeBody)(
        TargetObsList(
          objectsWithObs,
          props.focused,
          props.expandedIds,
          props.searching,
          props.undoStacks
        )
      )

    val backButton = Reuse.always[VdomNode](
      Button(
        as = <.a,
        size = Mini,
        compact = true,
        basic = true,
        clazz = ExploreStyles.TileBackButton |+| ExploreStyles.BlendedButton,
        onClickE = linkOverride[IO, ButtonProps](props.focused.set(none))
      )(^.href := ctx.pageUrl(AppTab.Targets, none), Icons.ChevronLeft.fitted(true))
    )

    val targetIdOpt = props.focused.get.collect {
      case FocusedTarget(targetId) => targetId.some
      case FocusedObs(obsId)       =>
        pointingsWithObs.get.observations
          .getElement(obsId)
          .flatMap(_.pointing.collect { case PointingTargetResult(targetId) => targetId })
    }.flatten

    val coreWidth  = props.size.width.getOrElse(0) - treeWidth
    val coreHeight = props.size.height.getOrElse(0)

    val rightSide =
      (props.userId, targetIdOpt).tupled match {
        case Some((uid, tid)) =>
          Tile("target", s"Target", backButton.some)(
            Reuse(renderContents _)(uid, tid, props.searching)
          )
        case None             =>
          Tile("target", s"Targets Summary", backButton.some)(
            Reuse.by((pointingsWithObs, props.hiddenColumns))((renderInTitle: Tile.RenderInTitle) =>
              TargetSummaryTable(pointingsWithObs.get,
                                 props.hiddenColumns,
                                 props.focused,
                                 props.expandedIds,
                                 renderInTitle
              )
            )
          )
      }

    // It would be nice to make a single component here but it gets hard when you
    // have the resizable element. Instead we have either two panels with a resizable
    // or only one panel at a time (Mobile)
    if (window.innerWidth <= Constants.TwoPanelCutoff) {
      <.div(
        ExploreStyles.TreeRGL,
        <.div(ExploreStyles.Tree, treeInner(pointingsWithObs))
          .when(state.get.leftPanelVisible),
        <.div(^.key := "target-right-side", ExploreStyles.SinglePanelTile)(
          rightSide
        ).when(state.get.rightPanelVisible)
      )
    } else {
      <.div(
        ExploreStyles.TreeRGL,
        Resizable(
          axis = Axis.X,
          width = treeWidth,
          height = coreHeight,
          minConstraints = (Constants.MinLeftPanelWidth.toInt, 0),
          maxConstraints = (props.size.width.getOrElse(0) / 2, 0),
          onResize = treeResize,
          resizeHandles = List(ResizeHandleAxis.East),
          content = tree(pointingsWithObs),
          clazz = ExploreStyles.ResizableSeparator
        ),
        <.div(^.key := "target-right-side",
              ExploreStyles.SinglePanelTile,
              ^.width := coreWidth.px,
              ^.left := treeWidth.px
        )(
          rightSide
        )
      )
    }
  }

  protected val component =
    ScalaComponent
      .builder[Props]
      .getDerivedStateFromPropsAndState((p, s: Option[State]) =>
        s match {
          case None    => TwoPanelState.initial(p.isTargetSelected)
          case Some(s) =>
            if (s.elementSelected =!= p.isTargetSelected)
              s.copy(elementSelected = p.isTargetSelected)
            else s
        }
      )
      .render { $ =>
        implicit val ctx = $.props.ctx
        TargetObsLiveQuery(Reuse(renderFn _)($.props, ViewF.fromState($)))
      }
      .componentDidMount(readWidthPreference)
      .configure(Reusability.shouldComponentUpdate)
      .build

}
