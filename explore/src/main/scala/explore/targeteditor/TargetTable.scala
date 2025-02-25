// Copyright (c) 2016-2023 Association of Universities for Research in Astronomy, Inc. (AURA)
// For license information see LICENSE or https://opensource.org/licenses/BSD-3-Clause

package explore.targeteditor

import cats.effect.IO
import cats.syntax.all.*
import clue.FetchClient
import crystal.Pot
import crystal.react.*
import crystal.react.given
import crystal.react.hooks.*
import explore.Icons
import explore.common.AsterismQueries
import explore.common.UserPreferencesQueries.TableStore
import explore.components.Tile
import explore.components.ui.ExploreStyles
import explore.model.AladinFullScreen
import explore.model.AppContext
import explore.model.AsterismIds
import explore.model.ObsIdSet
import explore.model.TargetList
import explore.model.enums.TableId
import explore.model.extensions.*
import explore.model.reusability.given
import explore.targets.TargetColumns
import japgolly.scalajs.react.*
import japgolly.scalajs.react.vdom.html_<^.*
import lucuma.core.model.Program
import lucuma.core.model.Target
import lucuma.core.model.User
import lucuma.react.common.Css
import lucuma.react.common.ReactFnProps
import lucuma.react.primereact.Button
import lucuma.react.syntax.*
import lucuma.react.table.*
import lucuma.schemas.ObservationDB
import lucuma.schemas.model.SiderealTargetWithId
import lucuma.ui.primereact.*
import lucuma.ui.reusability.given
import lucuma.ui.syntax.*
import lucuma.ui.syntax.all.given
import lucuma.ui.table.TableHooks
import lucuma.ui.table.TableOptionsWithStateStore
import lucuma.ui.table.*

import java.time.Instant

case class TargetTable(
  userId:         Option[User.Id],
  programId:      Program.Id,
  obsIds:         ObsIdSet, // Only used to invoke DB
  // Targets are not modified here, we only modify which ones belong to the Asterism.
  targetIds:      View[AsterismIds],
  targetInfo:     TargetList,
  selectedTarget: View[Option[Target.Id]],
  vizTime:        Option[Instant],
  renderInTitle:  Tile.RenderInTitle,
  fullScreen:     AladinFullScreen
) extends ReactFnProps(TargetTable.component)

object TargetTable extends TableHooks:
  private type Props = TargetTable

  private val ColDef = ColumnDef[SiderealTargetWithId]

  private val DeleteColumnId: ColumnId = ColumnId("delete")

  private val columnNames: Map[ColumnId, String] = Map(
    DeleteColumnId -> " "
  ) ++ TargetColumns.AllColNames

  private val columnClasses: Map[ColumnId, Css] = Map(
    DeleteColumnId             -> (ExploreStyles.StickyColumn |+| ExploreStyles.TargetSummaryDelete),
    TargetColumns.TypeColumnId -> (ExploreStyles.StickyColumn |+| ExploreStyles.TargetSummaryType),
    TargetColumns.NameColumnId -> (ExploreStyles.StickyColumn |+| ExploreStyles.TargetSummaryName)
  )

  private def deleteSiderealTarget(
    programId: Program.Id,
    obsIds:    ObsIdSet,
    targetId:  Target.Id
  )(using FetchClient[IO, ObservationDB]): IO[Unit] =
    AsterismQueries.removeTargetsFromAsterisms[IO](programId, obsIds.toList, List(targetId))

  protected val component =
    ScalaFnComponent
      .withHooks[Props]
      .useContext(AppContext.ctx)
      // cols
      .useMemoBy((props, _) => (props.obsIds, props.targetIds.get)) { (props, ctx) => _ =>
        import ctx.given

        List(
          ColDef(
            DeleteColumnId,
            _.id,
            "",
            cell =>
              Button(
                text = true,
                clazz = ExploreStyles.DeleteButton |+| ExploreStyles.ObsDeleteButton,
                icon = Icons.Trash,
                tooltip = "Delete",
                onClickE = (e: ReactMouseEvent) =>
                  e.preventDefaultCB >>
                    e.stopPropagationCB >>
                    props.targetIds.mod(_ - cell.value) >>
                    deleteSiderealTarget(props.programId, props.obsIds, cell.value).runAsync
              ).tiny.compact,
            size = 35.toPx,
            enableSorting = false
          )
        ) ++
          TargetColumns.Builder.ForProgram(ColDef, _.target.some).AllColumns
      }
      // If vizTime is not set, change it to now
      .useEffectResultWithDepsBy((p, _, _) => p.vizTime) { (_, _, _) => vizTime =>
        IO(vizTime.getOrElse(Instant.now()))
      }
      // rows
      .useMemoBy((props, _, _, vizTime) => (props.targetIds.get, props.targetInfo, vizTime))(
        (_, _, _, _) =>
          case (targetIds, targetInfo, Pot.Ready(vizTime)) =>
            targetIds.toList
              .map(id =>
                targetInfo
                  .get(id)
                  .flatMap(_.toSiderealAt(vizTime))
                  .map(st => SiderealTargetWithId(id, st))
              )
              .flattenOption
          case _                                           => Nil
      )
      .useReactTableWithStateStoreBy((props, ctx, cols, _, rows) =>
        import ctx.given

        TableOptionsWithStateStore(
          TableOptions(
            cols,
            rows,
            getRowId = (row, _, _) => RowId(row.id.toString),
            enableSorting = true,
            enableColumnResizing = true,
            columnResizeMode = ColumnResizeMode.OnChange,
            initialState = TableState(columnVisibility = TargetColumns.DefaultVisibility)
          ),
          TableStore(props.userId, TableId.AsterismTargets, cols)
        )
      )
      .render((props, _, _, _, rows, table) =>
        React.Fragment(
          props.renderInTitle(
            <.span(ExploreStyles.TitleSelectColumns)(
              ColumnSelector(table, columnNames, ExploreStyles.SelectColumns)
                .unless(props.fullScreen.value)
            )
          ),
          if (rows.isEmpty) {
            <.div(
              ExploreStyles.FullHeightWidth |+| ExploreStyles.HVCenter |+| ExploreStyles.EmptyTreeContent,
              <.div("Add a target")
            )
          } else {
            <.div(ExploreStyles.ExploreTable |+| ExploreStyles.AsterismTable)(
              PrimeTable(
                table,
                striped = true,
                compact = Compact.Very,
                tableMod = ExploreStyles.ExploreTable,
                headerCellMod = headerCell =>
                  columnClasses
                    .get(ColumnId(headerCell.column.id))
                    .orEmpty |+| ExploreStyles.StickyHeader,
                rowMod = row =>
                  TagMod(
                    ExploreStyles.TableRowSelected
                      .when_(props.selectedTarget.get.exists(_ === row.original.id)),
                    ^.onClick --> props.selectedTarget.set(row.original.id.some)
                  ),
                cellMod = cell => columnClasses.get(ColumnId(cell.column.id)).orEmpty
              )
            )
          }
        )
      )
