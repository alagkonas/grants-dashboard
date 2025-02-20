import MobileKanban from "@/app/dashboard/_components/kanban-board/kanban-mobile";
import KanbanBoard from "@/app/dashboard/_components/kanban-board/kanban-board";

export default function ResponsiveKanban() {

  return (
    <>
      <div className="hidden md:block">
        <KanbanBoard />
      </div>

      <MobileKanban />
    </>
  );
};