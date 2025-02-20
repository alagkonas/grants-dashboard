import React from "react";
import HeroPreview from "@/app/dashboard/_components/completed-grants-preview/completed-grants-preview";
import ResponsiveKanban from "@/app/dashboard/_components/kanban-board/responsive-kanban";

export default function DashboardPage() {
  return (
    <div>
      <HeroPreview />
      <ResponsiveKanban />
    </div>
  );
}
