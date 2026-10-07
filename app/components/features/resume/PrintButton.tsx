"use client";

/** Browser-native print → Save as PDF. Hidden from print output. */
export default function PrintButton() {
  return (
    <button
      type="button"
      onClick={() => window.print()}
      aria-label="Print / Save as PDF"
      className="no-print btn-brutal inline-flex items-center gap-2 bg-primary px-5 py-2.5 text-sm text-white"
    >
      Print / Save as PDF <span aria-hidden="true">⎙</span>
    </button>
  );
}
