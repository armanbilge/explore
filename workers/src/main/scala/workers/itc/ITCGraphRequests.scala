// Copyright (c) 2016-2022 Association of Universities for Research in Astronomy, Inc. (AURA)
// For license information see LICENSE or https://opensource.org/licenses/BSD-3-Clause

package explore.itc

import cats._
import cats.data._
import cats.effect._
import cats.effect.std.Semaphore
import cats.syntax.all._
import clue.TransactionalClient
import clue.data.syntax._
import crystal.ViewF
import eu.timepit.refined.types.numeric.NonNegInt
import eu.timepit.refined.types.numeric.PosBigDecimal
import explore.model.Constants
import explore.model.Progress
import explore.model.itc._
import explore.modes.GmosNorthSpectroscopyRow
import explore.modes.GmosSouthSpectroscopyRow
import explore.modes.InstrumentRow
import explore.modes.SpectroscopyModeRow
import lucuma.core.enums.Band
import lucuma.core.math.BrightnessUnits._
import lucuma.core.math.Wavelength
import lucuma.core.model.ConstraintSet
import lucuma.core.model.SourceProfile
import lucuma.core.model.SpectralDefinition
import org.scalajs.dom
import org.typelevel.log4cats.Logger
import queries.common.ITCQueriesGQL._
import queries.schemas.ITC
import queries.schemas.itc.implicits.*

import java.util.UUID
import scala.concurrent.duration._
//
// Find the magnitude closest to the requested wavelength
def selectedBrightness(
  sourceProfile: SourceProfile,
  wavelength:    Wavelength
): Option[Band] =
  SourceProfile.integratedBandNormalizedSpectralDefinition
    .andThen(
      SpectralDefinition.BandNormalized.brightnesses[Integrated]
    )
    .getOption(sourceProfile)
    .orElse {
      SourceProfile.surfaceBandNormalizedSpectralDefinition
        .andThen(
          SpectralDefinition.BandNormalized.brightnesses[Surface]
        )
        .getOption(sourceProfile)
    }
    .map(_.keys)
    .traverse(
      _.minByOption((band: Band) =>
        (band.center.toPicometers.value.value - wavelength.toPicometers.value.value).abs
      )
    )
    .collect { case Some(b) => b }

object ITCGraphRequests {

  def queryItc[F[_]: Concurrent: Parallel: Logger](
    wavelength:    Wavelength,
    signalToNoise: PosBigDecimal,
    constraints:   ConstraintSet,
    targets:       NonEmptyList[ItcTarget],
    mode:          InstrumentRow,
    callback:      List[ItcChart] => F[Unit]
  )(using Monoid[F[Unit]], TransactionalClient[F, ITC]): F[Unit] = {

    val itcRowsParams = mode match // Only handle known modes
      case m: GmosNorthSpectroscopyRow =>
        ItcRequestParams(wavelength, signalToNoise, constraints, targets, m).some
      case m: GmosSouthSpectroscopyRow =>
        ItcRequestParams(wavelength, signalToNoise, constraints, targets, m).some
      case _                           => none

    itcRowsParams.map { request =>
      Logger[F].debug(
        s"ITC: Request for mode ${request.mode} and target count: ${request.target.length}"
      ) *>
        request.target
          .fproduct(t => selectedBrightness(t.profile, request.wavelength))
          .collect { case (t, Some(brightness)) =>
            SpectroscopyGraphITCQuery
              .query(
                SpectroscopyGraphModeInput(
                  request.wavelength.toInput,
                  request.signalToNoise,
                  t.profile.toInput,
                  brightness,
                  t.rv.toITCInput,
                  request.constraints,
                  request.mode.toITCInput.getOrElse(null)
                ).assign
              )
              .flatMap(r => callback(r.spectroscopyGraph.charts.flatMap(_.series)))
          }
          .sequence
          .void
    }.orEmpty
  }

}
