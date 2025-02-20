import { cookies } from "next/headers";

export const getOrganizationHeaders = async () => {
  const cookiesStore = await cookies();
  const organizationId = cookiesStore.get("organizationId")?.value;
  const organizationName = cookiesStore.get("organizationName")?.value;

  return {
    "x-organization-id": organizationId,
    "x-organization-name": organizationName
  };
};