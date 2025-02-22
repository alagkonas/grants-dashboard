"use client";

import { CreditButton, DeleteButton, EditApplicationButton, SubmitButton, ViewInfoButton } from "@/app/dashboard/_components/kanban/components/card-buttons";
import React from "react";
import { Texts } from "@/app/dashboard/_components/kanban/texts";
import Dialog from "@/components/dialog/dialog";
import { useMutation } from "@apollo/client";
import { CREATE_APPLICATION, UPDATE_APPLICATION_STATUS } from "@/services/graphql/mutations";
import { ApplicationStatus } from "@/types/types";

type UpdateApplicationActionsFooterProps = {
  status: ApplicationStatus;
  applicationId: string
}

export const NewGrantsActionFooter: React.FC<{ matchId: string | undefined }> = ({ matchId = "" }) => {
  const [createApplication, { loading }] = useMutation(CREATE_APPLICATION, {
    variables: {
      matchId
    }
  });

  return (
    <>
      <DeleteButton />
      <Dialog
        dialogTitle={Texts.CreateApplication}
        dialogInfo={Texts.CreateApplicationConfirmation}
        actionText={Texts.Create}
        onAction={createApplication}
        loading={loading}
      >
        <CreditButton />
      </Dialog>
    </>
  );
};

export const PreAppliedApplicationActionFooter: React.FC<UpdateApplicationActionsFooterProps> = (props) => {
  const [updateApplication, { loading }] = useMutation(UPDATE_APPLICATION_STATUS, {
    variables: {
      ...props
    }
  });
  return (
    <>
      <DeleteButton />
      <Dialog
        dialogTitle={Texts.UpdateApplication}
        dialogInfo={Texts.UpdateApplicationConfirmation}
        actionText={Texts.Update}
        onAction={updateApplication}
        loading={loading}
      >
        <EditApplicationButton />
      </Dialog>
    </>
  );
};

export const InProgressApplicationActionFooter: React.FC<{ deadline: Date } & UpdateApplicationActionsFooterProps> = ({ deadline, ...rest }) => {
  const [updateApplication, { loading }] = useMutation(UPDATE_APPLICATION_STATUS, {
    variables: {
      ...rest
    }
  });
  return (
    <div className="w-full flex justify-end items-center">
      <span className="text-orange-300">I will finish in {deadline?.getDay()} days</span>
      <Dialog
        dialogTitle={Texts.UpdateApplication}
        dialogInfo={Texts.UpdateApplicationConfirmation}
        actionText={Texts.Update}
        onAction={updateApplication}
        loading={loading}
      >
        <ViewInfoButton />
      </Dialog>
    </div>
  );
};

export const ReadyApplicationActionFooter: React.FC<UpdateApplicationActionsFooterProps> = (props) => {
  const [updateApplication, { loading }] = useMutation(UPDATE_APPLICATION_STATUS, {
    variables: {
      ...props
    }
  });
  return (
    <>
      <Dialog
        dialogTitle={Texts.UpdateApplication}
        dialogInfo={Texts.UpdateApplicationConfirmation}
        actionText={Texts.Update}
        onAction={updateApplication}
        loading={loading}
      >
        <SubmitButton />
      </Dialog>
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