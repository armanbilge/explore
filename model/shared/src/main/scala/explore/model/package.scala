// Copyright (c) 2016-2021 Association of Universities for Research in Astronomy, Inc. (AURA)
// For license information see LICENSE or https://opensource.org/licenses/BSD-3-Clause

package explore

import eu.timepit.refined.types.string.NonEmptyString
import lucuma.core.enum.MagnitudeBand
import lucuma.core.model.Magnitude
import lucuma.core.model.NonsiderealTarget
import lucuma.core.model.SiderealTarget
import lucuma.core.model.Target
import monocle.Focus
import monocle.Lens
import monocle.Prism

import scala.collection.immutable.SortedMap

package object model {
  // It'd be nice to make these opaque
  type TargetWithId            = (TargetIdSet, Target)
  type SiderealTargetWithId    = (TargetIdSet, SiderealTarget)
  type NonsiderealTargetWithId = (TargetIdSet, NonsiderealTarget)

  object TargetWithId {
    val sidereal: Prism[TargetWithId, SiderealTargetWithId] =
      Prism.partial[TargetWithId, SiderealTargetWithId] {
        case (id, t @ SiderealTarget(_, _, _, _)) =>
          id -> t
      }(identity)

    val nonsidereal: Prism[TargetWithId, NonsiderealTargetWithId] =
      Prism.partial[TargetWithId, NonsiderealTargetWithId] {
        case (id, t @ NonsiderealTarget(_, _, _, _)) =>
          id -> t
      }(identity)

    val id: Lens[TargetWithId, TargetIdSet]                                 = Focus[TargetWithId](_._1)
    val target: Lens[TargetWithId, Target]                                  = Focus[TargetWithId](_._2)
    val name: Lens[TargetWithId, NonEmptyString]                            = target.andThen(Target.name)
    val magnitudes: Lens[TargetWithId, SortedMap[MagnitudeBand, Magnitude]] =
      target.andThen(Target.magnitudes)
  }
}
