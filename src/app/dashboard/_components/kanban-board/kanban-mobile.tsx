import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";
import { ApplicationStatus } from "@/app/dashboard/_components/kanban-board/kanban-board";
import { mockApplications } from "@/app/dashboard/_components/kanban-board/mocks";
import KanbanCard from "@/app/dashboard/_components/kanban-board/kanban-card";
import React from "react";

const KANBAN_TABS = [
  { id: ApplicationStatus.NEW_GRANT, title: "New Grants" },
  { id: ApplicationStatus.PRE_APPLICATION, title: "Pre Application" },
  { id: ApplicationStatus.IN_PROGRESS, title: "In Progress" },
  { id: ApplicationStatus.READY, title: "Submit now" },
  { id: ApplicationStatus.SUBMITTED, title: "Submitted" }
];

export default function MobileKanban() {
  return (
    <div className="md:hidden w-full max-h-[calc(100vh-0px)]">
      <Tabs defaultValue={ApplicationStatus.NEW_GRANT} className="w-full h-full flex flex-col">
        <TabsList className="w-full flex overflow-x-auto no-scrollbar bg-white ">
          {KANBAN_TABS.map((tab) => (
            <TabsTrigger
              key={tab.id}
              value={tab.id}
              className="flex-1 min-w-fit px-2"
            >
              <div className="text-sm font-medium">
                {tab.title}
              </div>
            </TabsTrigger>
          ))}
        </TabsList>

        {KANBAN_TABS.map((tab) => (
          <TabsContent
            key={tab.id}
            value={tab.id}
            className="mt-2 flex-2 flex flex-col overflow-hidden bg-red-100 overflow-x-auto"
          >
            <div className="sticky top-0 px-6 py-4 z-10 flex flex-col justify-center items-center ">
              <h2 className="text-base font-semibold text-gray-900">SOME INFO GOES HERE</h2>
              <p className="text-sm text-gray-500 mt-1">
                <span className="text-gray-700 font-semibold">TOTAL GOES HERE $1.4M</span>
              </p>
            </div>

            <div className="flex-1 overflow-y-hidden px-4">
              <div className="space-y-4 py-4">
                {mockApplications?.map((application) => (
                  <KanbanCard
                    key={application.id}
                    grant={application.match.grant}
                    progress={application?.progress}
                  />
                ))}
              </div>
            </div>
          </TabsContent>
        ))}
      </Tabs>
    </div>
  );
};