// Copyright (c) 2016-2022 Association of Universities for Research in Astronomy, Inc. (AURA)
// For license information see LICENSE or https://opensource.org/licenses/BSD-3-Clause

package explore.schemas

import cats.syntax.all._
import clue.data.Input
import clue.data.syntax._
import eu.timepit.refined.types.string.NonEmptyString
import explore.common.ITCQueriesGQL
import explore.common.ObsQueries
import explore.model.ITCTarget
import explore.model.TargetWithId
import explore.modes.GmosNorthSpectroscopyRow
import explore.modes.GmosSouthSpectroscopyRow
import explore.modes.InstrumentRow
import explore.optics.ModelOptics._
import io.circe.syntax._
import lucuma.core.enum.Band
import lucuma.core.math.BrightnessUnits._
import lucuma.core.math._
import lucuma.core.math.dimensional.Measure
import lucuma.core.math.dimensional.UnitOfMeasure
import lucuma.core.math.dimensional.Units
import lucuma.core.math.units._
import lucuma.core.model._
import lucuma.core.optics.syntax.lens._
import lucuma.schemas.ObservationDB.Types._

import UserPreferencesDB.Types.ExploreResizableWidthInsertInput

// TODO Move to lucuma-schemas
object implicits {

  implicit class AngleOps(val a: Angle) extends AnyVal {
    def toInput: AngleInput =
      AngleInput(microarcseconds = a.toMicroarcseconds.assign)
  }

  implicit class WavelengthOps(val w: Wavelength) extends AnyVal {
    def toInput: WavelengthInput =
      WavelengthInput(picometers = w.toPicometers.value.value.toLong.assign)
  }

  implicit class CatalogInfoOps(info: CatalogInfo) {
    def toInput: CatalogInfoInput =
      CatalogInfoInput(info.catalog.assign, info.id.assign, info.objectType.orIgnore)
  }

  implicit class RightAscensionOps(ra: RightAscension) {
    def toInput: RightAscensionInput =
      RightAscensionInput(microarcseconds = ra.toAngle.toMicroarcseconds.assign)
  }

  implicit class DeclinationOps(dec: Declination) {
    def toInput: DeclinationInput =
      DeclinationInput(microarcseconds = dec.toAngle.toMicroarcseconds.assign)
  }

  implicit class ProperMotionOps(pm: ProperMotion) {
    def toInput: ProperMotionInput =
      ProperMotionInput(
        ra = ProperMotionComponentInput(microarcsecondsPerYear = pm.ra.μasy.value.assign),
        dec = ProperMotionComponentInput(microarcsecondsPerYear = pm.dec.μasy.value.assign)
      )
  }

  implicit class RadialVelocityOps(rv: RadialVelocity) {
    def toInput: RadialVelocityInput =
      RadialVelocityInput(metersPerSecond = rv.rv.value.assign)
  }

  implicit class ParallaxOps(p: Parallax) {
    def toInput: ParallaxModelInput =
      ParallaxModelInput(microarcseconds = p.μas.value.value.assign)
  }

  implicit class UnnormalizedSedOps(u: UnnormalizedSED) {
    def toInput: UnnormalizedSedInput =
      u match {
        case UnnormalizedSED.StellarLibrary(librarySpectrum)          =>
          UnnormalizedSedInput(stellarLibrary = librarySpectrum.assign)
        case UnnormalizedSED.CoolStarModel(temperature)               =>
          UnnormalizedSedInput(coolStar = temperature.assign)
        case UnnormalizedSED.Galaxy(galaxySpectrum)                   =>
          UnnormalizedSedInput(galaxy = galaxySpectrum.assign)
        case UnnormalizedSED.Planet(planetSpectrum)                   =>
          UnnormalizedSedInput(planet = planetSpectrum.assign)
        case UnnormalizedSED.Quasar(quasarSpectrum)                   =>
          UnnormalizedSedInput(quasar = quasarSpectrum.assign)
        case UnnormalizedSED.HIIRegion(hiiRegionSpectrum)             =>
          UnnormalizedSedInput(hiiRegion = hiiRegionSpectrum.assign)
        case UnnormalizedSED.PlanetaryNebula(planetaryNebulaSpectrum) =>
          UnnormalizedSedInput(planetaryNebula = planetaryNebulaSpectrum.assign)
        case UnnormalizedSED.PowerLaw(index)                          =>
          UnnormalizedSedInput(powerLaw = index.assign)
        case UnnormalizedSED.BlackBody(temperature)                   =>
          UnnormalizedSedInput(blackBodyTempK = temperature.value.value.assign)
        case UnnormalizedSED.UserDefined(fluxDensities)               =>
          UnnormalizedSedInput(fluxDensities = fluxDensities.toSortedMap.toList.map {
            case (wavelength, value) => FluxDensity(wavelength.toInput, value.value)
          }.assign)
      }
  }

