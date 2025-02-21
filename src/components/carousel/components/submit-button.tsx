"use client";

import React from "react";
import { useMutation } from "@apollo/client";
import { UPDATE_APPLICATION_STATUS } from "@/services/graphql/mutations";
import { ApplicationStatus } from "@/types/types";
import { Loader } from "lucide-react";

export default function SubmitButton({ applicationId }: { applicationId: string }) {
  const [updateApplicationStatus, { loading }] = useMutation(UPDATE_APPLICATION_STATUS, {
    variables: {
      applicationId,
      status: ApplicationStatus.SUBMITTED
    }
  });

  return (
    <button
      className="w-1/2 bg-white text-gray-800 px-2 py-1 rounded-lg font-medium hover:bg-white/80 transition-colors"
      onClick={() => updateApplicationStatus()}
    >
      {loading && (
        <Loader className="animate-spin [animation-duration:2s]" />
      )}
      &#127881; Submit now
    </button>
  );
}