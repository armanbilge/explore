// Copyright (c) 2016-2020 Association of Universities for Research in Astronomy, Inc. (AURA)
// For license information see LICENSE or https://opensource.org/licenses/BSD-3-Clause

package explore.targeteditor

import cats.implicits._
import crystal.react.implicits._
import explore.AppCtx
import explore.View
import explore.components.ui.GPPStyles
import explore.components.undo.UndoButtons
import explore.components.undo.UndoRegion
import explore.implicits._
import explore.model.ModelOptics
import explore.model.SiderealTarget
import explore.model.reusability._
import explore.target.TargetQueries._
import gsp.math.Angle
import gsp.math.Coordinates
import gsp.math.Declination
import gsp.math.HourAngle
import gsp.math.ProperMotion
import gsp.math.RightAscension
import japgolly.scalajs.react._
import japgolly.scalajs.react.MonocleReact._
import japgolly.scalajs.react.vdom.html_<^._
import monocle.Lens
import react.aladin.Aladin
import react.common._
import react.semanticui.collections.grid._
import react.semanticui.widths._
import explore.model.TargetVisualOptions
import monocle.macros.Lenses

final case class TargetBody(
  id:     SiderealTarget.Id,
  target: View[SiderealTarget]
) extends ReactProps[TargetBody](TargetBody.component) {
  val aladinCoords: Coordinates = target.get.track.baseCoordinates
}

object TargetBody extends ModelOptics {
  type Props = TargetBody

  protected implicit val propsReuse: Reusability[Props] = Reusability.derive

  @Lenses
  final case class State(options: TargetVisualOptions)

  object State {
    val Default = State(TargetVisualOptions.Default)
  }

  val AladinComp = Aladin.component

  class Backend(bs: BackendScope[Props, State]) {
    // Create a mutable reference
    private val aladinRef = Ref.toScalaComponent(AladinComp)

    private val raLens: Lens[SiderealTarget, RightAscension] =
      SiderealTarget.track ^|-> ProperMotion.baseCoordinates ^|-> Coordinates.rightAscension

    private val decLens: Lens[SiderealTarget, Declination] =
      SiderealTarget.track ^|-> ProperMotion.baseCoordinates ^|-> Coordinates.declination

    def setName(name: String): Callback =
      bs.props >>= (_.target.zoom(SiderealTarget.name).set(name).runInCB)

    def setRa(ra: RightAscension): Callback =
      bs.props >>= (_.target.zoom(raLens).set(ra).runInCB)

    def setDec(dec: Declination): Callback =
      bs.props >>= (_.target.zoom(decLens).set(dec).runInCB)

    private def coordinatesKey(target: SiderealTarget): String =
      s"${target.name}#${target.track.baseCoordinates.show}"

    val gotoRaDec = (coords: Coordinates) =>
      aladinRef.get
        .flatMapCB(
          _.backend
            .gotoRaDec(coords.ra.toAngle.toDoubleDegrees, coords.dec.toAngle.toDoubleDegrees)
        )
        .toCallback

    def searchAndGo(modify: ((String, RightAscension, Declination)) => Callback)(search: String) =
      aladinRef.get
        .flatMapCB(
          _.backend
            .gotoObject(
              search,
              (a, b) => {
                val ra  = RightAscension.fromHourAngle.get(
                  HourAngle.angle.reverseGet(Angle.fromDoubleDegrees(a.toDouble))
                )
                val dec =
                  Declination.fromAngle
                    .getOption(Angle.fromDoubleDegrees(b.toDouble))
                    .getOrElse(Declination.Zero)
                setRa(ra) *> setDec(dec) *> modify((search, ra, dec))
              },
              Callback.log("error")
            )
        )
        .toCallback

    def setTargetByName: String => Callback =
      searchAndGo { case (name, _, _) => setName(name) }

    def render(props: Props, state: State) =
      AppCtx.withCtx { implicit appCtx =>
        val target = props.target.get

        UndoRegion[SiderealTarget] { undoCtx =>
          val undoSet =
            UndoSet(props.id, props.target, undoCtx.setter)

          val modify = undoSet[
            (String, RightAscension, Declination)
          ](
            targetPropsL,
            {
              case (n, r, d) =>
                Mutation.Fields(
                  name = n.some,
                  ra = RightAscension.fromStringHMS.reverseGet(r).some,
                  dec = Declination.fromStringSignedDMS.reverseGet(d).some
                )
            }
          ) _

          val searchAndSet: String => Callback =
            searchAndGo(modify.andThen(_.runInCB))

          <.div(
            ^.height := "100%",
            ^.width := "100%",
            ^.cls := "check",
            Grid(columns = Two, stretched = true, padded = GridPadded.Horizontally)(
              ^.height := "100%",
              GridRow(stretched = true)(
                GridColumn(stretched = true, computer = Four, clazz = GPPStyles.GPPForm)(
                  CoordinatesForm(target, searchAndSet, gotoRaDec)
                    .withKey(coordinatesKey(target)),
                  UndoButtons(target, undoCtx)
                ),
                GridColumn(stretched = true, computer = Nine)(
                  AladinContainer(props.aladinCoords, state.options)
                ),
                GridColumn(stretched = true, computer = Three, clazz = GPPStyles.GPPForm)(
                  CataloguesForm(TargetVisualOptions.Default, bs.setStateL(State.options)(_))
                )
              )
            )
          )
        }
      }

    def newProps(currentProps: Props, nextProps: Props): Callback =
      // Callback.log(currentProps.toString()) *>
      aladinRef.get
        .flatMapCB { r =>
          val c = nextProps.aladinCoords
          r.backend.gotoRaDec(c.ra.toAngle.toDoubleDegrees, c.dec.toAngle.toDoubleDegrees)
        }
        .when(nextProps.aladinCoords =!= currentProps.aladinCoords)
  }

  val component =
    ScalaComponent
      .builder[Props]
      .initialState(State.Default)
      .renderBackend[Backend]
      .componentDidUpdate($ => $.backend.newProps($.prevProps, $.currentProps))
      .build

}
