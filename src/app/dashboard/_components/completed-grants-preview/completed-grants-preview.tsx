import React from "react";
import UserGreeting from "@/app/dashboard/_components/completed-grants-preview/components/user-greeting";
import CompletedGrants from "@/app/dashboard/_components/completed-grants-preview/components/completed-grants";

export default function CompletedGrantsPreview() {
  return (
    <div className="md:bg-gray-50 sm:bg-white py-8">
      <div className="w-full">
        <div className="flex flex-row items-center justify-evenly">
          <UserGreeting />
          <CompletedGrants />
        </div>
      </div>
    </div>
  );
}
;