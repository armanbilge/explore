// Copyright (c) 2016-2023 Association of Universities for Research in Astronomy, Inc. (AURA)
// For license information see LICENSE or https://opensource.org/licenses/BSD-3-Clause

package explore.cache

import cats.effect.IO
import cats.effect.kernel.Resource
import cats.syntax.all.*
import clue.StreamingClient
import explore.DefaultErrorPolicy
import explore.common.UserPreferencesQueries.GridLayouts
import explore.model.ExploreGridLayouts
import explore.model.UserPreferences
import explore.model.enums.GridLayoutSection
import explore.model.layout.LayoutsMap
import japgolly.scalajs.react.*
import lucuma.core.model.User
import lucuma.ui.reusability.given
import queries.common.UserPreferencesQueriesGQL.UserGridLayoutUpdates
import queries.schemas.UserPreferencesDB
import react.common.ReactFnProps

case class PreferencesCache(
  userId:            User.Id,
  setUserPrefrences: Option[UserPreferences] => IO[Unit]
)(using client: StreamingClient[IO, UserPreferencesDB])
    extends ReactFnProps[PreferencesCache](PreferencesCache.component)
    with CacheComponent.Props[UserPreferences]:
  val setState                                 = setUserPrefrences
  given StreamingClient[IO, UserPreferencesDB] = client

object PreferencesCache extends CacheComponent[UserPreferences, PreferencesCache]:
  given Reusability[PreferencesCache] = Reusability.by(_.userId)

  override protected val initial: PreferencesCache => IO[UserPreferences] = props =>
    import props.given

    val grids: IO[Map[GridLayoutSection, LayoutsMap]] =
      GridLayouts.queryWithDefault[IO](props.userId.some, ExploreGridLayouts.DefaultLayouts)

    grids.map(UserPreferences.apply)

  override protected val updateStream: PreferencesCache => Resource[
    cats.effect.IO,
    fs2.Stream[cats.effect.IO, UserPreferences => UserPreferences]
  ] = props =>
    import props.given

    Resource.eval(IO(fs2.Stream.eval(IO(identity))))

    val updateLayouts =
      UserGridLayoutUpdates
        .subscribe[IO](props.userId.show)
        .map(
          _.map(data =>
            UserPreferences.gridLayouts
              .modify(GridLayouts.updateLayouts(data.lucumaGridLayoutPositions))
          )
        )

    List(updateLayouts).sequence.map(_.reduceLeft(_.merge(_)))
