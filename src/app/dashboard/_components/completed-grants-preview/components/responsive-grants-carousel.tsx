import React, { Suspense } from "react";

import DesktopCarousel from "@/components/carousel/implementations/desktop-carousel/desktop-carousel";
import { EmblaOptionsType } from "embla-carousel";
import MobileCarousel from "@/components/carousel/implementations/mobile-carousel/mobile-carousel";
import { getClient } from "@/services/apollo-client/apollo-client";
import { GET_READY_APPLICATIONS } from "@/services/graphql/queries";
import { getOrganizationHeaders } from "@/server/utils";

const OPTIONS: EmblaOptionsType = { align: "start", loop: true };

export default async function ResponsiveGrantsCarousel() {
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
    <Suspense fallback={<>LOADING...</>}>
      <DesktopCarousel slides={data?.getApplications} options={OPTIONS} />

      <MobileCarousel slides={data?.getApplications} options={OPTIONS} />
    </Suspense>
  );
}
