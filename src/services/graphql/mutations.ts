import { gql, TypedDocumentNode } from "@apollo/client";
import { ApplicationStatus } from "@/types/types";
import { GetReadyApplicationsNode } from "@/services/graphql/types";

export const UPDATE_APPLICATION_STATUS: TypedDocumentNode<{
  getApplications: GetReadyApplicationsNode[]
}, {
  applicationId: string;
  status: ApplicationStatus;
}> = gql`
    mutation UpdateApplicationStatus(
        $applicationId: ID!
        $status: ApplicationStatus!
    ) {
        updateApplicationStatus(
            applicationId: $applicationId
            status: $status
        ) {
            id
            status
            createdAt
            updatedAt
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
