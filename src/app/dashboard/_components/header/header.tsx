import React from "react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuTrigger
} from "@/components/ui/dropdown-menu";
import { Button } from "@/components/ui/button";
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";
import { ChevronDown, Bell, Menu } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export default function Header() {
  return (
    <div className="bg-white border-b border-gray-100 h-full">
      <div className="h-16 px-4 flex items-center justify-between">
        <div className="flex items-center space-x-8 align-bottom h-full">
          <Link href="/dashboard" className="flex-shrink-0">
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
              className="h-3/4 rounded-b-none rounded-t-lg border-b-2 border-b-orange-400 text-sm font-medium bg-orange-200 text-gray-900 hover:bg-[#FFEDD5]"
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
          <div className="hidden lg:block">
            <DropdownMenu>
              <DropdownMenuTrigger asChild className="bg-gray-200 opacity-60 h-11">
                <Button
                  variant="outline"
                  className="h-8 px-3 text-sm border-gray-200 text-gray-700"
                >
                  <span>Select Organization</span>
                  <ChevronDown className="ml-2 h-4 w-4 text-gray-500" />
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent
                align="end"
                className="w-[200px] bg-[#F9FAFB]"
              >
                <DropdownMenuGroup>
                  <DropdownMenuItem className="focus:bg-gray-100">
                    Organization 1
                  </DropdownMenuItem>
                  <DropdownMenuItem className="focus:bg-gray-100">
                    Organization 2
                  </DropdownMenuItem>
                </DropdownMenuGroup>
              </DropdownMenuContent>
            </DropdownMenu>
          </div>

          <div className="hidden sm:block">
            <DropdownMenu>
              <DropdownMenuTrigger asChild className="bg-gray-100 h-11">
                <Button
                  variant="ghost"
                  className="h-8 flex items-center font-semibold border-gray-200 space-x-2 px-2"
                >
                  <Avatar className="h-8 w-10">
                    <AvatarImage src="user-avatar.png" alt="Maya Geldt" />
                    <AvatarFallback>MG</AvatarFallback>
                  </Avatar>
                  <span className="text-sm text-gray-700">Maya Geldt</span>
                  <ChevronDown className="h-4 w-4 text-gray-500" />
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent
                align="end"
                className="w-[200px] bg-[#F9FAFB]"
              >
                <DropdownMenuItem className="focus:bg-gray-100">Profile</DropdownMenuItem>
                <DropdownMenuItem className="focus:bg-gray-100">Settings</DropdownMenuItem>
                <DropdownMenuItem className="focus:bg-gray-100">Sign out</DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          </div>

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