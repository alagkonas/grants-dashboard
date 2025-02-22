import React, { PropsWithChildren } from "react";
import KanbanCard from "@/app/dashboard/_components/kanban/components/kanban-card";
import { GetNewMatchesNode, GetReadyApplicationsNode } from "@/services/graphql/types";
import { Texts } from "@/app/dashboard/_components/kanban/texts";
import { ApplicationStatus } from "@/types/types";
import ColumnHeader from "@/app/dashboard/_components/kanban/components/column-header";

type DesktopKanbanColumnWrapperProps = PropsWithChildren<{
  columnInfo: string;
  columnTotal: number;
  noData: boolean;
  noDataInfo: string
}>

function DesktopKanbanColumnWrapper({ children, columnInfo, noDataInfo, noData, columnTotal }: DesktopKanbanColumnWrapperProps) {
  return (
    <div className="px-3 max-h-[calc(100vh-445px)] overflow-y-auto no-scrollbar rounded-lg bg-orange-100">
      <div className="h-4 sticky top-0 bg-orange-100 " />
      <ColumnHeader columnInfo={columnInfo} columnTotal={columnTotal} />
      {!noData ? (
        <div className="pt-4 pb-0 max-h-full overflow-y-auto no-scrollbar">
          {children}
        </div>
      ) : (
        <div className="flex justify-center pt-2">
          <span className="text-gray-800 font-semibold">{noDataInfo}</span>
        </div>
      )}
      <div className="h-4 sticky bottom-0 bg-orange-100 " />
    </div>
  );
}

export type DesktopKanbanNewGrantColumnProps = {
  data: GetNewMatchesNode[];
  columnInfo: string;
}

export function DesktopKanbanNewGrantColumn({ data, columnInfo }: DesktopKanbanNewGrantColumnProps) {
  const columnTotal = data?.reduce((total, match) => total + (match.grant.avgAmount ?? 0), 0) ?? 0;
  return (
    <DesktopKanbanColumnWrapper
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
    </DesktopKanbanColumnWrapper>
  );
}

export type DesktopKanbanNewApplicationColumnProps = {
  data: GetReadyApplicationsNode[];
  columnInfo: string;
  updateStatus: ApplicationStatus;
  currentStatus: ApplicationStatus
}

export function DesktopKanbanNewApplicationColumn({ data, columnInfo, updateStatus, currentStatus }: DesktopKanbanNewApplicationColumnProps) {
  const columnTotal = data?.reduce((total, application) => total + (application?.match?.grant?.avgAmount ?? 0), 0) ?? 0;
  return (
    <DesktopKanbanColumnWrapper
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
    </DesktopKanbanColumnWrapper>
  );
}
