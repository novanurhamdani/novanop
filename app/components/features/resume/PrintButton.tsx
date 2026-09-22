"use client";

/** Browser-native print → Save as PDF. Hidden from print output. */
export default function PrintButton() {
  return (
    <button
      type="button"
      onClick={() => window.print()}
      aria-label="Print or save resume as PDF"
      className="no-print inline-flex items-center gap-2 border border-border px-5 py-2.5 text-sm font-semibold text-foreground transition-all duration-300 hover:border-secondary hover:text-secondary"
    >
      Print / Save as PDF <span aria-hidden="true">⎙</span>
    </button>
  );
}
