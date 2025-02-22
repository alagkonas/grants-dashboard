import React from "react";

import { Button } from "@/components/ui/button";
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";
import { Bell, Menu } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import OrganizationDropdown from "@/app/dashboard/_components/header/components/organization-dropdown";
import UserDropdown from "@/app/dashboard/_components/header/components/user-dropdown";
import { setOrganizationCookies } from "@/server/actions";

export default function Header() {
  return (
    <div className="bg-white border-b border-gray-100 h-full">
      <div className="h-16 px-4 flex items-center justify-between">
        <div className="flex items-center space-x-8 align-bottom h-full">
          <Link href="/" className="flex-shrink-0">
            <Image src="/vee-logo.png" alt="Vee" width={100} height={100} />
          </Link>

          <div className="hidden md:flex items-end space-x-2 h-full">
            <Button
              variant="ghost"
              className="h-3/4 text-sm font-medium text-gray-600 hover:text-gray-900 hover:bg-gray-100"
            >
              <Avatar className="h-8 w-10">
                <AvatarImage src="maggie-avatar.png" alt="Maggie" />
                <AvatarFallback>M</AvatarFallback>
              </Avatar>
              Maggie
            </Button>
            <Button
              variant="ghost"
              className="h-3/4 rounded-b-none rounded-t-lg border-b-2 border-b-orange-400 text-sm font-medium bg-grant-pink text-gray-900 hover:bg-orange-200"
            >
              <Avatar className="h-8 w-10">
                <AvatarImage src="grant-avatar.png" alt="Grant" />
                <AvatarFallback>G</AvatarFallback>
              </Avatar>
              Grant
            </Button>
          </div>
        </div>

        <div className="h-8 flex lg:hidden items-center space-x-3 px-4 py-2 ">
          <Avatar className="h-8 w-8 rounded-sm">
            <AvatarImage className="rounded-sm" src="grant-avatar.png" alt="Maya" />
            <AvatarFallback>M</AvatarFallback>
          </Avatar>
          <span className="font-medium">Hi Maya! &#128075;</span>
        </div>

        <div className="flex items-center space-x-4">
          <OrganizationDropdown setOrganizationCookiesAction={setOrganizationCookies} />

          <UserDropdown />

          <Button
            className="h-8 w-8 text-gray-500 hover:text-gray-900 hidden sm:block"
            variant="ghost"
            size="icon"
          >
            <Bell className="h-4 w-4" />
          </Button>

          <Button
            variant="ghost"
            size="icon"
            className="sm:hidden h-8 w-8 text-gray-500"
          >
            <Menu className="h-5 w-5" />
          </Button>
        </div>
      </div>
    </div>
  );
}