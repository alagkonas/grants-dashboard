import React from "react";

import DesktopCarousel from "@/components/carousel/implementations/desktop-carousel/desktop-carousel";
import { EmblaOptionsType } from "embla-carousel";
import MobileCarousel from "@/components/carousel/implementations/mobile-carousel/mobile-carousel";

const OPTIONS: EmblaOptionsType = { align: "start", loop: true };
const SLIDE_COUNT = 5;
const SLIDES = Array.from(Array(SLIDE_COUNT)
  .keys());

export default function ResponsiveGrantsCarousel() {
  return (
    <>
      <DesktopCarousel slides={SLIDES} options={OPTIONS} />

      <MobileCarousel slides={SLIDES} options={OPTIONS} />
    </>

  );
}
