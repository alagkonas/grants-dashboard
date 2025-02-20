import { gql, TypedDocumentNode } from "@apollo/client";
import { ApplicationStatus, DateTime } from "@/types/types";
import { GetReadyApplicationsNode } from "@/services/graphql/types";

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