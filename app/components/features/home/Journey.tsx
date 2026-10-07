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
      className="border-t border-border bg-background"
    >
      <div className="mx-auto max-w-6xl px-4 py-14 sm:px-6 sm:py-16">
        <SectionHeading
          eyebrow="Journey"
          number="06"
          title="From writing code to building systems."
          compact
        />

        <ol className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
          {journey.map((milestone, index) => (
            <li
              key={index}
              className="relative border border-border bg-card p-4"
              data-reveal
            >
              <span
                className={`mb-3 block h-2 w-2 ${
                  milestone.year ? "bg-secondary" : "bg-primary"
                }`}
                aria-hidden="true"
              />
              {milestone.year && (
                <span className="font-mono text-[10px] tracking-[0.2em] text-secondary">
                  {milestone.year}
                </span>
              )}
              <p
                className={`font-heading ${
                  milestone.year
                    ? "font-extrabold text-base sm:text-lg"
                    : "font-bold text-sm text-foreground/85"
                }`}
              >
                {milestone.label}
              </p>
              {milestone.description && (
                <p className="mt-2 text-xs leading-relaxed text-muted">
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
