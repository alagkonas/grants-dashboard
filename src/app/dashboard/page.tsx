import React, { Suspense } from "react";
import ReadyApplicationsPreview from "@/app/dashboard/_components/ready-applications-preview/ready-applications-preview";
import ResponsiveKanban from "@/app/dashboard/_components/kanban/responsive-kanban";

export default function DashboardPage() {
  return (
    <div>
      <Suspense fallback={<>LOADING READY APPLICATIONS.....</>}>
        <ReadyApplicationsPreview />
      </Suspense>

      <Suspense fallback={<>LOADING KANBAN....</>}>
        <ResponsiveKanban />
      </Suspense>
    </div>
  );
}
