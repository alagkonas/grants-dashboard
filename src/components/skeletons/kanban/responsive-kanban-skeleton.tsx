import React from "react";
import { shimmer } from "@/components/skeletons/shimmer";

export function DesktopKanbanSkeleton() {
  return (
    <div className="hidden md:flex flex-col ">
      <div className="w-full overflow-x-auto">
        <div className="flex-1">
          <div className="grid md:w-[1400px] gap-2 lg:w-full grid-cols-5 divide-x divide-gray-100">
            {[...Array(5)].map((_, index) => (
              <div
                key={`${index}+ 5`}
                className="min-w-[300px] border-none"
              >
                <div className="sticky top-0 bg-white pl-10 pt-4">
                  <div className={`${shimmer} h-7 w-32 bg-gray-200 rounded-md`} />
                </div>
                <div className="px-4 py-4 overflow-y-hidden no-scrollbar">
                  <div className="space-y-4">
                    {[...Array(2)].map((_, index) => (
                      <div
                        key={`${index}+ 6`}
                        className={`${shimmer} w-full h-40 bg-gray-200 rounded-xl`}
                      />
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export function MobileKanbanSkeleton() {
  return (
    <div className="md:hidden w-full">
      <div className="flex-2 flex flex-col justify-center overflow-auto bg-white">
        <div className="w-full flex overflow-x-auto no-scrollbar bg-white">
          {[...Array(5)].map((_, index) => (
            <div
              key={`${index}+ 7`}
              className="flex-1 min-w-fit px-4 pt-3"
            >
              <div className="h-5 w-24 bg-gray-300 rounded animate-pulse"></div>
            </div>
          ))}
        </div>

        <div className="w-full flex flex-col justify-center items-center">

        <div className="h-6 w-2/3 my-6 bg-gray-300 rounded animate-pulse"></div>
        <div className="h-6 w-1/2 mb-6 bg-gray-300 rounded animate-pulse"></div>
        </div>

          <div className="space-y-4 p-4 px-16 ">
            {[...Array(2)].map((_, index) => (
              <div key={`${index}+ 8`} className="h-40 bg-gray-200 rounded-lg animate-pulse"></div>
            ))}
        </div>
      </div>
    </div>
  );
}

export function ResponsiveKanbanSkeleton() {
  return (
    <>
      <DesktopKanbanSkeleton />

      <MobileKanbanSkeleton />
    </>
  );
}
