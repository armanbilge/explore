// Copyright (c) 2016-2023 Association of Universities for Research in Astronomy, Inc. (AURA)
// For license information see LICENSE or https://opensource.org/licenses/BSD-3-Clause

package explore.common

import cats.ApplicativeThrow
import cats.MonadThrow
import cats.Order.*
import cats.data.OptionT
import cats.syntax.all.*
import clue.FetchClient
import clue.data.syntax.*
import eu.timepit.refined.*
import eu.timepit.refined.numeric.*
import explore.DefaultErrorPolicy
import explore.model.AladinFullScreen
import explore.model.AladinMouseScroll
import explore.model.ChartOp
import explore.model.ColorsInverted
import explore.model.GlobalPreferences
import explore.model.TargetVisualOptions
import explore.model.Transformation
import explore.model.enums.GridBreakpointName
import explore.model.enums.GridLayoutSection
import explore.model.enums.PlotRange
import explore.model.enums.TableId
import explore.model.enums.TimeDisplay
import explore.model.enums.Visible
import explore.model.itc.PlotDetails
import explore.model.itc.*
import explore.model.layout.*
import lucuma.core.math.Angle
import lucuma.core.math.Offset
import lucuma.core.model.ObsAttachment
import lucuma.core.model.Observation
import lucuma.core.model.Target
import lucuma.core.model.User
import lucuma.core.util.Enumerated
import lucuma.itc.ChartType
import lucuma.react.gridlayout.*
import lucuma.react.table.*
import lucuma.ui.table.TableStateStore
import org.typelevel.log4cats.Logger
import queries.common.UserPreferencesQueriesGQL.UserGridLayoutUpdates.Data.LucumaGridLayoutPositions
import queries.common.UserPreferencesQueriesGQL.UserPreferencesQuery
import queries.common.UserPreferencesQueriesGQL.UserTargetPreferencesQuery.Data.ExploreTargetPreferencesByPk
import queries.common.UserPreferencesQueriesGQL.*
import queries.schemas.UserPreferencesDB
import queries.schemas.UserPreferencesDB.Enums.*
import queries.schemas.UserPreferencesDB.Scalars.*
import queries.schemas.UserPreferencesDB.Types.*

import scala.collection.immutable.SortedMap

