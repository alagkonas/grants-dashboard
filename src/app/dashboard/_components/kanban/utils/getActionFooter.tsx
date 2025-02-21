import { ApplicationStatus } from "@/types/types";
import {
  InProgressApplicationActionFooter, NewGrantsActionFooter,
  PreAppliedApplicationActionFooter,
  ReadyApplicationActionFooter,
  SubmittedApplicationActionFooter
} from "@/app/dashboard/_components/kanban/components/card-action-footers";

export const getCardActionFooter = (status: ApplicationStatus | undefined) => {
  switch (status) {
  case ApplicationStatus.PRE_APPLICATION:
    return (
      < PreAppliedApplicationActionFooter />
    );
  case ApplicationStatus.IN_PROGRESS:
    return (
      <InProgressApplicationActionFooter />
    );
  case ApplicationStatus.READY:
    return (
      <ReadyApplicationActionFooter />
    );
  case ApplicationStatus.SUBMITTED:
    return (
      <SubmittedApplicationActionFooter />
    );
  default:
    return <NewGrantsActionFooter />;
  }
};