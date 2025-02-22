import MobileKanban from "@/app/dashboard/_components/kanban/components/mobile-kanban/mobile-kanban-board";
import DesktopKanbanBoard from "@/app/dashboard/_components/kanban/components/dekstop-kanban/desktop-kanban-board";
import { getOrganizationHeaders } from "@/server/utils";
import { PreloadQuery } from "@/services/apollo-client/apollo-client";
import { GET_KANBAN_DATA } from "@/services/graphql/queries";

export default async function ResponsiveKanban() {
  // await new Promise(resolve => setTimeout(resolve, 4000));
  const organizationHeaders = await getOrganizationHeaders();

  return (
    <PreloadQuery
      query={GET_KANBAN_DATA}
      context={{
        headers: {
          ...organizationHeaders
        }
      }}
    >
      <DesktopKanbanBoard />

      <MobileKanban />
    </PreloadQuery>
  );
};