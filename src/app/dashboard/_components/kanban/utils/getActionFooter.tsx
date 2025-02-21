import { ApplicationStatus, Grant } from "@/types/types";
import {
  InProgressApplicationActionFooter, NewGrantsActionFooter,
  PreAppliedApplicationActionFooter,
  ReadyApplicationActionFooter,
  SubmittedApplicationActionFooter
} from "@/app/dashboard/_components/kanban/components/card-action-footers";
import { ApplicationCardProps } from "@/app/dashboard/_components/kanban/components/kanban-card";

export const getCardActionFooter = ({ recordId, status, grant }: ApplicationCardProps) => {
  switch (status) {
  case ApplicationStatus.PRE_APPLICATION:
    return (
      <PreAppliedApplicationActionFooter applicationId={recordId} status={status} />
    );
  case ApplicationStatus.IN_PROGRESS:
    return (
      <InProgressApplicationActionFooter deadline={new Date(grant.deadline)} applicationId={recordId} status={status} />
    );
  case ApplicationStatus.READY:
    return (
      <ReadyApplicationActionFooter applicationId={recordId} status={status} />
    );
  case ApplicationStatus.SUBMITTED:
    return (
      <SubmittedApplicationActionFooter />
    );
  default:
    return <NewGrantsActionFooter matchId={recordId} />;
  }
};