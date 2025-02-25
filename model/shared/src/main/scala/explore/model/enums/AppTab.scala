// Copyright (c) 2016-2023 Association of Universities for Research in Astronomy, Inc. (AURA)
// For license information see LICENSE or https://opensource.org/licenses/BSD-3-Clause

package explore.model.enums

import cats.data.NonEmptyList
import lucuma.core.util.Enumerated

/**
 * Describes the application tab buttons in the sidebar
 *
 * @param title
 *   The text for the button
 * @param buttonGroup
 *   Groups the buttons with the same value together
 *
 * Within a button group, order is determined by the AppTab Order instance, which is determined by
 * the order in AppTab.all.
 */
enum AppTab(val title: String, val buttonGroup: Int) derives Enumerated:
  case Program      extends AppTab("Program", 1)
  case Proposal     extends AppTab("Proposal", 1)
  case Overview     extends AppTab("Overview", 2)
  case Observations extends AppTab("Observations", 3)
  case Targets      extends AppTab("Targets", 3)
  // case Configurations extends AppTab("Configurations", 3)
  case Constraints  extends AppTab("Constraints", 3)
  case Scheduling   extends AppTab("Scheduling", 3)

  def tag: String = title
