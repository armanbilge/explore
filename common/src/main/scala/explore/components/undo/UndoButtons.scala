// Copyright (c) 2016-2021 Association of Universities for Research in Astronomy, Inc. (AURA)
// For license information see LICENSE or https://opensource.org/licenses/BSD-3-Clause

package explore.components.undo

import cats.MonadError
import cats.effect.std.Dispatcher
import crystal.react.implicits._
import explore.Icons
import explore.components.ui.ExploreStyles
import explore.undo._
import japgolly.scalajs.react._
import japgolly.scalajs.react.vdom.html_<^._
import org.typelevel.log4cats.Logger
import react.common.ReactProps
import react.semanticui.elements.button._
import react.semanticui.sizes._

final case class UndoButtons[F[_], A](
  undoCtx:        UndoContext[F, A],
  size:           SemanticSize = Tiny,
  disabled:       Boolean = false
)(implicit
  val F:          MonadError[F, Throwable],
  val dispatcher: Dispatcher[F],
  val logger:     Logger[F]
) extends ReactProps[UndoButtons[Any, Any]](UndoButtons.component)

object UndoButtons {
  type Props[F[_], A] = UndoButtons[F, A]

  protected def componentBuilder[F[_], A] =
    ScalaComponent
      .builder[Props[F, A]]
      .render_P { p =>
        implicit val F          = p.F
        implicit val dispatcher = p.dispatcher
        implicit val logger     = p.logger

        <.span(
          ExploreStyles.ButtonsUndo,
          ButtonGroup(labeled = true, icon = true, compact = true, size = p.size)(
            Button(
              onClick = p.undoCtx.undo.runAsyncCB,
              size = p.size,
              disabled = p.undoCtx.isUndoEmpty || p.disabled,
              loading = p.undoCtx.working,
              clazz = ExploreStyles.VeryCompact,
              icon = Icons.Undo,
              content = "Undo",
              labelPosition = LabelPosition.Left
            ),
            Button(
              onClick = p.undoCtx.redo.runAsyncCB,
              size = p.size,
              disabled = p.undoCtx.isRedoEmpty || p.disabled,
              loading = p.undoCtx.working,
              clazz = ExploreStyles.VeryCompact,
              icon = Icons.Redo,
              content = "Redo",
              labelPosition = LabelPosition.Left
            )
          )
        )
      }
      .build

  val component = componentBuilder[Any, Any]
}