  implicit class IntegratedBandNormalizedOps(b: SpectralDefinition.BandNormalized[Integrated]) {
    def toCreateInput: BandNormalizedIntegratedInput =
      BandNormalizedIntegratedInput(
        sed = b.sed.toInput.assign,
        brightnesses = b.brightnesses.toList.map { case (band, measure) =>
          BandBrightnessIntegratedInput(
            band = band,
            value = BrightnessValue.fromBigDecimal.reverseGet(measure.value).assign,
            units = Measure.unitsTagged.get(measure).assign,
            error = measure.error.map(BrightnessValue.fromBigDecimal.reverseGet).orIgnore
          )
        }.assign
      )
  }

  implicit class SurfaceBandNormalizedOps(b: SpectralDefinition.BandNormalized[Surface]) {
    def toCreateInput: BandNormalizedSurfaceInput =
      BandNormalizedSurfaceInput(
        sed = b.sed.toInput.assign,
        brightnesses = b.brightnesses.toList.map { case (band, measure) =>
          BandBrightnessSurfaceInput(
            band = band,
            value = BrightnessValue.fromBigDecimal.reverseGet(measure.value).assign,
            units = Measure.unitsTagged.get(measure).assign,
            error = measure.error.map(BrightnessValue.fromBigDecimal.reverseGet).orIgnore
          )
        }.assign
      )
  }

  implicit class IntegratedEmissionLinesOps(e: SpectralDefinition.EmissionLines[Integrated]) {
    def toCreateInput: EmissionLinesIntegratedInput =
      EmissionLinesIntegratedInput(
        lines = e.lines.toList.map { case (wavelength, line) =>
          EmissionLineIntegratedInput(
            wavelength = wavelength.toInput,
            lineWidth = line.lineWidth.value.value.assign,
            lineFlux = LineFluxIntegratedInput(
              line.lineFlux.value.value,
              Measure.unitsTagged.get(line.lineFlux)
            ).assign
          )
        }.assign,
        fluxDensityContinuum = FluxDensityContinuumIntegratedInput(
          value = e.fluxDensityContinuum.value.value,
          units = Measure.unitsTagged.get(e.fluxDensityContinuum)
        ).assign
      )
  }

  implicit class SurfaceEmissionLinesOps(e: SpectralDefinition.EmissionLines[Surface]) {
    def toCreateInput: EmissionLinesSurfaceInput =
      EmissionLinesSurfaceInput(
        lines = e.lines.toList.map { case (wavelength, line) =>
          EmissionLineSurfaceInput(
            wavelength = wavelength.toInput,
            lineWidth = line.lineWidth.value.value.assign,
            lineFlux = LineFluxSurfaceInput(
              line.lineFlux.value.value,
              Measure.unitsTagged.get(line.lineFlux)
            ).assign
          )
        }.assign,
        fluxDensityContinuum = FluxDensityContinuumSurfaceInput(
          value = e.fluxDensityContinuum.value.value,
          units = Measure.unitsTagged.get(e.fluxDensityContinuum)
        ).assign
      )
  }

  implicit class IntegratedSpectralDefinitionOps(s: SpectralDefinition[Integrated]) {
    def toCreateInput: SpectralDefinitionIntegratedInput =
      s match {
        case b @ SpectralDefinition.BandNormalized(_, _) =>
          SpectralDefinitionIntegratedInput(bandNormalized = b.toCreateInput.assign)
        case e @ SpectralDefinition.EmissionLines(_, _)  =>
          SpectralDefinitionIntegratedInput(emissionLines = e.toCreateInput.assign)
      }
  }

