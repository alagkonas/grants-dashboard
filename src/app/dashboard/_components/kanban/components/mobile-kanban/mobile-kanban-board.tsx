import { TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";
import React from "react";
import { Texts } from "@/app/dashboard/_components/kanban/texts";
import { KANBAN_APPLICATIONS_COLUMNS, KanbanBoardProps } from "@/app/dashboard/_components/kanban/responsive-kanban";
import { KanbanApplicationColumnMobile, KanbanNewGrantsColumnMobile } from "@/app/dashboard/_components/kanban/components/mobile-kanban/mobile-kanban-column";
import TabsProvider from "@/providers/TabsProvider";

export default function MobileKanbanBoard({ groupedApplications, newMatches }: KanbanBoardProps) {

  return (
    <div className="md:hidden w-full">
      <TabsProvider>
        <TabsList className="w-full flex overflow-x-auto no-scrollbar bg-white border-b border-gray-200">
          <TabsTrigger
            value={"new-grants"}
            className="flex-1 min-w-fit px-4 pt-3 relative border-b-2 border-transparent text-gray-500 data-[state=active]:border-gray-800 data-[state=active]:text-gray-800 [&>div]:data-[state=active]:text-lg [&>div]:data-[state=active]:font-bold"
          >
            <div className="text-sm font-medium">
              {Texts.NewGrantsTitle}
            </div>
          </TabsTrigger>

          {KANBAN_APPLICATIONS_COLUMNS.map((tab) => (
            <TabsTrigger
              key={tab.id}
              value={tab.id}
              className="flex-1 min-w-fit px-4 pt-3 relative border-b-2 border-transparent text-gray-500 data-[state=active]:border-gray-800 data-[state=active]:text-gray-800 [&>div]:data-[state=active]:text-lg [&>div]:data-[state=active]:font-bold"
            >
              <div className="text-sm font-medium">
                {tab.title}
              </div>
            </TabsTrigger>
          ))}
        </TabsList>

        <TabsContent
          className="flex-2 flex flex-col overflow-auto bg-red-100 overflow-x-auto"
          value={"new-grants"}
        >
          <KanbanNewGrantsColumnMobile
            data={newMatches}
            columnInfo={Texts.NewGrantsInfo}
          />
        </TabsContent>


        {KANBAN_APPLICATIONS_COLUMNS.map((column, index) => {
          const updateStatus =
            index + 1 !== KANBAN_APPLICATIONS_COLUMNS.length
              ? KANBAN_APPLICATIONS_COLUMNS[index + 1].id
              : KANBAN_APPLICATIONS_COLUMNS[index].id;
          return (
            <TabsContent
              className="flex-2 flex flex-col overflow-hidden bg-red-100 overflow-x-auto"
              key={column.id}
              value={column.id}
            >
              <KanbanApplicationColumnMobile
                key={column.id}
                data={groupedApplications[column.id]}
                currentStatus={column.id}
                updateStatus={updateStatus}
                columnInfo={column.info} />
            </TabsContent>
          );
        })}
      </TabsProvider>
    </div>
  );
};