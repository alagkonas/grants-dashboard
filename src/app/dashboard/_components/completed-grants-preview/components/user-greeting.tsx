import React from "react";
import Image from "next/image";

export default function UserGreeting() {
  return (
    <div className="hidden lg:block h-80 w-1/5 bg-white px-4 pb-2 rounded-xl shadow-sm">
      <div className="flex flex-col items-center space-x-4 justify-between">
        <div className="relative">
          <Image src="/grant-greeting.png" alt="grant greeting" width={300} height={300} />
        </div>

        <div className="flex flex-col items-center space-x-4">
          <h1 className="text-2xl font-semibold flex items-center">
            Hi Maya! <span className="ml-2">&#128075;</span>
          </h1>
          <p className="text-gray-600 mt-1">Let&#39;s make an impact today.</p>
        </div>
      </div>
    </div>
  );
}

