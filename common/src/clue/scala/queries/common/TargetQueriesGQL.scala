// Copyright (c) 2016-2023 Association of Universities for Research in Astronomy, Inc. (AURA)
// For license information see LICENSE or https://opensource.org/licenses/BSD-3-Clause

package queries.common

import clue.GraphQLOperation
import clue.annotation.GraphQL
import lucuma.schemas.ObservationDB
import lucuma.schemas.odb.*
import lucuma.schemas.{model => schemasModel}
// gql: import lucuma.schemas.decoders.given

object TargetQueriesGQL {

  @GraphQL
  trait TargetNameQuery extends GraphQLOperation[ObservationDB] {
    // FIXME Change this to an actual name pattern query when it's available in the API
    val document = s"""
      query($$programId: ProgramId!) {
        targetGroup(programId: $$programId) {
          matches {
            target $TargetWithIdSubquery
          }
        }
      }
    """

    object Data {
      object TargetGroup {
        object Matches {
          type Target = schemasModel.TargetWithId
        }
      }
    }
  }

  @GraphQL
  trait CreateTargetMutation extends GraphQLOperation[ObservationDB] {
    val document = """
      mutation($input: CreateTargetInput!) {
        createTarget(input: $input) {
          target {
            id
          }
        }
      }
    """
  }

  @GraphQL
  trait UpdateTargetsMutation extends GraphQLOperation[ObservationDB] {
    val document = """
      mutation($input: UpdateTargetsInput!) {
        updateTargets(input: $input) {
          targets {
            id
          }
        }
      }
    """
  }

  @GraphQL
  trait UpdateTargetsMutationWithResult extends GraphQLOperation[ObservationDB] {
    val document = s"""
      mutation($$input: UpdateTargetsInput!) {
        updateTargets(input: $$input) {
          targets $TargetWithIdSubquery
        }
      }
    """

    object Data {
      object UpdateTargets {
        type Targets = schemasModel.TargetWithId
      }
    }
  }

  @GraphQL
  trait CloneTargetMutation extends GraphQLOperation[ObservationDB] {
    val document = """
      mutation($input: CloneTargetInput!) {
        cloneTarget(input: $input) {
          newTarget {
            id
          }
        }
      }
    """
  }

  @GraphQL
  trait ProgramTargetEditSubscription extends GraphQLOperation[ObservationDB] {
    // We need to include the `value {id}` to avoid a bug in grackle.
    val document = """
      subscription($programId: ProgramId!) {
        targetEdit(input: {programId: $programId}) {
          id
          value {
            id
          }
        }
      }
    """
  }

  @GraphQL
  // This is not used for the moment, since we are getting all targets via
  // AsterismQueriesGQL.AsterismGroupObsQuery.targetGroup.
  // But we could use this instead and build the groups manually, which we now know
  // how to do. Is it worth it?
  trait AllProgramTargets extends GraphQLOperation[ObservationDB] {
    val document = s"""
      query($$programId: ProgramId!) {
        targets(WHERE: {programId: {EQ: $$programId}}) {
          matches $TargetWithIdSubquery
        }
      }
    """
  }

  @GraphQL
  trait ProgramTargetsDelta extends GraphQLOperation[ObservationDB] {
    val document = s"""
      subscription($$programId: ProgramId!) {
        targetEdit(input: {programId: $$programId}) {
          value $TargetWithIdSubquery
          meta:value {
            existence
          }
        }
      }
    """
  }
}
