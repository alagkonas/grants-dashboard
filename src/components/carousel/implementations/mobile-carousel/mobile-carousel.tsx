"use client";

import React from "react";
import { useDotButton } from "@/components/carousel/hooks/useDotButton";
import useEmblaCarousel from "embla-carousel-react";
import CarouselCard from "@/components/carousel/components/carousel-card";
import { useSuspenseQuery } from "@apollo/client";
import { GET_READY_APPLICATIONS } from "@/services/graphql/queries";
import { options } from "@/components/carousel/implementations/desktop-carousel/desktop-carousel";

export default function MobileCarousel() {
  const { data } = useSuspenseQuery(GET_READY_APPLICATIONS);

  const [emblaRef, emblaApi] = useEmblaCarousel(options);

  const { selectedIndex, scrollSnaps, onDotButtonClick } =
    useDotButton(emblaApi);

  return (
    <div className="md:hidden mt-2">
      <div className="space-y-1 px-4 flex flex-col items-center">
        <h2 className="text-2xl font-semibold">Let&#39;s secure those grants!</h2>
        <p className="text-gray-600">Submit the Grants we&#39;ve completed</p>
      </div>

      <div className="relative mt-2 mb-2 w-[400px]">
        <div className="flex justify-evenly h-52 w-full flex-col items-center">
          <div className="overflow-x-hidden h-full w-[90%]">
            <div
              className="overflow-hidden h-full w-full"
              ref={emblaRef}
            >
              <div className="flex touch-pan-y -ml-8">
                {data?.getApplications.map((application) => (
                  <CarouselCard key={application.id} application={application} />
                ))}
              </div>
            </div>
          </div>
          <div className="flex justify-center w-full flex-row items-center">
            {scrollSnaps.map((_, index) => (
              <button
                key={index}
                className={`w-2.5 h-2.5 rounded-full mx-1 ${
                  index === selectedIndex ? "bg-orange-600" : "bg-gray-200"
                }`}
                onClick={() => onDotButtonClick(index)}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}