  implicit class SurfaceSpectralDefinitionOps(s: SpectralDefinition[Surface]) {
    def toCreateInput: SpectralDefinitionSurfaceInput =
      s match {
        case b @ SpectralDefinition.BandNormalized(_, _) =>
          SpectralDefinitionSurfaceInput(bandNormalized = b.toCreateInput.assign)
        case e @ SpectralDefinition.EmissionLines(_, _)  =>
          SpectralDefinitionSurfaceInput(emissionLines = e.toCreateInput.assign)
      }
  }

  implicit class SourceProfileOps(s: SourceProfile) {
    def toCreateInput: SourceProfileInput =
      s match {
        case SourceProfile.Point(definition)          =>
          SourceProfileInput(point = definition.toCreateInput.assign)
        case SourceProfile.Uniform(definition)        =>
          SourceProfileInput(uniform = definition.toCreateInput.assign)
        case SourceProfile.Gaussian(fwhm, definition) =>
          SourceProfileInput(gaussian =
            GaussianInput(fwhm.toInput.assign, definition.toCreateInput.assign).assign
          )
      }
  }

  implicit class SiderealTargetOps(sidereal: Target.Sidereal) {
    def toCreateInput(id: Option[Target.Id] = none): CreateTargetInput =
      CreateTargetInput(
        targetId = id.orIgnore,
        name = sidereal.name,
        sidereal = SiderealInput(
          ra = sidereal.tracking.baseCoordinates.ra.toInput.assign,
          dec = sidereal.tracking.baseCoordinates.dec.toInput.assign,
          epoch = Epoch.fromString.reverseGet(sidereal.tracking.epoch).assign,
          properMotion = sidereal.tracking.properMotion.map(_.toInput).orIgnore,
          radialVelocity = sidereal.tracking.radialVelocity.map(_.toInput).orIgnore,
          parallax = sidereal.tracking.parallax.map(_.toInput).orIgnore,
          catalogInfo = sidereal.catalogInfo.map(_.toInput).orIgnore
        ).assign,
        sourceProfile = sidereal.sourceProfile.toCreateInput
      )
  }

  implicit class NonsiderealTargetOps(nonsidereal: Target.Nonsidereal) {
    def toCreateInput(id: Option[Target.Id] = none): CreateTargetInput =
      CreateTargetInput(
        targetId = id.orIgnore,
        name = nonsidereal.name,
        nonsidereal = NonsiderealInput(
          key = NonEmptyString.unsafeFrom(nonsidereal.ephemerisKey.asJson.toString).assign
        ).assign,
        sourceProfile = nonsidereal.sourceProfile.toCreateInput
      )
  }

  implicit def widthUpsertInput(w: WidthUpsertInput): ExploreResizableWidthInsertInput =
    ExploreResizableWidthInsertInput(
      w.section.value.assign,
      w.user.toString.assign,
      w.width.assign
    )
}

object itcschema {
  object implicits {

    import explore.schemas.ITC.Types.{ MagnitudeCreateInput => ITCBrightnessInput }
    import explore.schemas.ITC.Types.RadialVelocityInput

    type InstrumentModes = ITC.Types.InstrumentModes
    val InstrumentModes = ITC.Types.InstrumentModes
    type GmosNITCInput = ITC.Types.GmosNITCInput
    val GmosNITCInput = ITC.Types.GmosNITCInput
    type GmosSITCInput = ITC.Types.GmosSITCInput
    val GmosSITCInput = ITC.Types.GmosSITCInput
    type ITCWavelengthInput = ITC.Types.WavelengthModelInput
    val ITCWavelengthInput = ITC.Types.WavelengthModelInput
    type ITCSpectroscopyInput = ITC.Types.SpectroscopyModeInput
    val ITCSpectroscopyInput = ITC.Types.SpectroscopyModeInput
    type ITCMagnitudeSystem = ITC.Enums.MagnitudeSystem
    val ITCMagnitudeSystem = ITC.Enums.MagnitudeSystem
    type ItcResults = ITCQueriesGQL.SpectroscopyITCQuery.Data
    type ItcError   = ITCQueriesGQL.SpectroscopyITCQuery.Data.Spectroscopy.Results.Itc.ItcError
    val ItcError = ITCQueriesGQL.SpectroscopyITCQuery.Data.Spectroscopy.Results.Itc.ItcError
    type ItcSuccess = ITCQueriesGQL.SpectroscopyITCQuery.Data.Spectroscopy.Results.Itc.ItcSuccess
    val ItcSuccess = ITCQueriesGQL.SpectroscopyITCQuery.Data.Spectroscopy.Results.Itc.ItcSuccess

