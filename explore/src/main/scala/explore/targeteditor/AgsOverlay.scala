// Copyright (c) 2016-2023 Association of Universities for Research in Astronomy, Inc. (AURA)
// For license information see LICENSE or https://opensource.org/licenses/BSD-3-Clause

package explore.targeteditor

import cats.syntax.all.*
import crystal.react.View
import explore.Icons
import explore.components.ui.ExploreStyles
import explore.model.Constants
import explore.model.enums.AgsState
import explore.model.formats.*
import japgolly.scalajs.react.*
import japgolly.scalajs.react.feature.ReactFragment
import japgolly.scalajs.react.vdom.html_<^.*
import lucuma.ags.AgsAnalysis
import lucuma.core.enums.GuideSpeed
import lucuma.ui.syntax.all.given
import react.common.ReactFnProps
import react.fa.IconSize

import scala.math.BigDecimal.RoundingMode

case class AgsOverlay(
  selectedGSIndex:   View[Option[Int]],
  maxIndex:          Int,
  selectedGuideStar: Option[AgsAnalysis],
  agsState:          AgsState
) extends ReactFnProps[AgsOverlay](AgsOverlay.component)

object AgsOverlay {
  type Props = AgsOverlay

  val component =
    ScalaFnComponent[Props] { props =>
      val selectedIndex = props.selectedGSIndex.get

      val canGoPrev = props.agsState === AgsState.Idle && selectedIndex.exists(_ > 0)

      def goPrev(e: ReactEvent): Option[Callback] = Option {
        props.selectedGSIndex.mod(_.map(_ - 1))
      }.filter(_ => canGoPrev)

      val canGoNext =
        props.agsState === AgsState.Idle && selectedIndex.exists(_ < props.maxIndex - 1)

      def goNext(e: ReactEvent): Option[Callback] = Option {
        props.selectedGSIndex.mod(_.map(_ + 1))
      }.filter(_ => canGoNext)

      props.selectedGuideStar
        .filter(_.isUsable)
        .map { case analysis =>
          ReactFragment(
            <.div(
              ExploreStyles.AgsDescription,
              Icons.Bahai,
              <.span(analysis.target.name.value),
              <.div(
                ExploreStyles.AgsNavigation,
                <.span(
                  ExploreStyles.Disabled.unless(canGoPrev),
                  ^.onClick ==>? goPrev,
                  ExploreStyles.AgsNavigationButton,
                  Icons.ChevronLeft
                ),
                <.span(
                  ExploreStyles.Disabled.unless(canGoNext),
                  ^.onClick ==>? goNext,
                  ExploreStyles.AgsNavigationButton,
                  Icons.ChevronRight
                )
              )
            ),
            <.div(
              ExploreStyles.AgsDescription,
              analysis.match {
                case AgsAnalysis.Usable(_, _, GuideSpeed.Fast, _, _)   =>
                  Icons.CircleSmall.withClass(ExploreStyles.AgsFast)
                case AgsAnalysis.Usable(_, _, GuideSpeed.Medium, _, _) =>
                  Icons.CircleSmall.withClass(ExploreStyles.AgsMedium)
                case AgsAnalysis.Usable(_, _, GuideSpeed.Slow, _, _)   =>
                  Icons.CircleSmall.withClass(ExploreStyles.AgsSlow)
                case _                                                 => ""
              },
              analysis match {
                case AgsAnalysis.Usable(_, _, speed, _, _) =>
                  React.Fragment(
                    <.div(ExploreStyles.AgsGuideSpeed, speed.tag),
                    <.div(ExploreStyles.AgsGBrightness,
                          analysis.target.gBrightness.map(g =>
                            s"G: ${g.value.value.setScale(1, RoundingMode.HALF_DOWN).toString()}"
                          )
                    ),
                    <.div(ExploreStyles.AgsCoordinates,
                          s"(${formatCoordinates(analysis.target.tracking.baseCoordinates)})"
                    )
                  )
                case _                                     => EmptyVdom
              }
            )
          )
        }
        .getOrElse {
          <.div(
            ExploreStyles.AgsDescription,
            Icons.SquareXMarkLarge.withClass(ExploreStyles.AgsNotFound).withSize(IconSize.LG),
            <.span(Constants.NoGuideStarMessage)
          )
        }
    }
}
