import React from "react";
import { UserGreetingSkeleton } from "@/components/skeletons/ready-applications-preview/user-greeting-skeleton";
import { ResponsiveCarouselSkeleton } from "@/components/skeletons/ready-applications-preview/responsive-carousel-skeleton";

export default function ReadyApplicationsPreviewSkeleton() {
  return (
    <div className="md:bg-gray-50 sm:bg-white py-8">
      <div className="w-full h-full">
        <div className="flex flex-row items-center justify-evenly">
          <UserGreetingSkeleton />
          <ResponsiveCarouselSkeleton />
        </div>
      </div>
    </div>
  );
}
;