import React, { Suspense } from "react";
import ReadyApplicationsPreview from "@/app/dashboard/_components/ready-applications-preview/ready-applications-preview";
import ResponsiveKanban from "@/app/dashboard/_components/kanban/responsive-kanban";
import ReadyApplicationsPreviewSkeleton from "@/components/skeletons/ready-applications-preview/ready-applications-preview-skeleton";
import { ResponsiveKanbanSkeleton } from "@/components/skeletons/kanban/responsive-kanban-skeleton";

export default function DashboardPage() {
  return (
    <div>
      <Suspense fallback={<ReadyApplicationsPreviewSkeleton />}>
        <ReadyApplicationsPreview />
      </Suspense>

      <Suspense fallback={<ResponsiveKanbanSkeleton />}>
        <ResponsiveKanban />
      </Suspense>
    </div>
  );
}
