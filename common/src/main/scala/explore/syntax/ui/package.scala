// Copyright (c) 2016-2022 Association of Universities for Research in Astronomy, Inc. (AURA)
// For license information see LICENSE or https://opensource.org/licenses/BSD-3-Clause

package explore.syntax.ui

import cats.Eq
import cats.syntax.all.*
import explore.components.InputWithUnits
import explore.components.ui.ExploreStyles
import explore.model.Constants
import explore.utils.*
import japgolly.scalajs.react.callback.Callback
import lucuma.ui.forms.ExternalValue
import lucuma.ui.forms.FormInputEV
import org.scalajs.dom.Window
import react.common.Css

import scala.scalajs.js
import scala.scalajs.js.UndefOr
import org.typelevel.log4cats.Logger

extension (self: Window)
  def canFitTwoPanels: Boolean =
    self.innerWidth <= Constants.TwoPanelCutoff

extension [EV[_], A, B](input: FormInputEV[EV, Option[A]])
  def clearable(using ev: ExternalValue[EV], ev3: Eq[A]) =
    input.copy(icon = clearInputIcon[EV, A](input.value))

  // When an icon is added to a FormInputEV, SUI adds extra padding on the right to make
  // space for the icon. However, with some layouts this can cause resizing issues, so this
  // method removes that extra padding. See `clearInputIcon` for more details.
  def clearableNoPadding(using ev: ExternalValue[EV], ev3: Eq[A]) = {
    val newClazz: UndefOr[Css] =
      input.clazz.fold(ExploreStyles.ClearableInputPaddingReset)(
        _ |+| ExploreStyles.ClearableInputPaddingReset
      )
    input.copy(icon = clearInputIcon[EV, A](input.value), clazz = newClazz)
  }

extension [EV[_], A, B](input: InputWithUnits[EV, Option[A]])
  def clearable(using ev: ExternalValue[EV], ev3: Eq[A]) =
    input.copy(icon = clearInputIcon[EV, A](input.value))

  // When an icon is added to a FormInputEV, SUI adds extra padding on the right to make
  // space for the icon. However, with some layouts this can cause resizing issues, so this
  // method removes that extra padding. See `clearInputIcon` for more details.
  def clearableNoPadding(using ev: ExternalValue[EV], ev3: Eq[A]) = {
    val newClazz = input.clazz |+| ExploreStyles.ClearableInputPaddingReset
    input.copy(icon = clearInputIcon[EV, A](input.value), clazz = newClazz)
  }

extension [A](c: js.UndefOr[A => Callback])
  def toJs: js.UndefOr[js.Function1[A, Unit]] = c.map(x => (a: A) => x(a).runNow())

extension (c: Callback.type) def pprintln[T](a: T): Callback = Callback(_root_.pprint.pprintln(a))

extension [F[_]](c: Logger[F]) def pdebug[T](a: T): Callback = c.debug(_root_.pprint.apply(a).render)
