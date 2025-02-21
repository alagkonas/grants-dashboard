import React from "react";
import { KanbanApplicationColumn, KanbanNewGrantsColumn } from "@/app/dashboard/_components/kanban/components/dekstop-kanban/kanban-column";
import { Texts } from "@/app/dashboard/_components/kanban/texts";
import { KANBAN_APPLICATIONS_COLUMNS, KanbanBoardProps } from "@/app/dashboard/_components/kanban/responsive-kanban";

export default function KanbanBoard({ groupedApplications, newMatches }: KanbanBoardProps) {
  return (
    <div className="flex flex-col w-full max-h-[calc(100vh-300px)] overflow-x-auto">
      <div className="flex-1">
        <div className="grid md:w-[1400px] gap-2 lg:w-full grid-cols-5 divide-x divide-gray-100">

          <div className="min-w-[300px] border-none">
            <div className="sticky top-0 bg-white pl-10 pt-4">
              <h2 className="text-lg font-semibold text-gray-900">{Texts.NewGrantsTitle}</h2>
            </div>

            <div className="px-4 py-4 overflow-y-hidden no-scrollbar">
              <KanbanNewGrantsColumn
                data={newMatches}
                columnInfo={Texts.NewGrantsInfo}
              />
            </div>
          </div>

          {KANBAN_APPLICATIONS_COLUMNS.map((column) => (
            <div
              key={column.id}
              className="min-w-[300px] border-none"
            >
              <div className="sticky top-0 bg-white pl-10 pt-4">
                <h2 className="text-lg font-semibold text-gray-900">{column.title}</h2>

              </div>
              <div className="px-4 py-4 overflow-y-hidden no-scrollbar">
                <KanbanApplicationColumn
                  key={column.id}
                  data={groupedApplications[column.id]}
                  columnInfo={column.info}
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};