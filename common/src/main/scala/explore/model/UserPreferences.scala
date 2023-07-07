// Copyright (c) 2016-2023 Association of Universities for Research in Astronomy, Inc. (AURA)
// For license information see LICENSE or https://opensource.org/licenses/BSD-3-Clause

package explore.model

import cats.Eq
import cats.derived.*
import cats.implicits.*
import explore.model.enums.GridLayoutSection
import explore.model.layout.LayoutsMap
import monocle.Focus

case class UserPreferences(
  private val gridLayouts: Map[GridLayoutSection, LayoutsMap]
) derives Eq {
  private def tabLayout(l: GridLayoutSection) =
    gridLayouts.getOrElse(l, ExploreGridLayouts.sectionLayout(l))

  val constraintsTabLayout =
    tabLayout(GridLayoutSection.ConstraintsLayout)

  val targetTabLayout =
    tabLayout(GridLayoutSection.TargetLayout)

  val schedulingTabLayout =
    tabLayout(GridLayoutSection.SchedulingLayout)

  val observationsTabLayout =
    tabLayout(GridLayoutSection.ObservationsLayout)
}

object UserPreferences:
  val Default     = UserPreferences(ExploreGridLayouts.DefaultLayouts)
  val gridLayouts = Focus[UserPreferences](_.gridLayouts)
