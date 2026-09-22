import { buildFlow, capabilityGroups } from "../../../../lib/capabilities";
import SectionHeading from "../../layout/SectionHeading";

export default function HowIBuild() {
  return (
    <section
      id="how-i-build"
      data-section="how-i-build"
      className="border-t border-border/60"
    >
      <div className="container mx-auto px-5 sm:px-6 py-20 sm:py-28">
        <SectionHeading
          eyebrow="How I Build"
          title="I don't just build interfaces. I build the system around them."
        />

        {/* Build flow: problem → deployment */}
        <ol
          className="flex flex-col sm:flex-row sm:flex-wrap lg:flex-nowrap items-stretch gap-3 sm:gap-0"
          data-reveal
        >
          {buildFlow.map((step, index) => (
            <li
              key={step}
              className="flex flex-col sm:flex-row sm:flex-1 items-stretch sm:items-center gap-2 sm:gap-0"
            >
              <div className="flex flex-1 items-center gap-3 border border-border bg-surface px-4 py-3 sm:min-w-0">
                <span className="font-mono text-[10px] text-secondary tracking-widest">
                  {String(index + 1).padStart(2, "0")}
                </span>
                <span className="font-heading font-bold text-sm sm:text-base whitespace-nowrap">
                  {step}
                </span>
              </div>
              {index < buildFlow.length - 1 && (
                <>
                  <span
                    className="sm:hidden self-center text-muted/60 font-mono"
                    aria-hidden="true"
                  >
                    ↓
                  </span>
                  <span
                    className="hidden sm:inline-block px-2 text-muted/60 font-mono"
                    aria-hidden="true"
                  >
                    →
                  </span>
                </>
              )}
            </li>
          ))}
        </ol>

        {/* Capability groups - tools in the workshop */}
        <div className="mt-16 sm:mt-20" data-reveal>
          <p className="font-mono text-[10px] uppercase tracking-[0.25em] text-muted/70 mb-8">
            Tools in the workshop
          </p>
          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-5">
            {capabilityGroups.map((group) => (
              <div
                key={group.title}
                className={`border-t-2 pt-4 ${
                  group.title === "Currently Exploring"
                    ? "border-secondary"
                    : "border-primary/60"
                }`}
              >
                <h3 className="font-mono text-xs uppercase tracking-[0.2em] text-foreground mb-4">
                  {group.title}
                </h3>
                <ul className="space-y-2 text-sm text-muted">
                  {group.items.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
