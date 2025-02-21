"use client";

import { CreditButton, DeleteButton, EditApplicationButton, SubmitButton, ViewInfoButton } from "@/app/dashboard/_components/kanban/components/card-buttons";
import React from "react";
import { Texts } from "@/app/dashboard/_components/kanban/texts";

export const NewGrantsActionFooter: React.FC = () => {
  return (
    <>
      <DeleteButton />
      <CreditButton />
    </>
  );
};

export const PreAppliedApplicationActionFooter: React.FC = () => {
  return (
    <>
      <DeleteButton />
      <EditApplicationButton />
    </>
  );
};

export const InProgressApplicationActionFooter: React.FC = () => {
  return (
    <>
      <span className="text-orange-300">{Texts.ApplicationFinishInfo}</span>
      <ViewInfoButton />
    </>
  );
};

export const ReadyApplicationActionFooter: React.FC = () => {
  return (
    <>
      <SubmitButton />
    </>
  );
};

export const SubmittedApplicationActionFooter: React.FC = () => {
  return (
    <>
      <ViewInfoButton />
    </>
  );
};