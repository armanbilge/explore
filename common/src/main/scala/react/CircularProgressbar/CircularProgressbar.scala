// Copyright (c) 2016-2022 Association of Universities for Research in Astronomy, Inc. (AURA)
// For license information see LICENSE or https://opensource.org/licenses/BSD-3-Clause

package react.CircularProgressbar

import japgolly.scalajs.react._
import japgolly.scalajs.react.facade.JsNumber
import react.common._

import scalajs.js
import scalajs.js.annotation.JSImport

case class CircularProgressbar(
  value:             JsNumber,
  minValue:          js.UndefOr[JsNumber] = js.undefined,
  maxValue:          js.UndefOr[JsNumber] = js.undefined,
  className:         js.UndefOr[String] = js.undefined,
  text:              js.UndefOr[String] = js.undefined,
  strokeWidth:       js.UndefOr[JsNumber] = js.undefined,
  background:        js.UndefOr[Boolean] = js.undefined,
  backgroundPadding: js.UndefOr[JsNumber] = js.undefined,
  counterClockwise:  js.UndefOr[Boolean] = js.undefined,
  circleRatio:       js.UndefOr[JsNumber] = js.undefined,
  classes:           js.UndefOr[js.Object] = js.undefined,
  styles:            js.UndefOr[js.Object] = js.undefined
) extends GenericComponentP[CircularProgressbar.Props] {
  override protected def cprops    = CircularProgressbar.props(this)
  override protected val component = CircularProgressbar.component
}

object CircularProgressbar {
  @js.native
  @JSImport("react-circular-progressbar", "CircularProgressbar")
  private object RawComponent extends js.Object

  @js.native
  trait Props extends js.Object {
    var value: JsNumber
    var minValue: js.UndefOr[JsNumber]
    var maxValue: js.UndefOr[JsNumber]
    var className: js.UndefOr[String]
    var text: js.UndefOr[String]
    var strokeWidth: js.UndefOr[JsNumber]
    var background: js.UndefOr[Boolean]
    var backgroundPadding: js.UndefOr[JsNumber]
    var counterClockwise: js.UndefOr[Boolean]
    var circleRatio: js.UndefOr[JsNumber]
    var classes: js.UndefOr[js.Object]
    var styles: js.UndefOr[js.Object]
  }

  protected def props(p: CircularProgressbar): Props =
    rawprops(p.value,
             p.minValue,
             p.maxValue,
             p.className,
             p.text,
             p.strokeWidth,
             p.background,
             p.backgroundPadding,
             p.counterClockwise,
             p.circleRatio,
             p.classes,
             p.styles
    )

  protected def rawprops(
    value:             JsNumber,
    minValue:          js.UndefOr[JsNumber] = js.undefined,
    maxValue:          js.UndefOr[JsNumber] = js.undefined,
    className:         js.UndefOr[String] = js.undefined,
    text:              js.UndefOr[String] = js.undefined,
    strokeWidth:       js.UndefOr[JsNumber] = js.undefined,
    background:        js.UndefOr[Boolean] = js.undefined,
    backgroundPadding: js.UndefOr[JsNumber] = js.undefined,
    counterClockwise:  js.UndefOr[Boolean] = js.undefined,
    circleRatio:       js.UndefOr[JsNumber] = js.undefined,
    classes:           js.UndefOr[js.Object] = js.undefined,
    styles:            js.UndefOr[js.Object] = js.undefined
  ): Props = {
    val p = (new js.Object).asInstanceOf[Props]
    p.value = value
    minValue.foreach(v => p.minValue = v)
    maxValue.foreach(v => p.maxValue = v)
    className.foreach(v => p.className = v)
    text.foreach(v => p.text = v)
    strokeWidth.foreach(v => p.strokeWidth = v)
    background.foreach(v => p.background = v)
    backgroundPadding.foreach(v => p.backgroundPadding = v)
    counterClockwise.foreach(v => p.counterClockwise = v)
    circleRatio.foreach(v => p.circleRatio = v)
    classes.foreach(v => p.classes = v)
    styles.foreach(v => p.styles = v)
    p
  }

  private val component = JsComponent[Props, Children.None, Null](RawComponent)
}
