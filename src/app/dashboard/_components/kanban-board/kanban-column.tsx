import React from "react";
import { mockApplications } from "@/app/dashboard/_components/kanban-board/mocks";
import KanbanCard from "@/app/dashboard/_components/kanban-board/kanban-card";

type KanbanColumnProps = {
  title: string;
}

export default function KanbanColumn({}: KanbanColumnProps) {
  return (
    <div className="px-6 py-4 max-h-[calc(100vh-500px)] overflow-y-hidden rounded-lg bg-red-100 no-scrollbar ">
      <div className="sticky top-0 px-6 py-4 z-10">
        <h2 className="text-base font-semibold text-gray-900">SOME INFO GOES HERE</h2>
        <p className="text-sm text-gray-500 mt-1">
          <span className="text-gray-700 font-semibold">TOTAL GOES HERE $1.4M</span>
        </p>
      </div>
      <div className="py-4 max-h-[calc(100vh-650px)] overflow-y-auto no-scrollbar">
        {mockApplications?.map((application) => (
          <KanbanCard
            key={application.id}
            grant={application.match.grant}
            progress={application?.progress}
          />
        ))}
      </div>
      <div className="sticky top-0 px-6 py-4 z-11" />

    </div>
  );
}
;