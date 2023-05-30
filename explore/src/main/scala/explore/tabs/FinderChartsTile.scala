// Copyright (c) 2016-2023 Association of Universities for Research in Astronomy, Inc. (AURA)
// For license information see LICENSE or https://opensource.org/licenses/BSD-3-Clause

package explore.tabs

import cats.Eq
import cats.syntax.all.*
import cats.derived.*
import crystal.react.hooks.*
import explore.components.Tile
import explore.components.ui.ExploreStyles
import japgolly.scalajs.react.vdom.html_<^.*
import japgolly.scalajs.react.*
import explore.Resources
import react.common.ReactFnProps
import lucuma.ui.syntax.all.given
import japgolly.scalajs.react.feature.ReactFragment
import explore.Icons
import react.fa.Rotation
import crystal.react.View

sealed trait ChartOp derives Eq

object ChartOp:
  case object Flip         extends ChartOp
  case object VerticalFlip extends ChartOp

  def calcTransform(ops: List[ChartOp]): List[String] =
    ops
      .foldLeft(List.empty[String]) { (acc, op) =>
        op match {
          case Flip         => "scaleX(-1)" :: acc
          case VerticalFlip => "scaleY(-1)" :: acc
        }
      }
      .reverse

case class FinderCharts() extends ReactFnProps(FinderCharts.component)

object FinderCharts:
  private type Props = FinderCharts

  private val component =
    ScalaFnComponent
      .withHooks[Props]
      .useStateView(List.empty[ChartOp])
      .render { (_, ops) =>
        val transforms = ChartOp.calcTransform(ops.get)
        println(ops.get)
        ReactFragment(
          FinderChartsControlOverlay(ops),
          <.div(
            ExploreStyles.FinderChartsBody,
            <.img(ExploreStyles.FinderChartsImage,
                  ^.transform := transforms.mkString(" "),
                  ^.src       := Resources.DemoFinderChart1
            )
          )
        )
      }

case class FinderChartsControlOverlay(ops: View[List[ChartOp]])
    extends ReactFnProps[FinderChartsControlOverlay](FinderChartsControlOverlay.component)

object FinderChartsControlOverlay {
  type Props = FinderChartsControlOverlay

  extension (ops: List[ChartOp])
    def flip: List[ChartOp] =
      if (ops.exists(_ === ChartOp.Flip)) ops.filterNot(_ === ChartOp.Flip) else ops :+ ChartOp.Flip

    def vflip: List[ChartOp] =
      if (ops.exists(_ === ChartOp.VerticalFlip)) ops.filterNot(_ === ChartOp.VerticalFlip)
      else ops :+ ChartOp.VerticalFlip

  val component =
    ScalaFnComponent[Props] { p =>
      ReactFragment(
        <.div(
          ExploreStyles.FinderChartsTools,
          <.span(Icons.Bahai, "Viewer Controls"),
          <.div(^.onClick --> p.ops.mod(_.flip),
                Icons.ArrowsRepeat.withRotation(Rotation.Rotate90)
          ),
          <.div("Flip"),
          <.div(^.onClick --> p.ops.mod(_.vflip),
                Icons.ArrowsRepeat
          )
        )
      )
    }
}

object FinderChartsTile:

  def finderChartsTile =
    Tile(
      ObsTabTilesIds.FinderChartsId.id,
      s"Finder Charts",
      bodyClass = ExploreStyles.FinderChartsTile.some,
      canMinimize = true
    )(_ => FinderCharts())
