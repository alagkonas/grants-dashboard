"use client";

import { Pen, Search, Trash } from "lucide-react";
import React from "react";
import { Texts } from "@/app/dashboard/_components/kanban/texts";

export const DeleteButton: React.FC = () => {
  return (
    <div
      className="bg-white text-gray-500 px-2 mx-3 hover:cursor-pointer border-2 border-gray-400 py-2 rounded-lg font-medium hover:bg-gray-200 transition-colors"
    >
      <Trash className="h-4 w-4" />
    </div>
  );
};

export const CreditButton: React.FC = () => {
  return (
    <div
      className="bg-orange-600 text-white px-2 py-2 hover:cursor-pointer rounded-lg font-medium hover:bg-orange-700 transition-colors"
    >
      🪙 {Texts.CreditButton}
    </div>
  );
};

export const EditApplicationButton: React.FC = () => {
  return (
    <div
      className="bg-orange-600 text-white px-2 py-2 hover:cursor-pointer rounded-lg font-medium hover:bg-orange-700 transition-colors flex items-center justify-between"
    >
      <Pen className="h-6 w-6 pr-2" />
      {Texts.EditApplicationButton}
    </div>
  );
};

export const ViewInfoButton: React.FC = () => {
  return (
    <div
      className="ml-2 w-fit bg-white text-orange-500 px-2 hover:cursor-pointer border-2 border-orange-500 py-2 rounded-lg font-medium transition-colors flex items-center justify-evenly"
    >
      <Search className="h-6 w-6 pr-2" />
      {Texts.ViewInfoButton}
    </div>
  );
};

export const SubmitButton: React.FC = () => {
  return (
    <div
      className="bg-orange-600 text-white px-2 py-2 hover:cursor-pointer rounded-lg font-medium hover:bg-orange-700 transition-colors"
    >
      &#127881; {Texts.ReadyApplicationTitle}
    </div>
  );
};
