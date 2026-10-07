import { experience } from "../../../../lib/experience";
import SectionHeading from "../../layout/SectionHeading";

/**
 * Editorial rows rather than cards - professional evidence,
 * no confidential details, no fabricated UI.
 */
export default function RealWorldExperience() {
  return (
    <section
      id="experience"
      data-section="experience"
      className="border-t border-border bg-background"
    >
      <div className="mx-auto max-w-6xl px-4 py-14 sm:px-6 sm:py-16">
        <SectionHeading
          eyebrow="Real World Experience"
          number="03"
          title="Built in the real world."
          intro="Experience across production software, financial operations, business systems, and web applications."
          compact
        />

        <div className="border-t border-border">
          {experience.map((exp, index) => (
            <article
              key={`${exp.company}-${exp.role}`}
              data-reveal
              className="grid gap-4 border-b border-border py-5 sm:gap-6 sm:py-6 md:grid-cols-12"
            >
              <div
                className={`md:col-span-3 border-l-2 pl-3 ${
                  index % 2 === 0 ? "border-primary" : "border-secondary"
                }`}
              >
                <h3 className="font-heading text-lg font-extrabold uppercase tracking-wide sm:text-xl">
                  {exp.company}
                </h3>
                <p className="mt-1 font-mono text-[10px] uppercase tracking-[0.15em] text-secondary sm:text-[11px]">
                  {exp.role}
                </p>
                {exp.period && (
                  <p className="mt-1 font-mono text-[10px] text-muted">
                    {exp.period}
                  </p>
                )}
              </div>

              <div className="md:col-span-5">
                <p className="text-sm leading-relaxed text-foreground/85">
                  {exp.description}
                </p>
                {exp.stack && (
                  <div className="mt-3 flex flex-wrap gap-1.5">
                    {exp.stack.map((tech) => (
                      <span
                        key={tech}
                        className="border border-border bg-surface px-1.5 py-0.5 font-mono text-[9px] text-foreground/75"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                )}
              </div>

              {exp.areas && (
                <div className="md:col-span-4">
                  <p className="mb-2 font-mono text-[9px] uppercase tracking-[0.22em] text-dark-muted">
                    Areas
                  </p>
                  <ul className="flex flex-wrap gap-1.5 text-[10px] text-muted">
                    {exp.areas.map((area) => (
                      <li
                        key={area}
                        className="border border-border/80 px-1.5 py-1"
                      >
                        {area}
                      </li>
                    ))}
                  </ul>
                </div>
              )}
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
