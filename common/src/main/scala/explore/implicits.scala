// Copyright (c) 2016-2022 Association of Universities for Research in Astronomy, Inc. (AURA)
// For license information see LICENSE or https://opensource.org/licenses/BSD-3-Clause

package explore

import cats._
import cats.syntax.all._
import clue._
import coulomb.Quantity
import crystal.react.ReuseViewF
import crystal.react.ReuseViewOptF
import crystal.react.reuse._
import explore.model.AppContext
import explore.model.RootModel
import explore.optics._
import explore.schemas._
import japgolly.scalajs.react._
import japgolly.scalajs.react.vdom._
import lucuma.core.optics._
import lucuma.schemas._
import monocle.function.At.at
import monocle.function.Index.index
import org.scalajs.dom
import org.typelevel.log4cats.Logger
import shapeless._

import scala.annotation.unused
import scala.collection.immutable.SortedMap
import scala.concurrent.duration
import crystal.ViewOptF
import crystal.ViewF

trait ListImplicits {

  // Adapted from https://stackoverflow.com/a/21444327/5808801
  implicit object hnilMonoid extends Monoid[HNil] {
    val empty                                       = HNil
    def combine(@unused f1: HNil, @unused f2: HNil) = HNil
  }

  implicit def hconsMonoid[H: Monoid, T <: HList: Monoid] =
    new Monoid[H :: T] {
      val empty                           = Monoid[H].empty :: Monoid[T].empty
      def combine(f1: H :: T, f2: H :: T) =
        (f1.head |+| f2.head) :: (f1.tail |+| f2.tail)
    }

  private object singleton extends Poly1 { implicit def anything[A] = at[A](List(_)) }

  implicit class UnzipListOpts[L <: HList](hlists: List[L]) {
    def unzipN[Out <: HList](implicit
      mapper: ops.hlist.Mapper.Aux[singleton.type, L, Out],
      monoid: Monoid[Out]
    ): Out = hlists.map(_.map(singleton)).combineAll
  }

  implicit class ViewListOps[F[_]: Monad, A](val viewList: ReuseViewF[F, List[A]]) {
    def toListOfViews: List[ReuseViewF[F, A]] =
      // It's safe to "get" since we are only invoking for existing indices.
      viewList.get.indices.toList.map { i =>
        val atIndex = index[List[A], Int, A](i)
        viewList
          .zoom((atIndex.getOption _).andThen(_.get))(atIndex.modify)
      }
  }

  implicit class ViewMapOps[F[_]: Monad, K, V](val viewMap: ReuseViewF[F, Map[K, V]]) {
    def toListOfViews: List[(K, ReuseViewF[F, V])] =
      // It's safe to "get" since we are only invoking for existing keys.
      viewMap.get.keys.toList.map(k =>
        k -> viewMap.zoom(at[Map[K, V], K, Option[V]](k)).zoom(_.get)(f => _.map(f))
      )
  }

  implicit class ListOps[A](val list: List[A]) {
    def toSortedMap[K: Ordering, V](getKey: A => K, getValue: A => V = identity[A](_)) =
      SortedMap.from(list.map(a => (getKey(a), getValue(a))))
  }
}

trait ContextImplicits {
  implicit def appContext2Parallel[F[_]](implicit ctx: AppContext[F]): Parallel[F] =
    ctx.P
  implicit def appContext2Logger[F[_]](implicit ctx: AppContext[F]): Logger[F]     =
    ctx.logger
  implicit def appContext2UserPreferencesDBClient[F[_]](implicit
    ctx: AppContext[F]
  ): WebSocketClient[F, UserPreferencesDB] =
    ctx.clients.preferencesDB
  implicit def appContext2ODBClient[F[_]](implicit
    ctx: AppContext[F]
  ): WebSocketClient[F, ObservationDB] =
    ctx.clients.odb
  implicit def appContext2ITC[F[_]](implicit
    ctx: AppContext[F]
  ): TransactionalClient[F, ITC] =
    ctx.clients.itc
}

object implicits extends ShorthandTypes with ListImplicits with ContextImplicits {
  // TODO Remove this when it's included in scalajs-react
  // https://github.com/japgolly/scalajs-react/pull/1004
  implicit object CallbackMonoid extends Monoid[Callback] {
    val empty: Callback                             = Callback.empty
    def combine(x: Callback, y: Callback): Callback = x >> y
  }

  // View Optics implicits
  implicit class ViewOpticsOps[F[_], A](val view: ReuseViewF[F, A]) extends AnyVal {
    def zoomGetAdjust[B](getAdjust: GetAdjust[A, B])(implicit F: Monad[F]): ReuseViewF[F, B] =
      view.zoom(getAdjust.get)(getAdjust.mod)

    // Helps type inference by sidestepping overloaded "zoom".
    def zoomPrism[B](prism: monocle.Prism[A, B])(implicit F: Monad[F]): ReuseViewOptF[F, B] =
      view.zoom(prism)

    // Helps type inference by sidestepping overloaded "zoom".
    def zoomLens[B](lens: monocle.Lens[A, B])(implicit F: Monad[F]): ReuseViewF[F, B] =
      view.zoom(lens)
  }

  implicit class ViewOptOpticsOps[F[_], A](val viewOpt: ReuseViewOptF[F, A]) extends AnyVal {
    // Helps type inference by sidestepping overloaded "zoom".
    def zoomLens[B](lens: monocle.Lens[A, B])(implicit F: Monad[F]): ReuseViewOptF[F, B] =
      viewOpt.zoom(lens)
  }

  // Coulomb implicits
  implicit class CoulombReuseViewOps[F[_], N, U](val self: ReuseViewF[F, Quantity[N, U]])
      extends AnyVal {
    def stripQuantity(implicit F: Monad[F]): ReuseViewF[F, N] = self.as(quantityIso[N, U])
  }

  implicit class CoulombReuseViewOptOps[F[_], N, U](val self: ReuseViewOptF[F, Quantity[N, U]])
      extends AnyVal {
    def stripQuantity(implicit F: Monad[F]): ReuseViewOptF[F, N] = self.as(quantityIso[N, U])
  }

  // TODO Only used in proposals view. Remove when we migrate it to ReuseView?
  implicit class CoulombViewOps[F[_], N, U](val self: ViewF[F, Quantity[N, U]]) extends AnyVal {
    def stripQuantity: ViewF[F, N] = self.as(quantityIso[N, U])
  }

  // TODO Only used in proposals view. Remove when we migrate it to ReuseView?
  implicit class CoulombViewOptOps[F[_], N, U](val self: ViewOptF[F, Quantity[N, U]])
      extends AnyVal {
    def stripQuantity: ViewOptF[F, N] = self.as(quantityIso[N, U])
  }

  // Model implicits
  implicit class RootModelOps(val rootModel: RootModel) extends AnyVal {
    def url[F[_]](implicit ctx: AppContext[F]): String =
      ctx.pageUrl(rootModel.tabs.focus, rootModel.focusedObs, rootModel.focusedTarget)
  }

  // React implicits
  implicit class HtmlAttrsOps(val a: HtmlAttrs) extends AnyVal {
    // Generalize https://gist.github.com/pstoica/4323d3e6e37e8a23dd59
    def onComponentBlur(handler: Callback): TagMod =
      a.onBlur ==> { (e: ReactFocusEvent) =>
        val currentTarget = e.currentTarget

        handler
          .when_(!currentTarget.contains(dom.document.activeElement))
          .setTimeout(duration.Duration.Zero)
          .void
      }
  }

}
