// Copyright (c) 2016-2022 Association of Universities for Research in Astronomy, Inc. (AURA)
// For license information see LICENSE or https://opensource.org/licenses/BSD-3-Clause

package explore.targeteditor

import cats.syntax.all._
import explore.components.ui.ExploreStyles
import explore.implicits._
import explore.model.reusability._
import explore.schemas.implicits._
import explore.utils._
import japgolly.scalajs.react._
import japgolly.scalajs.react.vdom.html_<^._
import lucuma.core.model.SourceProfile
import lucuma.core.model.SourceProfile._
import lucuma.core.util.Display
import lucuma.core.util.Enumerated
import lucuma.schemas.ObservationDB.Types._
import lucuma.ui.forms.EnumSelect
import react.common._

case class SourceProfileEditor(
  sourceProfile:       RemoteSyncUndoable[SourceProfile, SourceProfileInput],
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

  protected val component = ScalaFnComponent.withReuse[Props] { props =>
    implicit val appCtx = props.appCtx

    val currentType: SourceProfileType = props.sourceProfile.get match {
      case Point(_)       => SourceProfileType.PointType
      case Uniform(_)     => SourceProfileType.UniformType
      case Gaussian(_, _) => SourceProfileType.GaussianType
    }

    <.div(
      ExploreStyles.BrightnessCell,
      // TODO make some of the parameters optional in lucuma-ui
      EnumSelect[SourceProfileType](
        label = "Profile",
        value = currentType.some,
        placeholder = "",
        disabled = false,
        onChange = sp => props.sourceProfile.view(_.toInput).mod(sp.convert)
      ),
      props.sourceProfile
        .zoomOpt(
          SourceProfile.point.andThen(Point.spectralDefinition),
          forceAssign(SourceProfileInput.point.modify)(SpectralDefinitionIntegratedInput())
        )
        .map(pointSpectralDefinitionAccess =>
          IntegratedSpectralDefinitionEditor(pointSpectralDefinitionAccess)
        )
        .whenDefined,
      props.sourceProfile
        .zoomOpt(
          SourceProfile.uniform.andThen(Uniform.spectralDefinition),
          forceAssign(SourceProfileInput.uniform.modify)(SpectralDefinitionSurfaceInput())
        )
        .map(uniformSpectralDefinitionAccess =>
          SurfaceSpectralDefinitionEditor(uniformSpectralDefinitionAccess)
        )
        .whenDefined,
      // TODO Gaussian angle input
      props.sourceProfile
        .zoomOpt(
          SourceProfile.gaussian.andThen(Gaussian.spectralDefinition),
          forceAssign(SourceProfileInput.gaussian.modify)(GaussianInput())
            .compose(
              forceAssign(GaussianInput.spectralDefinition.modify)(
                SpectralDefinitionIntegratedInput()
              )
            )
        )
        .map(gaussianSpectralDefinitionAccess =>
          IntegratedSpectralDefinitionEditor(gaussianSpectralDefinitionAccess)
        )
        .whenDefined
    )
  }
}
