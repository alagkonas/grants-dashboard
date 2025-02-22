import React from "react";
import { shimmer } from "@/components/skeletons/shimmer";

export function CarouselCardSkeleton() {
  return (
    <div className="flex-[0_0_40%] pl-8">
      <div className="w-full h-full bg-white/20 p-2 text-white rounded-xl">
        <div className="space-y-1 h-full flex min-w-[300px] flex-col items-center justify-between">
          <div className={`${shimmer} bg-white/20 px-3 py-1 rounded-full w-32 h-7`} />
          <div className="space-y-2 flex flex-col items-center">
            <div className={`${shimmer} h-9 w-28 bg-white/20 rounded-md`} />
            <div className={`${shimmer} h-7 w-48 bg-white/20 rounded-md mt-2`} />
            <div className={`${shimmer} h-5 w-32 bg-white/20 rounded-md`} />
          </div>
          <div className={`${shimmer} w-1/3 h-10 bg-white/20 rounded-lg`} />
        </div>
      </div>
    </div>
  );
}

export function DesktopCarouselSkeleton() {
  return (
    <div className="lg:w-3/4 h-60 md:w-[95%] bg-white px-4 py-6 rounded-xl md:shadow-sm flex flex-row justify-between">
      <div className="hidden md:flex flex-col justify-between w-1/5">
        <div>
          <div className={`${shimmer} h-8 w-48 bg-gray-200 rounded-md`} />
          <div className={`${shimmer} h-5 w-40 bg-gray-200 rounded-md mt-2`} />
        </div>
        <div>
          <div className="flex items-center space-x-4 mb-4">
            <div className={`${shimmer} p-2 rounded-lg border bg-gray-200 border-gray-200 w-9 h-9`} />
            <div className={`${shimmer} p-2 rounded-lg border bg-gray-200 border-gray-200 w-9 h-9`} />
          </div>
          <div className="flex space-x-2">
            {[...Array(3)].map((_, index) => (
              <div
                key={`${index}+ 1`}
                className={`${shimmer} w-2.5 h-2.5 rounded-full bg-gray-200`}
              />
            ))}
          </div>
        </div>
      </div>
      <div className="md:max-w-[calc(100%-100px)] space-x-4 w-4/5 overflow-x-hidden hidden md:flex relative">
        <div className="overflow-hidden rounded-xl w-full">
          <div className="flex touch-pan-y h-full -ml-8">
            {[...Array(3)].map((_, index) => (
              <div
                key={`${index}+ 2`}
                className={`${shimmer} flex-none w-[400px] h-full mx-4 rounded-xl bg-gray-200`}
              >
                <CarouselCardSkeleton />
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}


export function MobileCarouselSkeleton() {
  return (
    <div className="md:hidden mt-2">
      <div className="space-y-1 px-4 flex flex-col items-center">
        <div className={`${shimmer} h-8 w-64 bg-gray-200 rounded-md`} />
        <div className={`${shimmer} h-5 w-48 bg-gray-200 rounded-md`} />
      </div>

      <div className="relative mt-2 mb-2 w-[400px]">
        <div className="flex justify-evenly h-52 w-full flex-col items-center">
          <div className="overflow-x-hidden h-full w-[90%]">
            <div className="overflow-hidden h-full w-full">
              <div className="flex touch-pan-y -ml-8">
                {[...Array(2)].map((_, index) => (
                  <div
                    key={`${index}+ 3`}
                    className="flex-[0_0_40%] pl-8"
                  >
                    <div className="w-full h-full bg-gray-200 p-2 rounded-xl">
                      <div className="space-y-1 h-full flex min-w-[300px] flex-col items-center justify-between">
                        <div className={`${shimmer} h-7 w-32 bg-white/70 rounded-full`} />
                        <div className="space-y-2 flex flex-col items-center">
                          <div className={`${shimmer} h-8 w-28 bg-white/30 rounded-md`} />
                          <div className={`${shimmer} h-6 w-48 bg-white/30 rounded-md`} />
                          <div className={`${shimmer} h-5 w-32 bg-white/30 rounded-md`} />
                        </div>
                        <div className={`${shimmer} h-10 w-full bg-white/30 rounded-lg`} />
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
          <div className="flex justify-center w-full flex-row items-center">
            {[...Array(3)].map((_, index) => (
              <div
                key={`${index}+ 4`}
                className={`w-2.5 h-2.5 rounded-full mx-1 bg-gray-200`}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export function ResponsiveCarouselSkeleton() {
  return (
    <>
      <DesktopCarouselSkeleton />

      <MobileCarouselSkeleton />
    </>
  );
}
