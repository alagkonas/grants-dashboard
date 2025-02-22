import React from "react";

import DesktopCarousel from "@/components/carousel/implementations/desktop-carousel/desktop-carousel";
import MobileCarousel from "@/components/carousel/implementations/mobile-carousel/mobile-carousel";
import { PreloadQuery } from "@/services/apollo-client/apollo-client";
import { GET_READY_APPLICATIONS } from "@/services/graphql/queries";
import { getOrganizationHeaders } from "@/server/utils";

export default async function ResponsiveApplicationsCarousel() {
  // await new Promise(resolve => setTimeout(resolve, 2000));
  const organizationHeaders = await getOrganizationHeaders();

  return (
    <PreloadQuery
      query={GET_READY_APPLICATIONS}
      context={{
        headers: {
          ...organizationHeaders
        }
      }}
    >
      <DesktopCarousel />

      <MobileCarousel />
    </PreloadQuery>
  );
}