object UserPreferencesQueries:
  type TableColumnPreferences = TableColumnPreferencesQuery.Data
  val TableColumnPreferences = TableColumnPreferencesQuery.Data

  object GlobalUserPreferences:
    def loadPreferences[F[_]: ApplicativeThrow](
      userId: User.Id
    )(using FetchClient[F, UserPreferencesDB]): F[GlobalPreferences] =
      UserPreferencesQuery[F]
        .query(userId.show)
        .map(_.lucumaUserPreferencesByPk)
        .handleError(_ => none)
        .map(_.getOrElse(GlobalPreferences.Default))

    // We could pass the full prefs but this is more efficient
    def storeAladinPreferences[F[_]: ApplicativeThrow](
      userId:             User.Id,
      aladinMouseScroll:  Option[AladinMouseScroll] = None,
      fullScreen:         Option[AladinFullScreen] = None,
      showCatalog:        Option[Visible] = None,
      agsOverlay:         Option[Visible] = None,
      scienceOffsets:     Option[Visible] = None,
      acquisitionOffsets: Option[Visible] = None
    )(using FetchClient[F, UserPreferencesDB]): F[Unit] =
      UserPreferencesAladinUpdate[F]
        .execute(
          objects = LucumaUserPreferencesInsertInput(
            userId = userId.show.assign,
            aladinMouseScroll = aladinMouseScroll.map(_.value).orIgnore,
            showCatalog = showCatalog.map(_.isVisible).orIgnore,
            agsOverlay = agsOverlay.map(_.isVisible).orIgnore,
            scienceOffsets = scienceOffsets.map(_.isVisible).orIgnore,
            acquisitionOffsets = acquisitionOffsets.map(_.isVisible).orIgnore,
            fullScreen = fullScreen.map(_.value).orIgnore
          )
        )
        .attempt
        .void

  end GlobalUserPreferences

  object GridLayouts:
    extension (e: BreakpointName)
      def toGridBreakpointName: GridBreakpointName =
        Enumerated[GridBreakpointName].unsafeFromTag(e.name)

    private trait DBLayoutPosition[A]:
      extension (a: A)
        def breapointName: BreakpointName
        def layoutItem: LayoutItem

    private given dataPos: DBLayoutPosition[UserGridLayoutQuery.Data.LucumaGridLayoutPositions] with
      extension (a: UserGridLayoutQuery.Data.LucumaGridLayoutPositions)
        def breapointName: BreakpointName = breakpointNameFromString(a.breakpointName.tag)
        def layoutItem: LayoutItem        = LayoutItem(a.width, a.height, a.x, a.y, a.tile)

    private given subsPos: DBLayoutPosition[UserGridLayoutUpdates.Data.LucumaGridLayoutPositions]
    with
      extension (a: UserGridLayoutUpdates.Data.LucumaGridLayoutPositions)
        def breapointName: BreakpointName = breakpointNameFromString(a.breakpointName.tag)
        def layoutItem: LayoutItem        = LayoutItem(a.width, a.height, a.x, a.y, a.tile)

    private def positions2LayoutMap[A](
      g: (GridBreakpointName, List[A])
    )(using dbPos: DBLayoutPosition[A]): (BreakpointName, (Int, Int, Layout)) =
      val bn = breakpointNameFromString(g._1.tag)
      bn -> ((breakpointWidth(bn),
              breakpointCols(bn),
              Layout(
                g._2.map(_.layoutItem)
              )
      ))

    // Gets the layouts for all of the sections.
    def queryLayouts[F[_]: MonadThrow](
      userId: Option[User.Id]
    )(using FetchClient[F, UserPreferencesDB]): F[Option[Map[GridLayoutSection, LayoutsMap]]] =
      (for {
        uid <- OptionT.fromOption[F](userId)
        r   <-
          OptionT
            .liftF[F, Map[GridLayoutSection, SortedMap[BreakpointName, (Int, Int, Layout)]]] {
              UserGridLayoutQuery[F].query(uid.show).map { r =>
                r.lucumaGridLayoutPositions match {
                  case l if l.isEmpty => Map.empty
                  case l              =>
                    l.groupBy(_.section).map { case (s, l) =>
                      s -> SortedMap(
                        l.groupBy(_.breakpointName).map(positions2LayoutMap).toList: _*
                      )
                    }
                }
              }
            }
            .handleErrorWith(_ => OptionT.none)
      } yield r).value

    def updateLayouts(
      data: List[LucumaGridLayoutPositions]
    ): Map[GridLayoutSection, LayoutsMap] => Map[GridLayoutSection, LayoutsMap] = original =>
      data match {
        case l if l.isEmpty => original
        case l              =>
          val newMap = l.groupBy(_.section).map { case (s, l) =>
            s -> SortedMap(
              l.groupBy(_.breakpointName).map(positions2LayoutMap).toList: _*
            )
          }
          mergeSectionLayoutsMaps(original, newMap)
      }

    def storeLayoutsPreference[F[_]: ApplicativeThrow](
      userId:  Option[User.Id],
      section: GridLayoutSection,
      layouts: Layouts
    )(using FetchClient[F, UserPreferencesDB]): F[Unit] =
      userId.traverse { uid =>
        UserGridLayoutUpsert[F]
          .execute(
            layouts.layouts.flatMap { bl =>
              bl.layout.asList.collect {
                case i if i.i.nonEmpty && i.h > 0 =>
                  LucumaGridLayoutPositionsInsertInput(
                    userId = uid.show.assign,
                    section = section.assign,
                    breakpointName = bl.name.toGridBreakpointName.assign,
                    width = i.w.assign,
                    height = i.h.assign,
                    x = i.x.assign,
                    y = i.y.assign,
                    tile = i.i.assign
                  )
              }
            }
          )
          .attempt
      }.void
  end GridLayouts

  object TargetPreferences:
    def updateAladinPreferences[F[_]: ApplicativeThrow](
      uid:        User.Id,
      targetId:   Target.Id,
      fovRA:      Option[Angle] = None,
      fovDec:     Option[Angle] = None,
      saturation: Option[Int] = None,
      brightness: Option[Int] = None
    )(using FetchClient[F, UserPreferencesDB]): F[Unit] =
      UserTargetPreferencesUpsert[F]
        .execute(
          LucumaTargetInsertInput(
            targetId = targetId.show.assign,
            lucuma_target_preferences = ExploreTargetPreferencesArrRelInsertInput(
              data = List(
                ExploreTargetPreferencesInsertInput(
                  userId = uid.show.assign,
                  fovRA = fovRA.map(_.toMicroarcseconds).orIgnore,
                  fovDec = fovDec.map(_.toMicroarcseconds).orIgnore,
                  saturation = saturation.orIgnore,
                  brightness = brightness.orIgnore
                )
              ),
              onConflict = ExploreTargetPreferencesOnConflict(
                constraint = ExploreTargetPreferencesConstraint.LucumaTargetPreferencesPkey,
                update_columns = List(
                  ExploreTargetPreferencesUpdateColumn.FovRA.some.filter(_ => fovRA.isDefined),
                  ExploreTargetPreferencesUpdateColumn.FovDec.some.filter(_ => fovDec.isDefined),
                  ExploreTargetPreferencesUpdateColumn.Saturation.some.filter(_ =>
                    saturation.isDefined
                  ),
                  ExploreTargetPreferencesUpdateColumn.Brightness.some.filter(_ =>
                    brightness.isDefined
                  )
                ).flattenOption
              ).assign
            ).assign
          )
        )
        .attempt
        .void

    // Gets the target properties
    def queryWithDefault[F[_]: ApplicativeThrow](
      uid:        User.Id,
      tid:        Target.Id,
      defaultFov: Angle
    )(using
      FetchClient[F, UserPreferencesDB]
    ): F[TargetVisualOptions] =
      UserTargetPreferencesQuery[F]
        .query(uid.show, tid.show)
        .map { r =>
          val targetPrefsResult = r.exploreTargetPreferencesByPk

          val fovRA  =
            targetPrefsResult.flatMap(_.fovRA.map(Angle.fromMicroarcseconds)).getOrElse(defaultFov)
          val fovDec =
            targetPrefsResult.flatMap(_.fovDec.map(Angle.fromMicroarcseconds)).getOrElse(defaultFov)
          val offset = targetPrefsResult
            .flatMap(u =>
              (u.viewOffsetP.map(Angle.fromMicroarcseconds(_).p),
               u.viewOffsetQ.map(Angle.fromMicroarcseconds(_).q)
              )
                .mapN(Offset.apply)
            )
            .getOrElse(TargetVisualOptions.Default.viewOffset)

          def rangeProp(op: ExploreTargetPreferencesByPk => Option[Int]) = targetPrefsResult
            .flatMap(op)
            .flatMap(refineV[Interval.Closed[0, 100]](_).toOption)
            .getOrElse(TargetVisualOptions.Default.saturation)

          val saturation = rangeProp(_.saturation)
          val brightness = rangeProp(_.brightness)

          TargetVisualOptions(fovRA, fovDec, offset, saturation, brightness).some
        }
        .handleError(_ => none)
        .map(_.getOrElse(TargetVisualOptions.Default))

    def updateViewOffset[F[_]: ApplicativeThrow](
      uid:      User.Id,
      targetId: Target.Id,
      offset:   Offset
    )(using FetchClient[F, UserPreferencesDB]): F[Unit] =
      UserTargetPreferencesUpsert[F]
        .execute(
          LucumaTargetInsertInput(
            targetId = targetId.show.assign,
            lucuma_target_preferences = ExploreTargetPreferencesArrRelInsertInput(
              data = List(
                ExploreTargetPreferencesInsertInput(
                  userId = uid.show.assign,
                  viewOffsetP = offset.p.toAngle.toMicroarcseconds.assign,
                  viewOffsetQ = offset.q.toAngle.toMicroarcseconds.assign
                )
              ),
              onConflict = ExploreTargetPreferencesOnConflict(
                constraint = ExploreTargetPreferencesConstraint.LucumaTargetPreferencesPkey,
                update_columns = List(
                  ExploreTargetPreferencesUpdateColumn.ViewOffsetP.some,
                  ExploreTargetPreferencesUpdateColumn.ViewOffsetQ.some
                ).flattenOption
              ).assign
            ).assign
          )
        )
        .attempt
        .void

  end TargetPreferences

  object FinderChartPreferences:
    // Gets the prefs for the itc plot
    def queryWithDefault[F[_]: ApplicativeThrow](
      oid: Observation.Id,
      aid: ObsAttachment.Id
    )(using FetchClient[F, UserPreferencesDB]): F[Transformation] =
      FinderChartTransformationQuery[F]
        .query(aid.show, oid.show)
        .map { r =>
          r.exploreFinderChartByPk.map(r =>
            Transformation(
              ChartOp.Rotate(r.rotate),
              ChartOp.ScaleX(r.scaleX.toDouble / 100),
              ChartOp.ScaleY(r.scaleY.toDouble / 100),
              ChartOp.FlipX(r.flipX),
              ChartOp.FlipY(r.flipY),
              ColorsInverted.fromBoolean(r.inverted)
            )
          )
        }
        .handleError(_ => none)
        .map(_.getOrElse(Transformation.Default))

    def updateTransformation[F[_]: ApplicativeThrow](
      oid:       Observation.Id,
      aid:       ObsAttachment.Id,
      transform: Transformation
    )(using FetchClient[F, UserPreferencesDB]): F[Unit] =
      FinderChartUpsert[F]
        .execute(
          ExploreFinderChartInsertInput(
            observationId = oid.show.assign,
            attachmentId = aid.show.assign,
            flipX = transform.flipX.flip.assign,
            flipY = transform.flipY.flip.assign,
            rotate = transform.rotate.deg.assign,
            scaleX = (transform.scaleX.scale * 100).toInt.assign,
            scaleY = (transform.scaleY.scale * 100).toInt.assign,
            inverted = transform.inverted.value.assign
          )
        )
        .attempt
        .void

  object ItcPlotPreferences:
    def updatePlotPreferences[F[_]: ApplicativeThrow](
      userId:         User.Id,
      itcChartType:   ChartType,
      itcDetailsOpen: PlotDetails
    )(using FetchClient[F, UserPreferencesDB]): F[Unit] =
      UserPreferencesItcPlotUpdate[F]
        .execute(
          userId = userId.show.assign,
          itcChartType = itcChartType,
          itcDetailsOpen = itcDetailsOpen.value
        )
        .attempt
        .void
  end ItcPlotPreferences

  object ElevationPlotPreference:
    def updatePlotPreferences[F[_]: ApplicativeThrow](
      userId:     User.Id,
      range:      PlotRange,
      time:       TimeDisplay,
      scheduling: Boolean
    )(using FetchClient[F, UserPreferencesDB]): F[Unit] =
      UserPreferencesElevPlotUpdate[F]
        .execute(
          userId = userId.show.assign,
          elevationPlotRange = range,
          elevationPlotTime = time,
          elevationPlotScheduling = scheduling
        )
        .attempt
        .void
  end ElevationPlotPreference

  case class TableStore[F[_]: MonadThrow](
    userId:  Option[User.Id],
    tableId: TableId,
    columns: List[ColumnDef[?, ?]]
  )(using FetchClient[F, UserPreferencesDB], Logger[F])
      extends TableStateStore[F]:
    def load(): F[TableState => TableState] =
      userId
        .traverse { uid =>
          TableColumnPreferencesQuery[F]
            .query(
              userId = uid.show.assign,
              tableId = tableId.assign
            )
            .recoverWith(t =>
              Logger[F]
                .error(t)(s"Error loading table preferences for [$tableId]")
                .as(TableColumnPreferencesQuery.Data(Nil))
            )
            .map(prefs =>
              (tableState: TableState) =>
                tableState
                  .setColumnVisibility(
                    prefs.lucumaTableColumnPreferences.applyVisibility(tableState.columnVisibility)
                  )
                  .setSorting(prefs.lucumaTableColumnPreferences.applySorting(tableState.sorting))
            )
        }
        .map(_.getOrElse(identity))

    def save(state: TableState): F[Unit] =
      userId.traverse { uid =>
        TableColumnPreferencesUpsert[F]
          .execute(
            columns.map(col =>
              val sorting: Map[ColumnId, (SortDirection, Int)] = state.sorting.value.zipWithIndex
                .map((colSort, idx) => colSort.columnId -> (colSort.direction, idx))
                .toMap

              LucumaTableColumnPreferencesInsertInput(
                userId = uid.show.assign,
                tableId = tableId.assign,
                columnId = col.id.value.assign,
                visible =
                  state.columnVisibility.value.getOrElse(col.id, Visibility.Visible).value.assign,
                sorting = sorting.get(col.id).map(_._1).orUnassign,
                sortingOrder = sorting.get(col.id).map(_._2).orUnassign
              )
            )
          )
          .attempt
      }.void
  end TableStore

  extension (tableColsPrefs: List[TableColumnPreferencesQuery.Data.LucumaTableColumnPreferences])
    def applyVisibility(original: ColumnVisibility): ColumnVisibility =
      original.modify(
        _ ++
          tableColsPrefs.map(col => ColumnId(col.columnId) -> Visibility.fromVisible(col.visible))
      )

    def applySorting(original: Sorting): Sorting =
      val sortedCols =
        tableColsPrefs
          .flatMap(col => (ColumnId(col.columnId).some, col.sorting, col.sortingOrder).tupled)
          .sortBy(_._3)

      // We don't force unsorting, in case there's a default sorting.
      sortedCols match
        case Nil      => original
        case nonEmpty => Sorting(nonEmpty.map((colId, dir, _) => colId -> dir): _*)
