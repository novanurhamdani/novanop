import { journey } from "../../../../lib/journey";
import SectionHeading from "../../layout/SectionHeading";

/**
 * Compact evolution timeline - communicates direction, not a full CV.
 * The full career history belongs on the resume.
 */
export default function Journey() {
  return (
    <section
      id="journey"
      data-section="journey"
      className="border-t border-border/60"
    >
      <div className="container mx-auto px-5 sm:px-6 py-20 sm:py-28">
        <SectionHeading
          eyebrow="Journey"
          title="From writing code to building systems."
        />

        <ol className="relative ml-2 max-w-2xl border-l-2 border-border pl-8 space-y-8">
          {journey.map((milestone, index) => (
            <li key={index} className="relative" data-reveal>
              <span
                className={`absolute -left-[41px] top-1 h-4 w-4 rounded-full border-2 ${
                  milestone.year
                    ? "border-secondary bg-secondary/20"
                    : "border-primary/60 bg-primary/15"
                }`}
                aria-hidden="true"
              />
              {milestone.year && (
                <span className="font-mono text-xs tracking-[0.2em] text-secondary">
                  {milestone.year}
                </span>
              )}
              <p
                className={`font-heading ${
                  milestone.year
                    ? "font-extrabold text-lg sm:text-xl"
                    : "font-bold text-base text-foreground/85"
                }`}
              >
                {milestone.label}
              </p>
              {milestone.description && (
                <p className="mt-1 text-sm text-muted leading-relaxed">
                  {milestone.description}
                </p>
              )}
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
