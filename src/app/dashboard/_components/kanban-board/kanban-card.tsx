import React from "react";
import { Clock, MapPin } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { ApplicationStatus } from "@/app/dashboard/_components/kanban-board/kanban-board";

interface ApplicationCardProps {
  status?: ApplicationStatus;
  grant: {
    avgAmount: number;
    foundationName: string;
    grantName: string;
    deadline: string;
    location?: string;
  };
  progress?: number;
}

export default function KanbanCard({ grant }: ApplicationCardProps) {
  return (
    <Card
      className={`mb-4 `}
    >
      <CardContent className="pt-6 space-y-4">
        <div className="flex justify-between items-start">
          <div>
            <p className="text-2xl font-bold">
              ${grant.avgAmount.toLocaleString()}
            </p>
            <p className="text-sm text-opacity-90">Avg Amount</p>
          </div>

            <div className="w-16 h-16 rounded-full border-4 border-orange-200 flex items-center justify-center">
              <span className="text-lg font-semibold text-orange-500">
                80%
              </span>
            </div>
        </div>

        <div>
          <h3 className="font-semibold">{grant.foundationName}</h3>
          {grant.grantName}
        </div>

        <div className="space-y-2">
          <div className="flex items-center text-sm">
            <Clock className="h-4 w-4 mr-2" />
            <span>Deadline {grant.deadline}</span>
          </div>
          {grant.location && (
            <div className="flex items-center text-sm">
              <MapPin className="h-4 w-4 mr-2" />
              <span>{grant.location}</span>
            </div>
          )}
        </div>

      </CardContent>
    </Card>
  );
}
;