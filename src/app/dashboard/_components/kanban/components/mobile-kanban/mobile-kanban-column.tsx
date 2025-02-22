import React from "react";
import { DesktopKanbanNewApplicationColumnProps, DesktopKanbanNewGrantColumnProps } from "@/app/dashboard/_components/kanban/components/dekstop-kanban/desktop-kanban-column";
import KanbanCard from "@/app/dashboard/_components/kanban/components/kanban-card";
import { Texts } from "@/app/dashboard/_components/kanban/texts";
import { MobileKanbanColumnWrapper } from "@/app/dashboard/_components/kanban/components/mobile-kanban/mobile-kanban-column-wrapper";

export function KanbanNewGrantsColumnMobile({ data, columnInfo }: DesktopKanbanNewGrantColumnProps) {
  const columnTotal = data?.reduce((total, match) => total + (match.grant.avgAmount ?? 0), 0) ?? 0;
  return (
    <MobileKanbanColumnWrapper
      columnTotal={columnTotal}
      columnInfo={columnInfo}
      noData={!data?.length}
      noDataInfo={Texts.NoNewGrants}
    >
      {data?.map((match) => (
        <KanbanCard
          key={match.id}
          grant={match.grant}
          recordId={match.id}
        />
      ))}
    </MobileKanbanColumnWrapper>
  );
}

export function KanbanApplicationColumnMobile({ data, columnInfo, updateStatus, currentStatus }: DesktopKanbanNewApplicationColumnProps) {
  const columnTotal = data?.reduce((total, application) => total + (application?.match?.grant?.avgAmount ?? 0), 0) ?? 0;
  return (
    <MobileKanbanColumnWrapper
      columnTotal={columnTotal}
      columnInfo={columnInfo}
      noData={!data?.length}
      noDataInfo={Texts.NoApplicationsInfo}
    >
      {data?.map((application) => (
        <KanbanCard
          key={application.id}
          updateStatus={updateStatus}
          currentStatus={currentStatus}
          grant={application.match.grant}
          recordId={application.id}
        />
      ))}
    </MobileKanbanColumnWrapper>
  );
}
