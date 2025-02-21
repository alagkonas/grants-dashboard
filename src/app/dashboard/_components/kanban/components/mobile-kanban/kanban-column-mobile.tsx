import React from "react";
import { KanbanApplicationColumnProps, KanbanNewGrantsColumnProps } from "@/app/dashboard/_components/kanban/components/dekstop-kanban/kanban-column";
import KanbanCard from "@/app/dashboard/_components/kanban/components/kanban-card";
import { Texts } from "@/app/dashboard/_components/kanban/texts";

export function KanbanNewGrantsColumnMobile({ data, columnInfo }: KanbanNewGrantsColumnProps) {
  const columnTotal = data?.reduce((total, match) => total + (match.grant.avgAmount ?? 0), 0) ?? 0;

  return (
    <>
      <div className="sticky top-0 pt-4 pb-2 px-2 z-10 flex flex-col justify-center items-center w-full">
        <h2 className="font-semibold text-gray-900 text-xl">{columnInfo}</h2>
        <p className="text-gray-500 mt-1">
          <span className="text-gray-800 font-semibold text-xl">Total of </span>
          <span className="text-gray-800 font-bold text-2xl">${columnTotal}</span>
        </p>
      </div>

      <div className="overflow-y-auto px-4">
        <div className="space-y-4 py-4">
          {data?.length ? (
            <>
              {data?.map((match) => (
                <KanbanCard
                  key={match.id}
                  grant={match.grant}
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

export function KanbanApplicationColumnMobile({ data, columnInfo }: KanbanApplicationColumnProps) {
  const columnTotal = data?.reduce((total, application) => total + (application?.match?.grant?.avgAmount ?? 0), 0) ?? 0;

  return (
    <>
      <div className="sticky top-0 pt-4 pb-2 px-2 z-10 flex flex-col justify-center items-center w-full">
        <h2 className="text-base font-semibold text-gray-900">{columnInfo}</h2>
        <p className="text-gray-500 mt-1">
          <span className="text-gray-800 font-semibold">Total of </span>
          <span className="text-gray-800 font-bold text-2xl">${columnTotal}</span>
        </p>
      </div>

      <div className="flex-1 overflow-y-hidden px-4">
        <div className="space-y-4 py-4">

          {data?.length ? (
            <>
              {data?.map((application) => (
                <KanbanCard
                  key={application.id}
                  grant={application.match.grant}
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
