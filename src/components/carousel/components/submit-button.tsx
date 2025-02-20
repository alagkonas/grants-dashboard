"use client";

import React from "react";
import { useMutation } from "@apollo/client";
import { UPDATE_APPLICATION_STATUS } from "@/services/graphql/mutations";
import { ApplicationStatus } from "@/types/types";
import { Loader } from "lucide-react";
import { GET_READY_APPLICATIONS } from "@/services/graphql/queries";

export default function SubmitButton({ applicationId }: { applicationId: string }) {
  const [updateApplicationStatus, { loading }] = useMutation(UPDATE_APPLICATION_STATUS, {
    variables: {
      applicationId,
      status: ApplicationStatus.SUBMITTED
    },
    refetchQueries: [GET_READY_APPLICATIONS]
  });

  return (
    <button
      className="w-1/2 bg-white text-gray-800 px-2 py-2 rounded-lg font-medium hover:bg-white/90 transition-colors"
      onClick={() => updateApplicationStatus()}
    >
      {loading && (
        <Loader className="animate-spin [animation-duration:2s]" />
      )}
      &#127881; Submit now
    </button>
  );
}