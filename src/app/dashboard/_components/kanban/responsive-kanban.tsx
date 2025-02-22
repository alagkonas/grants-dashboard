import MobileKanban from "@/app/dashboard/_components/kanban/components/mobile-kanban/mobile-kanban-board";
import DesktopKanbanBoard from "@/app/dashboard/_components/kanban/components/dekstop-kanban/desktop-kanban-board";
import { getOrganizationHeaders } from "@/server/utils";
import { getClient } from "@/services/apollo-client/apollo-client";
import { GET_KANBAN_DATA } from "@/services/graphql/queries";
import { mapDataToKanbanData } from "@/app/dashboard/_components/kanban/utils/mapDataToKanbanData";
import { GetNewMatchesNode, GetReadyApplicationsNode } from "@/services/graphql/types";
import { ApplicationStatus } from "@/types/types";
import { Texts } from "@/app/dashboard/_components/kanban/texts";

export type KanbanBoardProps = {
  newMatches: GetNewMatchesNode[];
  groupedApplications: Record<ApplicationStatus, GetReadyApplicationsNode[]>
}

export type KanbanColumnType = {
  id: ApplicationStatus;
  title: string;
  info: string;
}

export const KANBAN_APPLICATIONS_COLUMNS: KanbanColumnType[] = [
  { id: ApplicationStatus.PRE_APPLICATION, title: Texts.PreAppliedApplicationTitle, info: Texts.PreAppliedApplicationInfo },
  { id: ApplicationStatus.IN_PROGRESS, title: Texts.InProgressApplicationTitle, info: Texts.InProgressApplicationInfo },
  { id: ApplicationStatus.READY, title: Texts.ReadyApplicationTitle, info: Texts.ReadyApplicationInfo },
  { id: ApplicationStatus.SUBMITTED, title: Texts.SubmittedApplicationTitle, info: Texts.SubmittedApplicationInfo }
];

export default async function ResponsiveKanban() {
  // await new Promise(resolve => setTimeout(resolve, 5000));
  const organizationHeaders = await getOrganizationHeaders();
  const { data } = await getClient()
    .query({
      query: GET_KANBAN_DATA,
      context: {
        headers: {
          ...organizationHeaders
        }
      }
    });

  const mappedData = mapDataToKanbanData(data);

  return (
    <>
      <DesktopKanbanBoard {...mappedData} />

      <MobileKanban {...mappedData} />
    </>
  );
};