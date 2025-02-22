import React from "react";
import { KanbanApplicationColumnProps, KanbanNewGrantsColumnProps } from "@/app/dashboard/_components/kanban/components/dekstop-kanban/desktop-kanban-column";
import KanbanCard from "@/app/dashboard/_components/kanban/components/kanban-card";
import { Texts } from "@/app/dashboard/_components/kanban/texts";
import ColumnHeader from "@/app/dashboard/_components/kanban/components/column-header";

export function KanbanNewGrantsColumnMobile({ data, columnInfo }: KanbanNewGrantsColumnProps) {
  const columnTotal = data?.reduce((total, match) => total + (match.grant.avgAmount ?? 0), 0) ?? 0;
  return (
    <>
      <ColumnHeader columnInfo={columnInfo} columnTotal={columnTotal} />
      <div className="overflow-y-auto px-4">
        <div className="space-y-4 py-4">
          {data?.length ? (
            <>
              {data?.map((match) => (
                <KanbanCard
                  key={match.id}
                  grant={match.grant}
                  recordId={match.id}
                />
              ))}
            </>
          ) : (
            <div className="flex justify-center pt-2">
              <span className="text-gray-800 font-semibold">{Texts.NoNewGrants}</span>
            </div>
          )}
        </div>
      </div>
    </>
  );
}

export function KanbanApplicationColumnMobile({ data, columnInfo, updateStatus, currentStatus }: KanbanApplicationColumnProps) {
  const columnTotal = data?.reduce((total, application) => total + (application?.match?.grant?.avgAmount ?? 0), 0) ?? 0;

  return (
    <>
      <ColumnHeader columnInfo={columnInfo} columnTotal={columnTotal} />
      <div className="flex-1 overflow-y-hidden px-4">
        <div className="space-y-4 py-4">

          {data?.length ? (
            <>
              {data?.map((application) => (
                <KanbanCard
                  key={application.id}
                  updateStatus={updateStatus}
                  currentStatus={currentStatus}
                  grant={application.match.grant}
                  recordId={application.id}
                />
              ))}
            </>
          ) : (
            <div className="flex justify-center pt-2">
              <span className="text-gray-800 font-semibold">{Texts.NoApplicationsInfo}</span>
            </div>
          )}
        </div>
      </div>
    </>
  );
}
