"use client";

import { useEffect } from "react";

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    console.error("Application error:", error);
  }, [error]);

  return (
    <div className="min-h-screen flex flex-col items-center justify-center p-8 bg-gray-50">
      <h1 className="text-xl font-semibold text-gray-900 mb-2">Etwas ist schiefgelaufen</h1>
      <p className="text-gray-600 mb-6 text-center max-w-md">
        Ein Fehler ist aufgetreten. Bitte laden Sie die Seite neu.
      </p>
      <button
        onClick={reset}
        className="px-4 py-2 bg-[#b86308] text-white rounded-lg font-medium hover:opacity-90"
      >
        Erneut versuchen
      </button>
    </div>
  );
}