    implicit class WavelengthOps(val w: Wavelength) extends AnyVal {
      def toITCInput: ITCWavelengthInput =
        (ITCWavelengthInput.nanometers := Wavelength.decimalNanometers
          .reverseGet(w)
          .assign)
          .runS(ITC.Types.WavelengthModelInput())
          .value
    }

    implicit class UnitsOps(val u: Units) extends AnyVal {
      // If we will keep using this logic, we must add the Surface units too.
      def toITCInputOpt: Option[ITCMagnitudeSystem] = u match {
        case _ if u === UnitOfMeasure[VegaMagnitude]                    => ITCMagnitudeSystem.Vega.some
        case _ if u === UnitOfMeasure[ABMagnitude]                      => ITCMagnitudeSystem.Ab.some
        case _ if u === UnitOfMeasure[Jansky]                           => ITCMagnitudeSystem.Jy.some
        case _ if u === UnitOfMeasure[WattsPerMeter2Micrometer]         => ITCMagnitudeSystem.Watts.some
        case _ if u === UnitOfMeasure[ErgsPerSecondCentimeter2Angstrom] =>
          ITCMagnitudeSystem.ErgsWavelength.some
        case _ if u === UnitOfMeasure[ErgsPerSecondCentimeter2Hertz]    =>
          ITCMagnitudeSystem.ErgsFrequency.some
        case _                                                          => none
      }
    }

    implicit class BrightnessMeasureOps(val b: (Band, Measure[BrightnessValue])) {
      def toITCInput: ITCBrightnessInput =
        ITCBrightnessInput(
          b._1,
          b._2.value.toDouble,
          b._2.error.map(_.toBigDecimal).orIgnore,
          b._2.units.toITCInputOpt.orUnassign
        )
    }

    implicit class GmosNorthSpectropyRowOps(val r: GmosNorthSpectroscopyRow) extends AnyVal {
      def toGmosNITCInput: Input[GmosNITCInput] =
        GmosNITCInput(r.disperser, r.fpu, filter = r.filter.orIgnore).assign
    }

    implicit class GmosSouthSpectropyRowOps(val r: GmosSouthSpectroscopyRow) extends AnyVal {
      def toGmosSITCInput: Input[GmosSITCInput] =
        GmosSITCInput(r.disperser, r.fpu, filter = r.filter.orIgnore).assign
    }

    implicit class RadialVelocityOps(val r: RadialVelocity) extends AnyVal {
      def toITCInput: RadialVelocityInput =
        RadialVelocityInput(metersPerSecond = r.rv.value.assign)
    }

    implicit class ScienceDataOps(val s: ObsQueries.ScienceData) extends AnyVal {
      // From the list of targets selects the ones relevant for ITC
      def itcTargets: List[ITCTarget] = s.targets.asterism
        .map { case TargetWithId(_, target) =>
          (targetRV.getOption(target), targetBrightnesses.get(target)).mapN(ITCTarget.apply)
        }
        .flatten
        .hashDistinct
    }

    implicit class ITCInstrumentModesOps(val m: InstrumentRow) extends AnyVal {
      def toITCInput: Option[InstrumentModes] = m match {
        case r: GmosNorthSpectroscopyRow =>
          InstrumentModes(gmosN = r.toGmosNITCInput).some
        case r: GmosSouthSpectroscopyRow =>
          InstrumentModes(gmosS = r.toGmosSITCInput).some
        case _                           => none
      }
    }
  }
}
