import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { capabilityGroups } from "../../lib/capabilities";
import { experience } from "../../lib/experience";
import { journey } from "../../lib/journey";
import { site } from "../../lib/site";

export const metadata: Metadata = {
  title: "About Nova Nurhamdani | Software Engineer",
  description:
    "About Nova Nurhamdani, a software engineer focused on frontend, product engineering, backend systems, and building software.",
  alternates: { canonical: "/about" },
  openGraph: {
    title: "About Nova Nurhamdani | Software Engineer",
    description:
      "About Nova Nurhamdani, a software engineer focused on frontend, product engineering, and backend systems.",
    type: "website",
    url: "/about",
  },
};

const AboutSectionTitle = ({
  id,
  number,
  eyebrow,
  title,
  highlight,
  level = "h2",
}: {
  id: string;
  number: string;
  eyebrow: string;
  title: string;
  highlight?: string;
  level?: "h1" | "h2";
}) => {
  const Heading = level;
  const heroTitle = level === "h1";
  return (
    <div className="mb-5">
      <p className="flex flex-wrap items-center gap-2 font-mono text-[9px] uppercase tracking-[0.2em] text-secondary">
        <span
          className={`px-1.5 py-1 ${
            heroTitle ? "bg-secondary text-black" : "bg-primary text-white"
          }`}
        >
          {number}
        </span>
        {eyebrow}
      </p>
      <Heading
        id={id}
        className={`mt-3 max-w-5xl font-heading font-black uppercase leading-[0.84] tracking-[-0.04em] text-foreground ${
          heroTitle
            ? "text-[clamp(2.35rem,7.6vw,5.5rem)] sm:text-6xl lg:text-7xl"
            : "text-3xl sm:text-4xl"
        }`}
      >
        {heroTitle ? (
          <>
            <span className="block">{title}</span>
            {highlight && (
              <span className="block text-secondary">{highlight}</span>
            )}
          </>
        ) : (
          <>
            {title}{" "}
            {highlight && <span className="text-secondary">{highlight}</span>}
          </>
        )}
      </Heading>
    </div>
  );
};

