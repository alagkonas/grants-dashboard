"use server";

import { cookies } from "next/headers";

export async function setOrganizationCookies(organizationId: string, organizationName: string) {
  const cookieStore = await cookies();

  cookieStore.set("organizationId", organizationId, {
    path: "/",
    maxAge: 60 * 60 * 24 * 30,
    httpOnly: true
  });

  cookieStore.set("organizationName", organizationName, {
    path: "/",
    maxAge: 60 * 60 * 24 * 30,
    httpOnly: true
  });
}
