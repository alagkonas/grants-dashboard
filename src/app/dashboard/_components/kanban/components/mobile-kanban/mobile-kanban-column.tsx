import React, { PropsWithChildren } from "react";
import { DesktopKanbanNewApplicationColumnProps, DesktopKanbanNewGrantColumnProps } from "@/app/dashboard/_components/kanban/components/dekstop-kanban/desktop-kanban-column";
import KanbanCard from "@/app/dashboard/_components/kanban/components/kanban-card";
import { Texts } from "@/app/dashboard/_components/kanban/texts";
import ColumnHeader from "@/app/dashboard/_components/kanban/components/column-header";
import { MobileKanbanCardWrapper } from "@/app/dashboard/_components/kanban/components/mobile-kanban/mobile-kanban-card-wrapper";

type MobileKanbanColumnWrapperProps = PropsWithChildren<{
  columnInfo: string;
  columnTotal: number;
  noData: boolean;
  noDataInfo: string
}>

function MobileKanbanColumnWrapper({ children, columnInfo, noDataInfo, noData, columnTotal }: MobileKanbanColumnWrapperProps) {
  return (
    <div className="flex-1 max-h-[calc(100vh-110px)] overflow-y-hidden px-4">
      <ColumnHeader columnInfo={columnInfo} columnTotal={columnTotal} />
      <div className="overflow-y-auto px-4">
        <div className="space-y-4 py-4">
          {!noData ? (
            <MobileKanbanCardWrapper>
              {children}
            </MobileKanbanCardWrapper>
          ) : (
            <div className="flex justify-center pt-2">
              <span className="text-gray-800 font-semibold">{noDataInfo}</span>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

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
