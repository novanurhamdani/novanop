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
      className="border-t border-border/60"
    >
      <div className="container mx-auto px-5 sm:px-6 py-20 sm:py-28">
        <SectionHeading
          eyebrow="Real World Experience"
          title="Built in the real world."
          intro="Experience across production software, financial operations, business systems, and web applications."
        />

        <div className="border-t border-border">
          {experience.map((exp) => (
            <article
              key={`${exp.company}-${exp.role}`}
              data-reveal
              className="grid gap-6 border-b border-border py-8 sm:py-10 md:grid-cols-12"
            >
              <div className="md:col-span-3">
                <h3 className="font-heading font-extrabold text-xl sm:text-2xl uppercase tracking-wide">
                  {exp.company}
                </h3>
                <p className="mt-2 font-mono text-xs uppercase tracking-[0.18em] text-secondary">
                  {exp.role}
                </p>
                {exp.period && (
                  <p className="mt-1 font-mono text-[11px] text-muted">
                    {exp.period}
                  </p>
                )}
              </div>

              <div className="md:col-span-5">
                <p className="text-foreground/85 leading-relaxed">
                  {exp.description}
                </p>
                {exp.stack && (
                  <div className="mt-4 flex flex-wrap gap-2">
                    {exp.stack.map((tech) => (
                      <span
                        key={tech}
                        className="border border-border/70 px-2 py-0.5 font-mono text-[11px] text-foreground/75"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                )}
              </div>

              {exp.areas && (
                <div className="md:col-span-4">
                  <p className="font-mono text-[10px] uppercase tracking-[0.22em] text-muted/70 mb-3">
                    Areas
                  </p>
                  <ul className="space-y-1.5 text-sm text-muted">
                    {exp.areas.map((area) => (
                      <li key={area} className="flex items-baseline gap-2">
                        <span
                          className="text-secondary/70 text-xs"
                          aria-hidden="true"
                        >
                          ▸
                        </span>
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
