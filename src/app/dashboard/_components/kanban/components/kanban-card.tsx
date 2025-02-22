import React from "react";
import { Clock, MapPin, SquareArrowRight } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { ApplicationStatus, Grant } from "@/types/types";
import { Texts } from "@/app/dashboard/_components/kanban/texts";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { getCardActionFooter } from "@/app/dashboard/_components/kanban/utils/getActionFooter";
import { formatDate } from "@/utils/formatDate";

export type ApplicationCardProps = {
  updateStatus?: ApplicationStatus;
  currentStatus?: ApplicationStatus;
  grant: Partial<Grant>
  recordId: string
}

export default function KanbanCard({ grant, updateStatus, currentStatus, recordId }: ApplicationCardProps) {
  const cardActionFooter = getCardActionFooter({ updateStatus, grant, currentStatus, recordId });

  return (
    <Card
      className="mb-4"
    >
      <CardContent className="pt-6 space-y-4">
        {currentStatus === ApplicationStatus.IN_PROGRESS ? (
          <div className="flex justify-start items-center">
            {/* here we could display the actual percentage of the form application instead of a mock percent */}
            <p className="text-2xl text-gray-700 font-bold pr-2">
              80%
            </p>
            <p className="text-sm text-gray-500">{Texts.PercentInfo}</p>
          </div>
        ) : (
          <div className="flex justify-start items-center">
            <p className="text-2xl text-gray-700 font-bold pr-2">
              ${grant?.avgAmount}
            </p>
            <p className="text-sm text-gray-500">{Texts.AvgAmount}</p>
          </div>
        )}


        <Accordion type="single" collapsible>
          <AccordionItem value="item-1">
            <AccordionTrigger>
              <div className="!mt-0">
                <h3 className="font-semibold text-gray-700">{grant.foundationName}</h3>
                <span className="text-gray-500">{grant.grantName}</span>
              </div>
            </AccordionTrigger>
            <AccordionContent>

              {/* Here we could render instead, the field of the application's form if application status is IN_PROGRESS */}

              <div className="space-y-2">
                <div className="flex items-center text-sm">
                  <Clock className="h-4 w-4 mr-2 text-orange-400" />
                  <span className="font-bold pr-1 text-gray-700">{Texts.Deadline}</span>
                  <span>{formatDate(new Date(grant.deadline))}</span>
                </div>
                {grant?.gettingStarted && (
                  <div className="flex items-center text-sm">
                    <SquareArrowRight className="h-4 w-4 mr-2 text-orange-400" />
                    <span className="font-bold pr-1 text-gray-700">{Texts.GettingStarted}</span>
                    <span>{grant.gettingStarted}</span>
                  </div>
                )}
                {grant?.location && (
                  <div className="flex items-center text-sm">
                    <MapPin className="h-4 w-4 mr-2 text-orange-400" />
                    <span className="font-bold pr-1 text-gray-700">{Texts.Location}</span>
                    <span>{grant.location}</span>
                  </div>
                )}
              </div>
            </AccordionContent>
          </AccordionItem>
        </Accordion>

        <div className="flex items-center justify-end">
          {cardActionFooter}
        </div>

      </CardContent>
    </Card>
  );
};