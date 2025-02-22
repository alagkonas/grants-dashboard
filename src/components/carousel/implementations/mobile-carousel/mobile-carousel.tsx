"use client";

import React from "react";
import { EmblaOptionsType } from "embla-carousel";
import { useDotButton } from "@/components/carousel/hooks/useDotButton";
import useEmblaCarousel from "embla-carousel-react";
import CarouselCard from "@/components/carousel/components/carousel-card";
import { GetReadyApplicationsNode } from "@/services/graphql/types";

type MobileCarouselProps = {
  slides: GetReadyApplicationsNode[]
  options?: EmblaOptionsType
}

export default function MobileCarousel({ slides, options }: MobileCarouselProps) {
  const [emblaRef, emblaApi] = useEmblaCarousel(options);

  const { selectedIndex, scrollSnaps, onDotButtonClick } =
    useDotButton(emblaApi);

  return (
    <div className="md:hidden">
      <div className="space-y-1 px-4 flex flex-col items-center">
        <h2 className="text-2xl font-semibold">Let&#39;s secure those grants!</h2>
        <p className="text-gray-600">Submit the Grants we&#39;ve completed</p>
      </div>


      <div className="relative mt-6 w-[400px]">
        <div className="flex justify-evenly h-60 w-full flex-col items-center">
          <div className="overflow-x-hidden h-full w-[90%]">
            <div
              className="overflow-hidden h-full w-full"
              ref={emblaRef}
            >
              <div className="flex touch-pan-y -ml-8">
                {slides.map((application) => (
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