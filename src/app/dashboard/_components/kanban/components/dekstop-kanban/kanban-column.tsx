import React from "react";
import KanbanCard from "@/app/dashboard/_components/kanban/components/kanban-card";
import { GetNewMatchesNode, GetReadyApplicationsNode } from "@/services/graphql/types";
import { Texts } from "@/app/dashboard/_components/kanban/texts";

export type KanbanApplicationColumnProps = {
  data: GetReadyApplicationsNode[];
  columnInfo: string;
}

export function KanbanApplicationColumn({ data, columnInfo }: KanbanApplicationColumnProps) {

  const columnTotal = data?.reduce((total, application) => total + (application?.match?.grant?.avgAmount ?? 0), 0) ?? 0;

  return (
    <div className="px-6 py-1 max-h-[calc(100vh-500px)] overflow-y-hidden rounded-lg bg-orange-100 no-scrollbar ">
      <div className="sticky top-0 pt-4 pb-2 px-2 z-10 flex flex-col justify-center items-center w-full">
        <h2 className="text-base font-semibold text-gray-800">{columnInfo}</h2>
        <p className="text-gray-500 mt-1">
          <span className="text-gray-800 font-semibold">Total of </span>
          <span className="text-gray-800 font-bold text-2xl">${columnTotal}</span>
        </p>
      </div>

      {data?.length ? (
        <div className="py-4 max-h-[calc(100vh-650px)] overflow-y-auto no-scrollbar">
          {data?.map((application) => (
            <KanbanCard
              key={application.id}
              grant={application.match.grant}
            />
          ))}
        </div>
      ) : (
        <div className="flex justify-center pt-2">
          <span className="text-gray-800 font-semibold">{Texts.NoApplicationsInfo}</span>
        </div>
      )}
      <div className="sticky top-0 px-6 py-4 z-11" />

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
    <div className="px-3 py-1 max-h-[calc(100vh-500px)] overflow-y-hidden rounded-lg bg-orange-100 no-scrollbar ">
      <div className="sticky top-0 pt-4 pb-2 px-2 z-10 flex flex-col justify-center items-center w-full">
        <h2 className="text-base font-semibold text-gray-800">{columnInfo}</h2>
        <p className="text-gray-500 mt-1">
          <span className="text-gray-800 font-semibold">Total of </span>
          <span className="text-gray-800 font-bold text-2xl">${columnTotal}</span>
        </p>
      </div>

      {data?.length ? (
        <div className="py-4 max-h-[calc(100vh-650px)] overflow-y-auto no-scrollbar">
          {data?.map((match) => (
            <KanbanCard
              key={match.id}
              grant={match.grant}
            />
          ))}
        </div>
      ) : (
        <div className="flex justify-center pt-2">
          <span className="text-gray-800 font-semibold">{Texts.NoNewGrants}</span>
        </div>
      )}
      <div className="sticky top-0 px-6 py-4 z-11" />

    </div>
  );
}
