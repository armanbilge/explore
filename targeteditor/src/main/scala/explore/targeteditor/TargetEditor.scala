// Copyright (c) 2016-2020 Association of Universities for Research in Astronomy, Inc. (AURA)
// For license information see LICENSE or https://opensource.org/licenses/BSD-3-Clause

package explore.targeteditor

import cats.implicits._
import crystal.react.implicits._
import explore.AppCtx
import explore.components.graphql.SubscriptionRenderMod
import explore.implicits._
import explore.model.Conditions
import explore.model.SiderealTarget
import explore.model.reusability._
import explore.target.TargetQueries._
import gem.Observation
import japgolly.scalajs.react.CatsReact._
import japgolly.scalajs.react._
import japgolly.scalajs.react.vdom.html_<^._
import monocle.function.Cons.headOption
import react.common._

final case class TargetEditor(
  observationId: Observation.Id,
  // globalTarget:  View[Option[SiderealTarget]],
  conditions:    Option[Conditions] = None
) extends ReactProps[TargetEditor](TargetEditor.component)

object TargetEditor {
  type Props = TargetEditor

  protected implicit val propsReuse: Reusability[Props] = Reusability.derive

  // class Backend($ : BackendScope[Props, Unit]) {
  class Backend() {
    private val targetBodyRef = Ref.toScalaComponent(TargetBody.component)

    def searchTarget(targetName: String): Callback =
      targetBodyRef.get
        .flatMapCB(_.backend.setTargetByName(targetName))

    def render(props: Props) =
      AppCtx.withCtx { implicit appCtx =>
        SubscriptionRenderMod[Subscription.Data, SiderealTarget](
          appCtx.clients.programs
            .subscribe(Subscription)(
              Subscription.Variables(props.observationId.format).some
            ),
          _.map(Subscription.Data.targets.composeOptional(headOption).getOption _).unNone
        ) { target =>
          TargetBody(props.observationId, target, /*props.globalTarget,*/ props.conditions)
            .withRef(targetBodyRef)
        }
      }
  }

  val component =
    ScalaComponent
      .builder[Props]
      .backend(_ => new Backend())
      .renderBackend
      // .renderBackend[Backend]
      .build

}
