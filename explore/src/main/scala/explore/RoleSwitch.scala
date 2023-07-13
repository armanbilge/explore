// Copyright (c) 2016-2023 Association of Universities for Research in Astronomy, Inc. (AURA)
// For license information see LICENSE or https://opensource.org/licenses/BSD-3-Clause

package explore

import cats.effect.IO
import cats.syntax.all.*
import crystal.react.View
import crystal.react.*
import explore.components.ui.ExploreStyles
import explore.model.AppContext
import explore.model.UserVault
import japgolly.scalajs.react.*
import japgolly.scalajs.react.vdom.html_<^.*
import lucuma.core.model.StandardRole
import lucuma.core.model.StandardUser
import lucuma.core.model.User
import lucuma.refined.*
import lucuma.ui.primereact.FormDropdown
import lucuma.ui.syntax.all.given
import react.common.*
import react.primereact.SelectItem

case class RoleSwitch(
  vault: View[UserVault]
) extends ReactFnProps(RoleSwitch.component)

object RoleSwitch:
  private type Props = RoleSwitch

  private val component =
    ScalaFnComponent
      .withHooks[Props]
      .useContext(AppContext.ctx)
      .render { (props, ctx) =>
        val user = props.vault.get.user

        def roleSwitch(id: StandardRole.Id) =
          (for {
            t <- ctx.sso.switchRole(id)
            _ <- t.foldMap(props.vault.set(_).to[IO])
          } yield ()).runAsyncAndForget

        val (curRole, otherRoles) = user match {
          case StandardUser(_, role, other, _) => (role.some, other)
          case _                               => (none, Nil)
        }

        React.Fragment(
          <.span(
            ExploreStyles.MainUserName,
            user.displayName
          ),
          curRole match {
            case Some(r) if otherRoles.nonEmpty =>
              val options = (r :: otherRoles).map(r => SelectItem(r.id, label = r.name))
              FormDropdown(id = "role-selector-switch".refined,
                           r.id,
                           options,
                           onChange = roleSwitch
              )
            case a                              =>
              EmptyVdom
          }
        )
      }
