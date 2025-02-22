import React from "react";
import { Clock } from "lucide-react";
import SubmitButton from "@/components/carousel/components/submit-button";
import { GetReadyApplicationsNode } from "@/services/graphql/types";

type CarouselCardProps = {
  application:  GetReadyApplicationsNode
}

export default function CarouselCard({ application }: CarouselCardProps) {
  return (
    <div
      className="flex-[0_0_40%] pl-8"
    >
      <div
        className={"w-full h-full transition-opacity duration-300 bg-gradient-to-r to-orange-500 from-orange-400 p-2 text-white rounded-xl"}
      >
        <div className="space-y-1 h-full flex min-w-[300px] flex-col items-center justify-between">
          <div className="bg-white/70 text-gray-800 px-3 py-1 rounded-full text-sm w-fit flex flex-row items-center justify-between ">
            <Clock className="w-4 h-4 mr-2 text-gray-800" />
            Due in {new Date(application?.match?.grant?.deadline).getDay()} days
          </div>

          <div className="space-y-2 flex flex-col items-center">
            <p className="text-3xl font-bold">${application?.match?.grant?.avgAmount}</p>
            <h3 className="text-xl font-semibold mt-2">{application?.match?.grant?.foundationName}</h3>
            <p className="text-sm opacity-90">{application?.match?.grant?.location}</p>
          </div>

          <SubmitButton applicationId={application?.id} />
        </div>
      </div>
    </div>
  );
}