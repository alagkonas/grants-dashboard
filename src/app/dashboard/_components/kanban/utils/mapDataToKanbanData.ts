import { GetNewMatchesNode, GetReadyApplicationsNode } from "@/services/graphql/types";
import { ApplicationStatus } from "@/types/types";

export const mapDataToKanbanData = ({ newMatches, applications }: {
  newMatches: GetNewMatchesNode[], applications: GetReadyApplicationsNode[]
}): {
  newMatches: GetNewMatchesNode[];
  groupedApplications: Record<ApplicationStatus, GetReadyApplicationsNode[]>
} => {
  const groupedApplications = applications.reduce((grouped, app) => {
    if (!grouped[app.status]) {
      grouped[app.status] = [];
    }

    grouped[app.status].push(app);

    return grouped;
  }, {} as Record<ApplicationStatus, GetReadyApplicationsNode[]>);

  return {
    newMatches,
    groupedApplications
  };
};