// Copyright (c) 2016-2020 Association of Universities for Research in Astronomy, Inc. (AURA)
// For license information see LICENSE or https://opensource.org/licenses/BSD-3-Clause

package explore

import explore.components.ui.GPPStyles
import japgolly.scalajs.react._
import japgolly.scalajs.react.vdom.html_<^._
import react.common._

/**
 * Component that uses css tricks to support properly rotated components
 * respecting the layout. see:
 * https://stackoverflow.com/questions/16301625/rotated-elements-in-css-that-affect-their-parents-height-correctly
 * It requires css to work properly
 */
final case class VerticalSection()
    extends ReactPropsWithChildren[VerticalSection](VerticalSection.component)

object VerticalSection {
  type Props = VerticalSection

  private val component =
    ScalaComponent
      .builder[Props]
      .stateless
      .render_C(c =>
        <.div(
          GPPStyles.RotationWrapperOuter,
          <.div(
            GPPStyles.RotationWrapperInner,
            <.div(GPPStyles.VerticalButton, c)
          )
        )
      )
      .build
}
