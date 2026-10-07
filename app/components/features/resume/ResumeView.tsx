import Link from "next/link";
import { resume } from "../../../../lib/resume";
import { socialLinks } from "../../../../lib/site";
import PrintButton from "./PrintButton";
import StatusBadge from "../projects/StatusBadge";

const ResumeSectionTitle = ({
  id,
  number,
  children,
}: {
  id: string;
  number: string;
  children: React.ReactNode;
}) => (
  <h2
    id={id}
    className="mb-3 flex items-center gap-2 pb-2 font-heading text-sm font-extrabold uppercase tracking-wide text-foreground"
  >
    <span className="bg-primary px-1.5 py-0.5 font-mono text-[9px] text-white">
      {number}
    </span>
    {children}
    <span className="h-px flex-1 bg-border" aria-hidden="true" />
  </h2>
);

export default function ResumeView() {
  const nameParts = resume.name.split(" ");

  return (
    <main className="resume-page mx-auto max-w-6xl px-4 pb-12 pt-24 sm:px-6 sm:pb-16 sm:pt-28">
      <header className="grid overflow-hidden border border-border bg-card lg:grid-cols-[1.55fr_0.85fr]">
        <div className="p-5 sm:p-7">
          <p className="mb-3 font-mono text-[8px] uppercase tracking-[0.2em] text-secondary">
            <span className="bg-primary px-1.5 py-1 text-white">
              Resume / 2026
            </span>{" "}
            / Software Engineering
          </p>
          <h1 className="font-heading text-4xl font-black uppercase leading-[0.9] tracking-tight sm:text-5xl lg:text-6xl">
            {nameParts.map((part, index) => (
              <span
                key={part}
                className={index === 0 ? "text-white" : "text-secondary"}
              >
                {index > 0 && " "}
                {part}
              </span>
            ))}
          </h1>
          <p className="mt-3 inline-block bg-primary px-2 py-1 font-mono text-[9px] uppercase tracking-[0.16em] text-white">
            {resume.title}
          </p>
          <div className="mt-4 max-w-3xl space-y-2">
            {resume.summary.map((paragraph) => (
              <p
                key={paragraph}
                className="text-xs leading-relaxed text-muted sm:text-sm"
              >
                {paragraph}
              </p>
            ))}
          </div>
        </div>

        <aside className="border-t border-border bg-surface p-4 sm:p-5 lg:border-l lg:border-t-0">
          <div className="mb-3 flex items-center justify-between gap-3">
            <p className="font-mono text-[8px] uppercase tracking-[0.18em] text-dark-muted">
              Contact / profile
            </p>
            <span className="bg-secondary px-1.5 py-0.5 font-mono text-[8px] font-bold uppercase tracking-wider text-black">
              Open to opportunities
            </span>
          </div>

          <dl className="space-y-2 border-y border-border py-3 text-[10px]">
            <div className="grid grid-cols-[4rem_1fr] gap-2">
              <dt className="font-mono uppercase tracking-widest text-dark-muted">
                Location
              </dt>
              <dd className="text-foreground">{resume.location}</dd>
            </div>
            <div className="grid grid-cols-[4rem_1fr] gap-2">
              <dt className="font-mono uppercase tracking-widest text-dark-muted">
                Website
              </dt>
              <dd>
                <Link
                  href={resume.url}
                  className="inline-flex min-h-6 items-center text-foreground transition-colors hover:text-secondary"
                >
                  novanop.com
                </Link>
              </dd>
            </div>
            {socialLinks.map((link) => (
              <div
                key={link.label}
                className="grid min-w-0 grid-cols-[4rem_1fr] gap-2"
              >
                <dt className="font-mono uppercase tracking-widest text-dark-muted">
                  {link.label}
                </dt>
                <dd className="min-w-0">
                  <a
                    href={link.href}
                    target={
                      link.href.startsWith("mailto") ? undefined : "_blank"
                    }
                    rel="noopener noreferrer"
                    className="inline-flex min-h-6 items-center break-all text-foreground transition-colors hover:text-secondary"
                  >
                    {link.value}
                  </a>
                </dd>
              </div>
            ))}
          </dl>

          <div className="mt-4 flex flex-wrap gap-2">
            <PrintButton />
            <Link
              href="/#contact"
              className="no-print btn-brutal inline-flex items-center gap-2 border-black bg-secondary px-3 py-2 font-mono text-[9px] font-bold uppercase tracking-wider text-black"
            >
              Contact
            </Link>
          </div>
        </aside>
      </header>

      <div className="mt-5 grid items-start gap-5 lg:grid-cols-12">
        <section
          className="resume-section min-w-0 lg:col-span-8"
          aria-labelledby="experience"
        >
          <ResumeSectionTitle id="experience" number="04">
            Professional Experience
          </ResumeSectionTitle>
          <div className="space-y-2">
            {resume.experience.map((exp) => (
              <article
                key={`${exp.company}-${exp.role}`}
                className="resume-entry border border-border bg-card p-3 sm:p-4"
              >
                <div className="flex flex-wrap items-start justify-between gap-x-4 gap-y-1">
                  <div>
                    <h3 className="font-heading text-sm font-extrabold uppercase text-foreground sm:text-base">
                      {exp.company}
                    </h3>
                    <p className="mt-0.5 font-mono text-[8px] uppercase tracking-[0.16em] text-secondary sm:text-[9px]">
                      {exp.role}
                    </p>
                  </div>
                  {exp.period && (
                    <p className="border border-border bg-surface px-2 py-1 font-mono text-[8px] text-muted">
                      {exp.period}
                    </p>
                  )}
                </div>

                <p className="mt-2 text-[10px] leading-relaxed text-muted sm:text-xs">
                  {exp.description}
                </p>

                {exp.areas && (
                  <ul className="mt-2 grid gap-x-3 gap-y-1 text-[9px] leading-relaxed text-foreground/80 sm:grid-cols-2 sm:text-[10px]">
                    {exp.areas.map((area) => (
                      <li key={area} className="flex items-baseline gap-1.5">
                        <span
                          className="shrink-0 text-secondary"
                          aria-hidden="true"
                        >
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
                        className="border border-border bg-surface px-1.5 py-0.5 font-mono text-[8px] text-muted"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                )}
              </article>
            ))}
          </div>
        </section>

        <aside className="space-y-5 lg:col-span-4">
          <section
            className="resume-section border border-border bg-card p-3 sm:p-4"
            aria-labelledby="engineering"
          >
            <ResumeSectionTitle id="engineering" number="05">
              Core Skills &amp; Tools
            </ResumeSectionTitle>
            <dl className="space-y-3">
              {resume.engineering.map((group) => (
                <div key={group.title}>
                  <dt className="mb-1.5 font-mono text-[8px] font-bold uppercase tracking-[0.18em] text-secondary">
                    {group.title}
                  </dt>
                  <dd className="flex flex-wrap gap-1">
                    {group.items.map((item) => (
                      <span
                        key={item}
                        className="border border-border bg-surface px-1.5 py-1 font-mono text-[8px] leading-none text-foreground/85"
                      >
                        {item}
                      </span>
                    ))}
                  </dd>
                </div>
              ))}
            </dl>
          </section>

          <section
            className="resume-section border border-border bg-card p-3 sm:p-4"
            aria-labelledby="education"
          >
            <ResumeSectionTitle id="education" number="06">
              Education
            </ResumeSectionTitle>
            {resume.education.map((edu) => (
              <article key={edu.institution} className="resume-entry">
                <p className="font-heading text-xs font-bold uppercase text-foreground">
                  {edu.institution}
                </p>
                <p className="mt-1 text-[10px] text-muted">{edu.degree}</p>
                <p className="mt-1 font-mono text-[8px] text-secondary">
                  {edu.graduationDate}
                </p>
              </article>
            ))}
          </section>

          <section
            className="resume-section border border-black bg-secondary p-3 text-black sm:p-4"
            aria-labelledby="exploring"
          >
            <p
              id="exploring"
              className="mb-2 font-mono text-[8px] font-bold uppercase tracking-[0.18em]"
            >
              Currently Exploring
            </p>
            <div className="flex flex-wrap gap-1">
              {resume.exploring.map((item) => (
                <span
                  key={item}
                  className="border border-black bg-black px-1.5 py-1 font-mono text-[8px] text-secondary"
                >
                  {item}
                </span>
              ))}
            </div>
          </section>
        </aside>
      </div>

      <section
        className="resume-section mt-6"
        aria-labelledby="selected-production-systems"
      >
        <ResumeSectionTitle id="selected-production-systems" number="07">
          Selected Production Systems
        </ResumeSectionTitle>
        <div className="grid gap-2 sm:grid-cols-2">
          {resume.selectedWork.map((project) => (
            <Link
              key={project.slug}
              href={`/work/${project.slug}`}
              className="group border border-border bg-card p-3 transition-colors hover:border-secondary sm:p-4"
            >
              <div className="flex flex-wrap items-center justify-between gap-2">
                <StatusBadge status={project.status} />
                <span className="font-mono text-[8px] uppercase tracking-widest text-dark-muted">
                  {project.category}
                </span>
              </div>
              <h3 className="mt-2 font-heading text-xs font-extrabold uppercase text-foreground transition-colors group-hover:text-secondary sm:text-sm">
                {project.title}
              </h3>
              <p className="mt-1 line-clamp-2 text-[9px] leading-relaxed text-muted sm:text-[10px]">
                {project.description}
              </p>
              <div className="mt-2 flex flex-wrap gap-1">
                {project.stack.slice(0, 4).map((tech) => (
                  <span
                    key={tech}
                    className="border border-border bg-surface px-1 py-0.5 font-mono text-[8px] text-foreground/80"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </Link>
          ))}
        </div>
      </section>

      <section className="no-print mt-6 border-y border-border bg-primary text-white">
        <div className="grid gap-4 px-4 py-5 sm:px-6 md:grid-cols-[1fr_auto] md:items-center">
          <div>
            <p className="font-mono text-[8px] uppercase tracking-[0.18em] text-white">
              Open to opportunities
            </p>
            <h2 className="mt-1 font-heading text-lg font-black uppercase leading-tight sm:text-xl">
              A product, a system, or a challenging engineering role?
            </h2>
            <p className="mt-1 text-[10px] leading-relaxed text-white/90">
              {resume.closing}
            </p>
          </div>
          <Link
            href="/#contact"
            className="btn-brutal inline-flex w-fit items-center gap-2 border-black bg-secondary px-3 py-2.5 font-mono text-[9px] font-bold uppercase tracking-widest text-black"
          >
            Send inquiry
          </Link>
        </div>
      </section>
    </main>
  );
}
