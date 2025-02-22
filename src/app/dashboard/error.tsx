'use client';

import { useEffect } from 'react';

interface ErrorBoundaryProps {
  error: Error;
  reset: () => void;
}

export default function ErrorBoundary({ error, reset }: ErrorBoundaryProps) {
  useEffect(() => {
    console.error('Apollo Error:', error);
  }, [error]);

  return (
    <div className="flex flex-col items-center justify-center min-h-screen p-4">
      <div className="space-y-4 text-center">
        <h2 className="text-2xl font-semibold text-gray-900">
          Something went wrong loading the data
        </h2>
        <p className="text-gray-600">
          {error.message}
        </p>
        <button
          onClick={reset}
          className="px-4 py-2 text-sm font-medium text-white bg-orange-500 rounded-lg hover:bg-orange-600"
        >
          Try again
        </button>
      </div>
    </div>
  );
}