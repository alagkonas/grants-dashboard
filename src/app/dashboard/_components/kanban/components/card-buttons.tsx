"use client";

import { Pen, Search, Trash } from "lucide-react";
import React from "react";
import { Texts } from "@/app/dashboard/_components/kanban/texts";

export const DeleteButton: React.FC = () => {
  return (
    <button
      className="bg-white text-gray-500 px-2 mx-3 border-2 border-gray-400 py-2 rounded-lg font-medium hover:bg-gray-200 transition-colors"
    >
      <Trash className="h-4 w-4"/>
    </button>
  );
};

export const CreditButton: React.FC = () => {
  return (
    <button
      className="bg-orange-600 text-white px-2 py-2 rounded-lg font-medium hover:bg-orange-700 transition-colors"
    >
      🪙 {Texts.CreditButton}
    </button>
  );
};

export const EditApplicationButton: React.FC = () => {
  return (
    <button
      className="bg-orange-600 text-white px-2 py-2 rounded-lg font-medium hover:bg-orange-700 transition-colors"
    >
      <Pen className="h-4 w-4"/>
      {Texts.EditApplicationButton}
    </button>
  );
};

export const ViewInfoButton: React.FC = () => {
  return (
    <button
      className="bg-white text-white px-2 py-2 rounded-lg font-medium hover:bg-gray-200 transition-colors"
    >
      <Search className="h-4 w-4"/>
      {Texts.ViewInfoButton}
    </button>
  );
};

export const SubmitButton: React.FC = () => {
  return (
    <button
      className="bg-orange-600 text-white px-2 py-2 rounded-lg font-medium hover:bg-orange-700 transition-colors"
    >
      &#127881; {Texts.ReadyApplicationTitle}
    </button>
  );
};
