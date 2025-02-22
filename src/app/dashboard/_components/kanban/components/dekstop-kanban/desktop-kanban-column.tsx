import React from "react";
import KanbanCard from "@/app/dashboard/_components/kanban/components/kanban-card";
import { GetNewMatchesNode, GetReadyApplicationsNode } from "@/services/graphql/types";
import { Texts } from "@/app/dashboard/_components/kanban/texts";
import { ApplicationStatus } from "@/types/types";
import ColumnHeader from "@/app/dashboard/_components/kanban/components/column-header";

export type KanbanApplicationColumnProps = {
  data: GetReadyApplicationsNode[];
  columnInfo: string;
  updateStatus: ApplicationStatus;
  currentStatus: ApplicationStatus
}

export function KanbanApplicationColumn({ data, columnInfo, updateStatus, currentStatus }: KanbanApplicationColumnProps) {
  const columnTotal = data?.reduce((total, application) => total + (application?.match?.grant?.avgAmount ?? 0), 0) ?? 0;

  return (
    <div className="px-3 py-1 max-h-[calc(100vh-445px)] overflow-y-hidden rounded-lg bg-orange-100 no-scrollbar ">
      <ColumnHeader columnInfo={columnInfo} columnTotal={columnTotal} />
      {data?.length ? (
        <div className="py-4 max-h-[calc(100vh-530px)] overflow-y-auto no-scrollbar">
          {data?.map((application) => (
            <KanbanCard
              key={application.id}
              updateStatus={updateStatus}
              currentStatus={currentStatus}
              grant={application.match.grant}
              recordId={application.id}
            />
          ))}
        </div>
      ) : (
        <div className="flex justify-center pt-2">
          <span className="text-gray-800 font-semibold">{Texts.NoApplicationsInfo}</span>
        </div>
      )}

    </div>
  );
}

export type KanbanNewGrantsColumnProps = {
  data: GetNewMatchesNode[];
  columnInfo: string;
}

export function KanbanNewGrantsColumn({ data, columnInfo }: KanbanNewGrantsColumnProps) {
  const columnTotal = data?.reduce((total, match) => total + (match.grant.avgAmount ?? 0), 0) ?? 0;

  return (
    <div className="px-3 py-1 max-h-[calc(100vh-445px)] overflow-y-hidden rounded-lg bg-orange-100 no-scrollbar ">
      <ColumnHeader columnInfo={columnInfo} columnTotal={columnTotal} />
      {data?.length ? (
        <div className="py-4 max-h-[calc(100vh-530px)] overflow-y-auto no-scrollbar">
          {data?.map((match) => (
            <KanbanCard
              key={match.id}
              grant={match.grant}
              recordId={match.id}
            />
          ))}
        </div>
      ) : (
        <div className="flex justify-center pt-2">
          <span className="text-gray-800 font-semibold">{Texts.NoNewGrants}</span>
        </div>
      )}
    </div>
  );
}
