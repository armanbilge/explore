// Copyright (c) 2016-2023 Association of Universities for Research in Astronomy, Inc. (AURA)
// For license information see LICENSE or https://opensource.org/licenses/BSD-3-Clause

package explore.common

import queries.common.TargetQueriesGQL
import lucuma.core.model.Target
import cats.effect.IO
import lucuma.core.model.Program
import lucuma.schemas.odb.input.*
import explore.DefaultErrorPolicy
import clue.FetchClient
import lucuma.schemas.ObservationDB
import explore.model.AppContext
import explore.utils.*
import cats.effect.Sync
import cats.syntax.all.*

object TargetQueries:
  def insertTarget[F[_]: Sync](
    programId: Program.Id,
    target:    Target.Sidereal,
    toastRef:  ToastRefF[F]
  )(using
    FetchClient[F, ?, ObservationDB]
  ): F[Target.Id] =
    TargetQueriesGQL
      .CreateTargetMutation[F]
      .execute(target.toCreateTargetInput(programId))
      .map(_.createTarget.target.id)
      .flatTap(id => toastRef.showToast(s"Created new target [$id]"))
