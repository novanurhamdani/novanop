import type { Metadata } from "next";
import Image from "next/image";
import SectionHeading from "../components/layout/SectionHeading";
import { experience } from "../../lib/experience";
import { journey } from "../../lib/journey";
import { capabilityGroups } from "../../lib/capabilities";

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

export default function AboutPage() {
  return (
    <main className="container mx-auto px-5 sm:px-6 pt-28 sm:pt-36 pb-20">
      <SectionHeading eyebrow="About" title="The person behind the code." />

      {/* Bio + photo */}
      <div className="grid items-start gap-10 md:grid-cols-12">
        <div className="md:col-span-4" data-reveal>
          <div className="relative mx-auto aspect-square w-48 sm:w-56 md:w-full md:max-w-xs overflow-hidden border border-border">
            <Image
              src="/images/photo-real.png"
              alt="Nova Nurhamdani"
              fill
              className="object-cover"
            />
          </div>
          <p className="mt-3 text-center font-mono text-[10px] uppercase tracking-[0.2em] text-muted/60">
            the human behind the alchemist
          </p>
        </div>

        <div
          className="md:col-span-8 space-y-5 text-foreground/85 leading-relaxed max-w-2xl"
          data-reveal
        >
          <p>
            My path into software wasn&apos;t a straight line. I started
            programming in 2009, then spent years inside information systems,
            internal audit, and financial operations - including managing a
            35-person audit team - before returning to code in 2021.
          </p>
          <p>
            That detour turned out to be the useful part. Coming back through
            frontend taught me how people actually interact with software, and
            working inside production financial and payment systems showed me
            where the real problems live - the workflows behind the screen: API
            contracts, data models, operational edge cases.
          </p>
          <p>
            So the direction has been a deliberate move inward: frontend to
            product engineering to APIs to data to architecture. These days I
            build full-stack - Next.js and TypeScript on the surface, Go and
            PostgreSQL underneath - and I take the backend as seriously as the
            interface.
          </p>
          <p>
            The Code Alchemist persona stuck around from an earlier version of
            this site. It still fits: I like systems that feel like magic on the
            surface and behave like clockwork underneath.
          </p>
        </div>
      </div>

      {/* Experience */}
      <div className="mt-24">
        <h2
          className="font-heading font-extrabold text-2xl sm:text-3xl mb-8"
          data-reveal
        >
          Real world experience
        </h2>
        <div className="border-t border-border">
          {experience.map((exp) => (
            <article
              key={`${exp.company}-${exp.role}`}
              data-reveal
              className="grid gap-4 border-b border-border py-6 sm:grid-cols-12"
            >
              <div className="sm:col-span-3">
                <h3 className="font-heading font-extrabold text-lg uppercase tracking-wide">
                  {exp.company}
                </h3>
                <p className="mt-1 font-mono text-xs uppercase tracking-[0.18em] text-secondary">
                  {exp.role}
                </p>
              </div>
              <p className="sm:col-span-5 text-sm text-foreground/85 leading-relaxed">
                {exp.description}
              </p>
              {exp.areas && (
                <ul className="sm:col-span-4 space-y-1 text-sm text-muted">
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
              )}
            </article>
          ))}
        </div>
      </div>

      {/* Journey + capabilities */}
      <div className="mt-24 grid gap-16 lg:grid-cols-2">
        <div>
          <h2
            className="font-heading font-extrabold text-2xl sm:text-3xl mb-8"
            data-reveal
          >
            Journey
          </h2>
          <ol className="relative ml-2 border-l-2 border-border pl-8 space-y-6">
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
                      ? "font-extrabold text-lg"
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

        <div>
          <h2
            className="font-heading font-extrabold text-2xl sm:text-3xl mb-8"
            data-reveal
          >
            Tools in the workshop
          </h2>
          <div className="grid gap-8 sm:grid-cols-2">
            {capabilityGroups.map((group) => (
              <div
                key={group.title}
                data-reveal
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
    </main>
  );
}
