// Copyright (c) 2016-2022 Association of Universities for Research in Astronomy, Inc. (AURA)
// For license information see LICENSE or https://opensource.org/licenses/BSD-3-Clause

package explore.config

import cats.Eq
import cats.derived.*

enum ConfigEditState derives Eq {
  case TableView, DetailsView, SimpleEdit, AdvancedEdit
}
