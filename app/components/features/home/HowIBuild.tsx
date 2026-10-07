import { buildFlow, capabilityGroups } from "../../../../lib/capabilities";
import SectionHeading from "../../layout/SectionHeading";

export default function HowIBuild() {
  const exploring = capabilityGroups.find(
    (group) => group.title === "Currently Exploring",
  );
  const coreGroups = capabilityGroups.filter(
    (group) => group.title !== "Currently Exploring",
  );

  return (
    <section
      id="how-i-build"
      data-section="how-i-build"
      className="border-t border-border bg-background"
    >
      <div className="mx-auto max-w-6xl px-4 py-14 sm:px-6 sm:py-16">
        <SectionHeading
          eyebrow="How I Build"
          number="04"
          title="I don't just build interfaces. I build the system around them."
          compact
        />

        <div className="grid gap-3 lg:grid-cols-12">
          <div className="grid gap-3 sm:grid-cols-2 lg:col-span-8">
            {coreGroups.map((group, index) => (
              <article
                key={group.title}
                data-reveal
                className="border border-border bg-card p-4 sm:p-5"
              >
                <div className="flex items-center gap-2">
                  <span
                    className={`h-2 w-2 ${
                      index % 2 === 0 ? "bg-primary" : "bg-secondary"
                    }`}
                    aria-hidden="true"
                  />
                  <h3 className="font-mono text-[10px] font-bold uppercase tracking-[0.2em] text-foreground">
                    {group.title}
                  </h3>
                </div>
                <ul className="mt-4 flex flex-wrap gap-1.5">
                  {group.items.map((item) => (
                    <li
                      key={item}
                      className="border border-border bg-surface px-2 py-1 font-mono text-[9px] text-muted sm:text-[10px]"
                    >
                      {item}
                    </li>
                  ))}
                </ul>
              </article>
            ))}
          </div>

          {exploring && (
            <aside
              data-reveal
              className="relative flex flex-col justify-between overflow-hidden border-2 border-black bg-secondary p-5 text-black sm:p-6 lg:col-span-4"
            >
              <span
                className="absolute -right-5 -top-7 h-24 w-24 rotate-45 border-8 border-black/10"
                aria-hidden="true"
              />
              <div>
                <p className="font-mono text-[9px] font-bold uppercase tracking-[0.2em]">
                  In the workshop / 04
                </p>
                <h3 className="mt-4 max-w-xs font-heading text-2xl font-black uppercase leading-[0.9] tracking-tight sm:text-3xl">
                  Currently exploring.
                </h3>
              </div>
              <ul className="relative mt-8 flex flex-wrap gap-2">
                {exploring.items.map((item) => (
                  <li
                    key={item}
                    className="border border-black bg-black px-2.5 py-1.5 font-mono text-[10px] font-bold text-secondary"
                  >
                    {item}
                  </li>
                ))}
              </ul>
            </aside>
          )}
        </div>

        <div
          className="mt-8 border border-border bg-surface p-4 sm:p-5"
          data-reveal
        >
          <div className="mb-4 flex flex-wrap items-end justify-between gap-3">
            <h3 className="font-heading text-lg font-extrabold uppercase tracking-tight sm:text-xl">
              From problem to deployment
            </h3>
            <p className="font-mono text-[9px] uppercase tracking-[0.18em] text-dark-muted">
              Product engineering / workflow
            </p>
          </div>
          <ol className="grid grid-cols-2 gap-2 sm:grid-cols-3 lg:grid-cols-6">
            {buildFlow.map((step, index) => (
              <li
                key={step}
                className="flex min-w-0 items-center gap-2 border border-border bg-card px-2.5 py-2.5"
              >
                <span className="bg-primary px-1.5 py-0.5 font-mono text-[9px] font-bold text-white">
                  {String(index + 1).padStart(2, "0")}
                </span>
                <span className="font-heading text-xs font-bold sm:text-sm">
                  {step}
                </span>
              </li>
            ))}
          </ol>
        </div>
      </div>
    </section>
  );
}
