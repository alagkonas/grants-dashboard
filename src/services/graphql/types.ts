import { ApplicationStatus, DateTime } from "@/types/types";

export type GetReadyApplicationsNode = {
  id: string;
  status: ApplicationStatus;
  createdAt: DateTime;
  match: {
    id: string;
    grant: {
      id: string;
      avgAmount?: number;
      foundationName: string;
      grantName: string;
      deadline: DateTime;
      location?: string
    }
  }
}