export default function AboutPage() {
  return (
    <main className="mx-auto max-w-6xl px-4 pb-12 pt-24 sm:px-6 sm:pb-16 sm:pt-28">
      <section aria-labelledby="about-title">
        <AboutSectionTitle
          id="about-title"
          number="About // Identity"
          eyebrow="// The person behind the code"
          title="The person"
          highlight="behind the code."
          level="h1"
        />

        <div className="grid overflow-hidden border border-border bg-card lg:grid-cols-[19rem_minmax(0,1fr)]">
          <div className="min-w-0 border-b border-border bg-black lg:border-b-0 lg:border-r">
            <div className="flex items-center justify-between gap-3 border-b border-border px-3 py-2 font-mono text-[9px] uppercase tracking-[0.16em]">
              <span className="text-dark-muted">Telemetry ID</span>
              <span className="text-secondary">NOVA_NURHAMDANI</span>
            </div>
            <figure className="relative aspect-[4/5] overflow-hidden bg-neutral-300">
              <Image
                src="/images/photo-new.png"
                alt="Nova Nurhamdani"
                fill
                sizes="(max-width: 1024px) 100vw, 19rem"
                className="object-cover object-center grayscale"
                unoptimized
                priority
              />
              <figcaption className="absolute bottom-3 left-3 border border-black bg-black/90 px-2 py-1 font-mono text-[8px] uppercase tracking-widest text-white">
                <span className="mr-2 text-secondary">Role:</span>
                Full-stack engineer
              </figcaption>
              <span
                className="absolute bottom-4 right-3 h-2 w-2 bg-primary"
                aria-hidden="true"
              />
            </figure>
            <dl className="grid grid-cols-2 gap-x-3 gap-y-2 p-3">
              <div className="flex items-baseline justify-between gap-2">
                <dt className="font-mono text-[8px] uppercase tracking-wider text-dark-muted">
                  Hometown
                </dt>
                <dd className="text-[9px] font-bold text-foreground">
                  {site.location}
                </dd>
              </div>
              <div className="flex items-baseline justify-between gap-2">
                <dt className="font-mono text-[8px] uppercase tracking-wider text-dark-muted">
                  First role
                </dt>
                <dd className="text-[9px] font-bold text-secondary">
                  Jun 2009
                </dd>
              </div>
              <div className="flex items-baseline justify-between gap-2">
                <dt className="font-mono text-[8px] uppercase tracking-wider text-dark-muted">
                  Core focus
                </dt>
                <dd className="text-[9px] font-bold text-foreground">
                  Product systems
                </dd>
              </div>
              <div className="flex items-baseline justify-between gap-2">
                <dt className="font-mono text-[8px] uppercase tracking-wider text-dark-muted">
                  Status
                </dt>
                <dd className="bg-primary px-1.5 py-0.5 font-mono text-[8px] font-bold uppercase text-white">
                  Open to opportunities
                </dd>
              </div>
            </dl>
          </div>

          <div className="min-w-0 p-4 sm:p-6 lg:p-7">
            <div className="flex flex-wrap items-center gap-2">
              <span className="bg-primary px-1.5 py-1 font-mono text-[9px] font-bold uppercase tracking-widest text-white">
                Origin story
              </span>
              <span className="font-mono text-[8px] uppercase tracking-[0.15em] text-dark-muted">
                {"// From code to internal audit, and back"}
              </span>
            </div>

            <p className="mt-4 text-sm font-bold leading-relaxed text-foreground sm:text-base">
              My path into software wasn&apos;t a straight line. I started
              programming in 2009, then spent years inside information systems,
              internal audit, and financial operations - including managing a{" "}
              <span className="text-secondary">35-person audit team</span> -
              before returning to code in 2021.
            </p>

            <p className="mt-3 text-xs leading-relaxed text-muted sm:text-sm">
              That detour turned out to be the useful part. Coming back through
              frontend taught me how people actually interact with software, and
              working inside production financial and payment systems showed me
              where the real problems live - the workflows behind the screen:
              API contracts, data models, operational edge cases.
            </p>

            <div className="mt-4 grid gap-2 sm:grid-cols-2">
              <article className="border border-border bg-black p-3 sm:p-4">
                <div className="flex items-center justify-between gap-2 border-b border-border pb-2">
                  <p className="font-mono text-[8px] uppercase tracking-[0.16em] text-dark-muted">
                    01 / Direction
                  </p>
                  <span className="font-mono text-[8px] font-bold uppercase text-secondary">
                    Deliberate
                  </span>
                </div>
                <h2 className="mt-3 font-heading text-sm font-extrabold uppercase text-foreground">
                  Deliberate move inward
                </h2>
                <p className="mt-2 text-sm leading-relaxed text-muted">
                  So the direction has been a deliberate move inward: frontend
                  to product engineering to APIs to data to architecture. These
                  days I build full-stack - Next.js and TypeScript on the
                  surface, Go and PostgreSQL underneath - and I take the backend
                  as seriously as the interface.
                </p>
              </article>
              <article className="border border-border bg-black p-3 sm:p-4">
                <div className="flex items-center justify-between gap-2 border-b border-border pb-2">
                  <p className="font-mono text-[8px] uppercase tracking-[0.16em] text-dark-muted">
                    02 / Alchemist
                  </p>
                  <span className="bg-primary px-1.5 py-0.5 font-mono text-[8px] font-bold uppercase text-white">
                    Clockwork
                  </span>
                </div>
                <h2 className="mt-3 font-heading text-sm font-extrabold uppercase text-foreground">
                  The Code Alchemist
                </h2>
                <p className="mt-2 text-sm leading-relaxed text-muted">
                  The Code Alchemist persona stuck around from an earlier
                  version of this site. It still fits: I like systems that feel
                  like magic on the surface and behave like clockwork
                  underneath.
                </p>
              </article>
            </div>

            <dl className="mt-3 grid grid-cols-2 gap-1.5 sm:grid-cols-4">
              {[
                {
                  label: "Programming",
                  value: "Since 2009",
                  tone: "text-foreground",
                },
                {
                  label: "Audit leadership",
                  value: "35 staff",
                  tone: "text-secondary",
                },
                {
                  label: "Backend runtime",
                  value: "Go",
                  tone: "text-secondary",
                },
                {
                  label: "Database engine",
                  value: "PostgreSQL",
                  tone: "text-foreground",
                },
              ].map((item) => (
                <div
                  key={item.label}
                  className="border border-border bg-surface p-2"
                >
                  <dt className="font-mono text-[8px] uppercase tracking-wider text-dark-muted sm:text-[9px]">
                    {item.label}
                  </dt>
                  <dd
                    className={`mt-1 font-heading text-xs font-extrabold uppercase sm:text-sm ${item.tone}`}
                  >
                    {item.value}
                  </dd>
                </div>
              ))}
            </dl>
          </div>
        </div>
      </section>

      <section
        className="mt-8 border-t border-border pt-6"
        aria-labelledby="journey-title"
      >
        <AboutSectionTitle
          id="journey-title"
          number="02"
          eyebrow="Career trajectory"
          title="From writing code"
          highlight="to building systems."
        />

        <ol className="space-y-2">
          {journey.map((milestone, index) => (
            <li
              key={`${milestone.year}-${milestone.label}`}
              className="grid gap-2 border border-border bg-card p-3.5 sm:grid-cols-[7rem_14rem_minmax(0,1fr)] sm:items-center sm:gap-4 sm:p-4"
            >
              <span className="w-fit bg-black px-1.5 py-1 font-mono text-[10px] font-bold tracking-wider text-secondary">
                {milestone.year ?? `STEP ${String(index + 1).padStart(2, "0")}`}
              </span>
              <h3 className="font-heading text-sm font-extrabold uppercase text-foreground">
                {milestone.label}
              </h3>
              {milestone.description && (
                <p className="text-xs leading-relaxed text-muted sm:text-sm">
                  {milestone.description}
                </p>
              )}
            </li>
          ))}
        </ol>
      </section>

      <section
        className="mt-8 border-t border-border pt-6"
        aria-labelledby="experience-title"
      >
        <AboutSectionTitle
          id="experience-title"
          number="03"
          eyebrow="Professional record"
          title="Real world"
          highlight="experience."
        />

        <div className="space-y-2">
          {experience.map((exp) => (
            <article
              key={`${exp.company}-${exp.role}`}
              className="grid gap-3 border border-border bg-card p-3.5 sm:grid-cols-12 sm:gap-4 sm:p-4"
            >
              <div className="sm:col-span-3">
                <h3 className="font-heading text-sm font-extrabold uppercase text-foreground sm:text-base">
                  {exp.company}
                </h3>
                <p className="mt-1 font-mono text-[9px] uppercase tracking-[0.15em] text-secondary sm:text-[10px]">
                  {exp.role}
                </p>
                {exp.period && (
                  <p className="mt-1 font-mono text-[9px] text-dark-muted">
                    {exp.period}
                  </p>
                )}
              </div>

              <div className="sm:col-span-9">
                <p className="text-xs leading-relaxed text-foreground/85 sm:text-sm">
                  {exp.description}
                </p>
                {exp.areas && (
                  <ul className="mt-2 grid gap-x-4 gap-y-1 text-[11px] leading-relaxed text-muted sm:grid-cols-2 sm:text-xs">
                    {exp.areas.map((area) => (
                      <li key={area} className="flex items-baseline gap-1.5">
                        <span className="text-secondary" aria-hidden="true">
                          ▸
                        </span>
                        {area}
                      </li>
                    ))}
                  </ul>
                )}
                {exp.stack && (
                  <div className="mt-2 flex flex-wrap gap-1 border-t border-border pt-2">
                    {exp.stack.map((tech) => (
                      <span
                        key={tech}
                        className="border border-border bg-surface px-1.5 py-1 font-mono text-[9px] text-muted"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                )}
              </div>
            </article>
          ))}
        </div>
      </section>

      <section
        className="mt-8 border-t border-border pt-6"
        aria-labelledby="tools-title"
      >
        <div className="flex flex-wrap items-end justify-between gap-3">
          <AboutSectionTitle
            id="tools-title"
            number="04"
            eyebrow="Capabilities / Stack"
            title="Tools in the"
            highlight="workshop."
          />
          <span className="mb-5 font-mono text-[8px] uppercase tracking-widest text-dark-muted">
            Core skills &amp; tools
          </span>
        </div>

        <div className="grid gap-2 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5">
          {capabilityGroups.map((group) => {
            const exploring = group.title === "Currently Exploring";
            return (
              <article
                key={group.title}
                className={`border p-3 ${
                  exploring
                    ? "border-black bg-secondary text-black"
                    : "border-border bg-card"
                }`}
              >
                <h3
                  className={`mb-2 font-mono text-[9px] font-bold uppercase tracking-[0.17em] sm:text-[10px] ${
                    exploring ? "text-black" : "text-secondary"
                  }`}
                >
                  {group.title}
                </h3>
                <ul className="flex flex-wrap gap-1">
                  {group.items.map((item) => (
                    <li
                      key={item}
                      className={`border px-1.5 py-1 font-mono text-[9px] sm:text-[10px] ${
                        exploring
                          ? "border-black bg-black text-secondary"
                          : "border-border bg-surface text-foreground/85"
                      }`}
                    >
                      {item}
                    </li>
                  ))}
                </ul>
              </article>
            );
          })}
        </div>
      </section>

      <section className="mt-8 border-y border-border bg-primary text-white">
        <div className="grid gap-4 px-4 py-5 sm:px-6 sm:py-6 md:grid-cols-[1fr_auto] md:items-center">
          <div>
            <p className="font-mono text-[9px] uppercase tracking-[0.18em] text-white">
              Open to opportunities / Product engineering
            </p>
            <h2 className="mt-2 max-w-2xl font-heading text-2xl font-black uppercase leading-[0.9] sm:text-3xl">
              Have a product, system, or challenging engineering role?
            </h2>
            <p className="mt-2 max-w-xl text-xs leading-relaxed text-white sm:text-sm">
              Open to interesting software engineering opportunities.
            </p>
          </div>
          <div className="flex flex-wrap gap-2">
            <Link
              href="/#contact"
              className="btn-brutal inline-flex items-center gap-2 border-black bg-secondary px-3 py-2.5 font-mono text-[9px] font-bold uppercase tracking-widest text-black"
            >
              Start a conversation
            </Link>
            <Link
              href="/work"
              className="btn-brutal inline-flex items-center gap-2 border-black bg-black px-3 py-2.5 font-mono text-[9px] font-bold uppercase tracking-widest text-white"
            >
              See my work
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
