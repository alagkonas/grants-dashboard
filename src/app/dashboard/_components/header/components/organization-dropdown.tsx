"use client";

import React, { useCallback, useState } from "react";
import { DropdownMenu, DropdownMenuContent, DropdownMenuRadioGroup, DropdownMenuRadioItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu";
import { Button } from "@/components/ui/button";
import { ChevronDown } from "lucide-react";
import { Organization } from "@/types/types";
import { useApolloClient } from "@apollo/client";
import { useCookies } from "@/hooks/useCookies";

type OrganizationDropdownProps = {
  setOrganizationCookiesAction: (organizationId: string, organizationName: string) => Promise<void>
}

// we copy organizations from grants-dashboard-api to ensure same ids and names
// in a real world scenario, server would have provided them to client
const organizations: Organization[] = [
  {
    id: "1",
    name: "Tech For Good"
  },
  {
    id: "2",
    name: "Eco Solutions"
  },
  {
    id: "3",
    name: "Community Arts"
  }
];

export default function OrganizationDropdown({ setOrganizationCookiesAction }: OrganizationDropdownProps) {
  const [selectedOrganization, setSelectedOrganization] = useState<Organization | null>(null);
  const apolloClient = useApolloClient();

  const handleCookieRetrieved = useCallback(async (cookie: Organization | null) => {
    const organization = cookie ?? organizations[0];

    setSelectedOrganization(organization);
    localStorage.setItem("organization", JSON.stringify(organization));
    await setOrganizationCookiesAction(
      organization.id,
      organization.name
    );

    apolloClient.resetStore();
  }, [apolloClient, setOrganizationCookiesAction]);

  useCookies<Organization>("organization", handleCookieRetrieved);

  const handleChangeOrganization = useCallback(async (organizationId: string) => {
    const newSelectedOrganization = organizations.find(organization => organization.id === organizationId)!;
    setSelectedOrganization(newSelectedOrganization);

    localStorage.setItem("organization", JSON.stringify(newSelectedOrganization));

    await setOrganizationCookiesAction(
      newSelectedOrganization.id,
      newSelectedOrganization.name
    );

    apolloClient.resetStore();
  }, [apolloClient, setOrganizationCookiesAction]);

  return (
    <div className="hidden lg:block">
      <DropdownMenu>
        <DropdownMenuTrigger asChild className="bg-gray-100 h-11">
          <Button
            variant="outline"
            className="h-8 px-3 text-sm border-gray-200 text-gray-900 focus-visible:ring-1 focus-visible:shadow-none">
            <span>{selectedOrganization?.name}</span>
            <ChevronDown className="ml-2 h-4 w-4 text-gray-500" />
          </Button>
        </DropdownMenuTrigger>
        <DropdownMenuContent align="end" className="w-[200px] bg-[#F9FAFB]">
          <DropdownMenuRadioGroup value={selectedOrganization?.id} onValueChange={handleChangeOrganization}>
            {organizations.map((organization) => (
              <DropdownMenuRadioItem
                key={organization.id}
                className="focus:bg-gray-100 [&>span]:hidden"
                value={organization.id}
              >
                {organization.name}
              </DropdownMenuRadioItem>
            ))}
          </DropdownMenuRadioGroup>
        </DropdownMenuContent>
      </DropdownMenu>
    </div>
  );
}
