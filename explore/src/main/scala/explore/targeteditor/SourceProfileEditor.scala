// Copyright (c) 2016-2022 Association of Universities for Research in Astronomy, Inc. (AURA)
// For license information see LICENSE or https://opensource.org/licenses/BSD-3-Clause

package explore.targeteditor

import cats.data.NonEmptyChain
import cats.data.Validated
import cats.syntax.all._
import clue.data.syntax._
import crystal.react.reuse._
import eu.timepit.refined.auto._
import explore.components.ui.ExploreStyles
import explore.implicits._
import explore.schemas.implicits._
import explore.utils._
import japgolly.scalajs.react._
import japgolly.scalajs.react.vdom.html_<^._
import lucuma.core.math.Angle
import lucuma.core.model.SourceProfile
import lucuma.core.model.SourceProfile._
import lucuma.core.util.Display
import lucuma.core.util.Enumerated
import lucuma.schemas.ObservationDB.Types._
import lucuma.ui.forms.EnumSelect
import lucuma.ui.optics.ChangeAuditor
import lucuma.ui.optics.ValidFormatInput
import lucuma.ui.reusability._
import react.common._

case class SourceProfileEditor(
  sourceProfile:       Reuse[RemoteSyncUndoable[SourceProfile, SourceProfileInput]],
  disabled:            Boolean
)(implicit val appCtx: AppContextIO)
    extends ReactFnProps[SourceProfileEditor](SourceProfileEditor.component)

object SourceProfileEditor {
  type Props = SourceProfileEditor

  protected implicit val reuseProps: Reusability[Props] = Reusability.derive

  private sealed abstract class SourceProfileType(
    val name:    String,
    val convert: SourceProfile => SourceProfile
  ) extends Product
      with Serializable
  private object SourceProfileType {
    case object PointType    extends SourceProfileType("Point", _.toPoint)
    case object UniformType  extends SourceProfileType("Uniform", _.toUniform)
    case object GaussianType extends SourceProfileType("Gaussian", _.toGaussian)

    implicit val enumSourceProfileType: Enumerated[SourceProfileType] =
      Enumerated.from(PointType, UniformType, GaussianType).withTag(_.name)

    implicit val displaySourceProfileType: Display[SourceProfileType] = Display.byShortName(_.name)
  }

  // We can't define a Format[String, Angle] for arcseconds. Roundtrip laws fail because of rounding.
  private val angleValidFormatInput: ValidFormatInput[Angle] =
    ValidFormatInput(
      s =>
        Validated.fromOption((s.toDoubleOption.map(Angle.fromDoubleArcseconds)),
                             NonEmptyChain("Invalid angle")
        ),
      a => (a.toMicroarcseconds / 1000000.0).toString
    )

  protected val component = ScalaFnComponent[Props] // .withReuse[Props]
  { props =>
    implicit val appCtx = props.appCtx

    val currentType: SourceProfileType = props.sourceProfile.value.get match {
      case Point(_)       => SourceProfileType.PointType
      case Uniform(_)     => SourceProfileType.UniformType
      case Gaussian(_, _) => SourceProfileType.GaussianType
    }

    val gaussianRSUOpt: Option[RemoteSyncUndoable[Gaussian, GaussianInput]] =
      props.sourceProfile
        .zoomOpt(
          SourceProfile.gaussian,
          forceAssign(SourceProfileInput.gaussian.modify)(GaussianInput())
        )

    React.Fragment(
      <.label("Profile", ExploreStyles.SkipToNext),
      EnumSelect(
        value = currentType.some,
        onChange = Reuse.by(props.sourceProfile)((sp: SourceProfileType) =>
          props.sourceProfile.view(_.toInput).mod(sp.convert)
        )
      ),
      <.span,
      props.sourceProfile // We need to turn Reuse[Option into Option[Reuse
        .zoomOpt(
          SourceProfile.point.andThen(Point.spectralDefinition),
          forceAssign(SourceProfileInput.point.modify)(SpectralDefinitionIntegratedInput())
        )
        .map(pointSpectralDefinitionAccess =>
          IntegratedSpectralDefinitionEditor(pointSpectralDefinitionAccess)
        ),
      props.sourceProfile
        .zoomOpt(
          SourceProfile.uniform.andThen(Uniform.spectralDefinition),
          forceAssign(SourceProfileInput.uniform.modify)(SpectralDefinitionSurfaceInput())
        )
        .map(uniformSpectralDefinitionAccess =>
          SurfaceSpectralDefinitionEditor(uniformSpectralDefinitionAccess)
        ),
      gaussianRSUOpt
        .map(gaussianRSU =>
          React.Fragment(
            <.label("FWHM", ExploreStyles.SkipToNext),
            InputWithUnits( // FWHM is positive arcsec accepting decimals
              gaussianRSU.zoom(Gaussian.fwhm, GaussianInput.fwhm.modify).view(_.toInput.assign),
              angleValidFormatInput,
              ChangeAuditor.fromValidFormatInput(angleValidFormatInput).denyNeg,
              id = "fwhm",
              units = "arcsec"
            ),
            IntegratedSpectralDefinitionEditor(
              gaussianRSU.zoom(
                Gaussian.spectralDefinition,
                forceAssign(GaussianInput.spectralDefinition.modify)(
                  SpectralDefinitionIntegratedInput()
                )
              )
            )
          )
        )
    )
  }
}
