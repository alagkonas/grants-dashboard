"use client";

import { Pen, Search, Trash } from "lucide-react";
import React from "react";
import { Texts } from "@/app/dashboard/_components/kanban/texts";

const CommonButtonDiv = ({
  children,
  className = "",
  ...props
}: React.HTMLAttributes<HTMLDivElement>) => (
  <div
    className={`
      hover:cursor-pointer 
      rounded-lg 
      font-medium 
      px-2 
      py-2 
      transition-colors 
      ${className}
    `}
    {...props}
  >
    {children}
  </div>
);

export const DeleteButton: React.FC = () => {
  return (
    <CommonButtonDiv
      className="bg-white text-gray-500 mx-3 border-2 border-gray-400 hover:bg-gray-200 flex items-center"
    >
      <Trash className="h-4 w-4" />
    </CommonButtonDiv>
  );
};

export const CreditButton: React.FC = () => {
  return (
    <CommonButtonDiv className="bg-orange-600 text-white hover:bg-orange-700">
      🪙 {Texts.CreditButton}
    </CommonButtonDiv>
  );
};

export const EditApplicationButton: React.FC = () => {
  return (
    <CommonButtonDiv className="bg-orange-600 text-white hover:bg-orange-700 flex items-center justify-between">
      <Pen className="h-6 w-6 pr-2" />
      {Texts.EditApplicationButton}
    </CommonButtonDiv>
  );
};

export const ViewInfoButton: React.FC = () => {
  return (
    <CommonButtonDiv className="ml-2 w-fit bg-white text-orange-500 border-2 border-orange-500 hover:bg-orange-50 flex items-center justify-evenly">
      <Search className="h-6 w-6 pr-2" />
      {Texts.ViewInfoButton}
    </CommonButtonDiv>
  );
};

export const SubmitButton: React.FC = () => {
  return (
    <CommonButtonDiv className="bg-orange-600 text-white hover:bg-orange-700">
      &#127881; {Texts.ReadyApplicationTitle}
    </CommonButtonDiv>
  );
};