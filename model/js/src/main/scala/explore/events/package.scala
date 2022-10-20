// Copyright (c) 2016-2022 Association of Universities for Research in Astronomy, Inc. (AURA)
// For license information see LICENSE or https://opensource.org/licenses/BSD-3-Clause

package explore.events

import scala.scalajs.js

// These are messages sent across tabs thus they need to be JS compatible
// We don't need yet more than just an index to  differentiate
sealed trait ExploreEvent extends js.Object {
  def event: Int
  def value: js.Any // encode whatever value as a String. it can be e.g. json
}

object ExploreEvent {
  val LogoutEventId = 1
  val PWAUpdateId   = 2
  val PWAReloadId   = 3

  class LogoutEvent(val nonce: Long) extends ExploreEvent {
    val event = LogoutEventId
    val value = nonce.toString
  }

  object LogoutEvent {
    val event = LogoutEventId
    def apply(nonce: Long)                    = new LogoutEvent(nonce)
    def unapply(l:   LogoutEvent): Some[Long] = Some(l.nonce)
  }

  object PWAUpdate extends ExploreEvent {
    val event = PWAUpdateId
    val value = ""
  }

  object PWAReload extends ExploreEvent {
    val event = PWAReloadId
    val value = ""
  }

}
