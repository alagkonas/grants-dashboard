import { ApplicationStatus } from "@/types/types";
import { Texts } from "@/app/dashboard/_components/kanban/texts";

export type KanbanColumnType = {
  id: ApplicationStatus;
  title: string;
  info: string;
}

export const KANBAN_APPLICATIONS_COLUMNS: KanbanColumnType[] = [
  { id: ApplicationStatus.PRE_APPLICATION, title: Texts.PreAppliedApplicationTitle, info: Texts.PreAppliedApplicationInfo },
  { id: ApplicationStatus.IN_PROGRESS, title: Texts.InProgressApplicationTitle, info: Texts.InProgressApplicationInfo },
  { id: ApplicationStatus.READY, title: Texts.ReadyApplicationTitle, info: Texts.ReadyApplicationInfo },
  { id: ApplicationStatus.SUBMITTED, title: Texts.SubmittedApplicationTitle, info: Texts.SubmittedApplicationInfo }
];
