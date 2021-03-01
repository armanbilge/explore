// Copyright (c) 2016-2021 Association of Universities for Research in Astronomy, Inc. (AURA)
// For license information see LICENSE or https://opensource.org/licenses/BSD-3-Clause

package explore.observationtree

import cats.data.NonEmptyList
import cats.effect.IO
import clue.GraphQLOperation
import clue.macros.GraphQL
import explore.AppCtx
import explore.GraphQLSchemas._
import explore.components.graphql.LiveQueryRenderMod
import explore.data.KeyedIndexedList
import explore.implicits._
import explore.model.ObsSummary
import explore.model.reusability._
import japgolly.scalajs.react.vdom.html_<^._
import lucuma.core.model.Observation
import lucuma.ui.reusability._
import monocle.Getter

object ObsQueries {

  type ObservationList = KeyedIndexedList[Observation.Id, ObsSummary]

  @GraphQL
  object ProgramObservationsQuery extends GraphQLOperation[ObservationDB] {
    val document = """
      query {
        observations(programId: "p-2") {
          id
          name
          observationTarget {
            ... on Asterism {
              asterism_id: id
            }
            ... on Target {
              target_id: id
            }
          }
        }
      }
    """

    object Data {
      type Observations = ObsSummary

      val asObservationList: Getter[Data, ObservationList] = data =>
        KeyedIndexedList.fromList(data.observations, ObsSummary.id.get)
    }
  }

  @GraphQL
  object ProgramObservationsEditSubscription extends GraphQLOperation[ObservationDB] {
    val document = """
      subscription {
        observationEdit(programId:"p-2") {
          id
        }
      }
    """
  }

  type LiveQueryRenderer =
    (
      View[ObservationList] => VdomNode
    ) => LiveQueryRenderMod[ObservationDB, ProgramObservationsQuery.Data, ObservationList]

  val ObsLiveQuery: LiveQueryRenderer =
    render =>
      AppCtx.withCtx { implicit appCtx =>
        LiveQueryRenderMod[ObservationDB, ProgramObservationsQuery.Data, ObservationList](
          ProgramObservationsQuery.query(),
          ProgramObservationsQuery.Data.asObservationList.get,
          NonEmptyList.of(ProgramObservationsEditSubscription.subscribe[IO]())
        )(render)
      }

  @GraphQL
  object ProgramCreateObservation extends GraphQLOperation[ObservationDB] {
    val document = """
      mutation($createObservation: CreateObservationInput!) {
        createObservation(input: $createObservation) {
          id
        }
      }
    """
  }

  @GraphQL
  object ProgramDeleteObservation extends GraphQLOperation[ObservationDB] {
    val document = """
      mutation($oid: ObservationId!) {
        deleteObservation(observationId: $oid) {
          id
        }
      }
    """
  }

  @GraphQL
  object ProgramUndeleteObservation extends GraphQLOperation[ObservationDB] {
    val document = """
      mutation($oid: ObservationId!) {
        undeleteObservation(observationId: $oid) {
          id
        }
      }
    """
  }

}
