"use client";

import React from "react";
import { EmblaOptionsType } from "embla-carousel";
import { useDotButton } from "@/components/carousel/hooks/useDotButton";
import { usePrevNextButtons } from "@/components/carousel/hooks/usePrevNextButtons";
import useEmblaCarousel from "embla-carousel-react";
import { ArrowLeft, ArrowRight } from "lucide-react";
import CarouselCard from "@/components/carousel/components/carousel-card";
import { useSuspenseQuery } from "@apollo/client";
import { GET_READY_APPLICATIONS } from "@/services/graphql/queries";

export const options: EmblaOptionsType = { align: "start", loop: false, containScroll: "trimSnaps", slidesToScroll: 1 };

export default function DesktopCarousel() {
  const { data } = useSuspenseQuery(GET_READY_APPLICATIONS);
  const [emblaRef, emblaApi] = useEmblaCarousel(options);

  const { selectedIndex, scrollSnaps, onDotButtonClick } =
    useDotButton(emblaApi);

  const {
    prevBtnDisabled,
    nextBtnDisabled,
    onPrevButtonClick,
    onNextButtonClick
  } = usePrevNextButtons(emblaApi);

  return (
    <div className="hidden lg:w-3/4 h-60 md:w-[95%] bg-white px-4 py-6 rounded-xl md:shadow-sm md:flex flex-row justify-between">
      <div className="hidden md:flex flex-col justify-between w-1/5">
        <div>
          <h2 className="text-2xl font-semibold">Let&#39;s get the money!</h2>
          <p className="text-gray-600">Submit the Grants we&#39;ve completed</p>
        </div>

        <div>
          <div className="flex items-center space-x-4 mb-4">
            <button
              className="p-2 rounded-lg border border-orange-600 hover:bg-gray-50 hover:cursor-pointer"
              onClick={onPrevButtonClick}
              disabled={prevBtnDisabled}
            >
              <ArrowLeft className="h-4 w-4 text-orange-600" />
            </button>
            <button
              className="p-2 rounded-lg border border-orange-600 hover:bg-gray-50 hover:cursor-pointer"
              onClick={onNextButtonClick}
              disabled={nextBtnDisabled}
            >
              <ArrowRight className="h-4 w-4 text-orange-600" />
            </button>
          </div>

          <div className="flex space-x-2">
            {scrollSnaps.map((_, index) => (
              <button
                key={index}
                className={`w-2.5 h-2.5 rounded-full ${
                  index === selectedIndex ? "bg-orange-600" : "bg-gray-200"
                }`}
                onClick={() => onDotButtonClick(index)}
              />
            ))}
          </div>
        </div>
      </div>

      <div className="md:max-w-[calc(100%-200px)] space-x-4 w-3/4 overflow-x-hidden hidden md:flex relative">
        <div
          className="overflow-hidden w-full"
          ref={emblaRef}
        >
          <div className="flex touch-pan-y h-full -ml-8">
            {data?.getApplications?.map((application) => (
              <CarouselCard key={application.id} application={application} />
            ))}
          </div>
        </div>
      </div>


    </div>
  );
}