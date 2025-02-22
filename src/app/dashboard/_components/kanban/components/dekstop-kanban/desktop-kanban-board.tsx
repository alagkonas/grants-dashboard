import React from "react";
import { DesktopKanbanNewApplicationColumn, DesktopKanbanNewGrantColumn } from "@/app/dashboard/_components/kanban/components/dekstop-kanban/desktop-kanban-column";
import { Texts } from "@/app/dashboard/_components/kanban/texts";
import { KANBAN_APPLICATIONS_COLUMNS, KanbanBoardProps } from "@/app/dashboard/_components/kanban/responsive-kanban";

export default function DesktopKanbanBoard({ groupedApplications, newMatches }: KanbanBoardProps) {
  return (
    <div className="hidden md:flex flex-col ">
      <div className="w-full overflow-x-auto">
        <div className="flex-1">
          <div className="grid md:w-[1400px] gap-2 lg:w-full grid-cols-5 divide-x divide-gray-100">

            <div className="min-w-[300px] border-none">
              <div className="sticky top-0 bg-white pl-10 pt-4">
                <h2 className="text-lg font-semibold text-gray-900">{Texts.NewGrantsTitle}</h2>
              </div>

              <div className="px-4 py-4 overflow-y-hidden no-scrollbar">
                <DesktopKanbanNewGrantColumn
                  data={newMatches}
                  columnInfo={Texts.NewGrantsInfo}
                />
              </div>
            </div>

            {KANBAN_APPLICATIONS_COLUMNS.map((column, index) => {
              const updateStatus =
                index + 1 !== KANBAN_APPLICATIONS_COLUMNS.length
                  ? KANBAN_APPLICATIONS_COLUMNS[index + 1].id
                  : KANBAN_APPLICATIONS_COLUMNS[index].id;
              return (
                <div
                  key={column.id}
                  className="min-w-[300px] border-none"
                >
                  <div className="sticky top-0 bg-white pl-10 pt-4">
                    <h2 className="text-lg font-semibold text-gray-900">{column.title}</h2>

                  </div>
                  <div className="px-4 py-4 overflow-y-hidden no-scrollbar">
                    <DesktopKanbanNewApplicationColumn
                      key={column.id}
                      currentStatus={column.id}
                      updateStatus={updateStatus}
                      data={groupedApplications[column.id]}
                      columnInfo={column.info}
                    />
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};