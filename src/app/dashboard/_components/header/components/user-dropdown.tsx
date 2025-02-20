import React from "react";
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu";
import { Button } from "@/components/ui/button";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { ChevronDown } from "lucide-react";

export default function UserDropdown() {
  return (
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
  );
}