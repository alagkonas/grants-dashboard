import React from "react";

import DesktopCarousel from "@/components/carousel/implementations/desktop-carousel/desktop-carousel";
import { EmblaOptionsType } from "embla-carousel";
import MobileCarousel from "@/components/carousel/implementations/mobile-carousel/mobile-carousel";
import { getClient } from "@/services/apollo-client/apollo-client";
import { GET_READY_APPLICATIONS } from "@/services/graphql/queries";
import { getOrganizationHeaders } from "@/server/utils";

const OPTIONS: EmblaOptionsType = { align: "start", loop: true, containScroll: "trimSnaps", slidesToScroll: 1 };

export default async function ResponsiveApplicationsCarousel() {
  const organizationHeaders = await getOrganizationHeaders();

  const { data } = await getClient()
    .query({
      query: GET_READY_APPLICATIONS,
      context: {
        headers: {
          ...organizationHeaders
        }
      }
    });

  return (
    <>
      <DesktopCarousel slides={data?.getApplications} options={OPTIONS} />

      <MobileCarousel slides={data?.getApplications} options={OPTIONS} />
    </>
  );
}
