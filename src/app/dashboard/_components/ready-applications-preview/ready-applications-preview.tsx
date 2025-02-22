import React from "react";
import UserGreeting from "@/app/dashboard/_components/ready-applications-preview/components/user-greeting";
import ResponsiveApplicationsCarousel from "@/app/dashboard/_components/ready-applications-preview/components/responsive-applications-carousel";

export default function ReadyApplicationsPreview() {
  return (
    <div className="md:bg-gray-50 sm:bg-white sm:py-4 md:py-8">
      <div className="w-full h-full">
        <div className="flex flex-row items-center justify-evenly">
          <UserGreeting />
          <ResponsiveApplicationsCarousel />
        </div>
      </div>
    </div>
  );
}
;