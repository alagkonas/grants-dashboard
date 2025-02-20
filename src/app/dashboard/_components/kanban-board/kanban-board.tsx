import React from "react";
import KanbanColumn from "@/app/dashboard/_components/kanban-board/kanban-column";

interface KanbanColumnType {
  id: ApplicationStatus;
  title: string;
}

export enum ApplicationStatus {
  NEW_GRANT = "NEW_GRANT",
  PRE_APPLICATION = "PRE_APPLICATION",
  IN_PROGRESS = "IN_PROGRESS",
  READY = "READY",
  SUBMITTED = "SUBMITTED"
}

const KANBAN_COLUMNS: KanbanColumnType[] = [
  { id: ApplicationStatus.NEW_GRANT, title: "New Grants" },
  { id: ApplicationStatus.PRE_APPLICATION, title: "Pre-applied" },
  { id: ApplicationStatus.IN_PROGRESS, title: "In progress" },
  { id: ApplicationStatus.READY, title: "Submit now" },
  { id: ApplicationStatus.SUBMITTED, title: "Submitted grants" }
];

export default function KanbanBoard() {
  return (
    <div className="flex flex-col w-full max-h-[calc(100vh-300px)] overflow-x-auto">
      <div className="flex-1">
        <div className="grid md:w-[1400px] gap-2 lg:w-full grid-cols-5 divide-x divide-gray-100">
          {KANBAN_COLUMNS.map((column) => (
            <div
              key={column.id}
              className="min-w-[300px] border-none"
            >

              <div className="sticky top-0 bg-white pl-10 pt-4">
                <h2 className="text-lg font-semibold text-gray-900">{column.title}</h2>

              </div>

              <div className="px-6 py-4  overflow-y-hidden no-scrollbar">
                <KanbanColumn
                  key={column.id}
                  title={column.title}
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};