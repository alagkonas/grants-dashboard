import { gql, TypedDocumentNode } from "@apollo/client";
import { GetNewMatchesNode, GetReadyApplicationsNode } from "@/services/graphql/types";

export const GET_READY_APPLICATIONS: TypedDocumentNode<{
  getApplications: GetReadyApplicationsNode[]
}>
= gql`query GetReadyApplications {
    getApplications(
        filter: { status: READY }
        sort: [{ field: CREATED_AT, direction: DESC }]
        limit: 5
    ) {
        id
        status
        createdAt
        match {
            id
            grant {
                id
                avgAmount
                foundationName
                grantName
                deadline
                location
            }
        }
    }
}`;


export const GET_KANBAN_DATA: TypedDocumentNode<{
  newMatches: GetNewMatchesNode[];
  applications: GetReadyApplicationsNode[];
}>
= gql`
    fragment GrantFields on Grant {
        id
        avgAmount
        foundationName
        grantName
        deadline
        location
    }

    fragment ApplicationFields on Application {
        id
        status
        createdAt
        updatedAt
    }

    query GetKanbanData {
        newMatches: getMatches(
            sort: [{ field: MATCH_DATE, direction: DESC }]
        ) {
            id
            matchDate
            grant {
                ...GrantFields
            }
            applications {
                ...ApplicationFields
            }
        }

        applications: getApplications(
            sort: [{ field: UPDATED_AT, direction: DESC }]
        ) {
            ...ApplicationFields
            match {
                id
                grant {
                    ...GrantFields
                }
            }
        }
    }`;


