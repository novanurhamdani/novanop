import type { Metadata } from "next";
import { resume } from "../../lib/resume";
import { socialLinks } from "../../lib/site";
import PrintButton from "../components/features/resume/PrintButton";

export const metadata: Metadata = {
  title: "Nova Nurhamdani - Resume | Software Engineer",
  description:
    "Resume of Nova Nurhamdani, a frontend-heavy full-stack software engineer building products, interfaces, and the systems behind them.",
  alternates: { canonical: "/resume" },
  openGraph: {
    title: "Nova Nurhamdani - Resume | Software Engineer",
    description:
      "Resume of Nova Nurhamdani, a frontend-heavy full-stack software engineer.",
    type: "website",
    url: "/resume",
  },
};

function SectionTitle({
  id,
  children,
}: {
  id: string;
  children: React.ReactNode;
}) {
  return (
    <h2 id={id} className="eyebrow flex items-center gap-4">
      {children}
      <span className="h-px flex-1 bg-border" aria-hidden="true" />
    </h2>
  );
}

export default function ResumePage() {
  return (
    <main className="resume-page container mx-auto max-w-4xl px-5 sm:px-6 pt-28 sm:pt-32 pb-20">
      {/* ── Header ──────────────────────────────────────────────── */}
      <header className="flex flex-wrap items-start justify-between gap-6">
        <div>
          <h1 className="font-heading font-black text-3xl sm:text-5xl tracking-tight uppercase">
            {resume.name}
          </h1>
          <p className="mt-2 font-heading font-bold text-lg sm:text-xl text-primary">
            {resume.title}
          </p>
          <p className="mt-4 flex flex-wrap gap-x-4 gap-y-1 font-mono text-xs sm:text-sm text-muted">
            <span>{resume.location}</span>
            <span aria-hidden="true">·</span>
            <a
              href={resume.url}
              className="hover:text-secondary transition-colors"
            >
              novanop.com
            </a>
            {socialLinks.map((link) => (
              <span key={link.label} className="contents">
                <span aria-hidden="true">·</span>
                <a
                  href={link.href}
                  target={link.href.startsWith("mailto") ? undefined : "_blank"}
                  rel="noopener noreferrer"
                  aria-label={link.ariaLabel}
                  className="hover:text-secondary transition-colors"
                >
                  {link.label}
                </a>
              </span>
            ))}
          </p>
        </div>
        <PrintButton />
      </header>

      {/* ── Summary ─────────────────────────────────────────────── */}
      <section className="resume-section mt-12" aria-labelledby="summary">
        <SectionTitle id="summary">Summary</SectionTitle>
        <div className="mt-5 max-w-2xl space-y-3">
          {resume.summary.map((paragraph) => (
            <p key={paragraph} className="text-foreground/85 leading-relaxed">
              {paragraph}
            </p>
          ))}
        </div>
      </section>

      {/* ── Experience ──────────────────────────────────────────── */}
      <section className="resume-section mt-12" aria-labelledby="experience">
        <SectionTitle id="experience">Experience</SectionTitle>
        <div className="mt-6 space-y-8">
          {resume.experience.map((exp) => (
            <article
              key={`${exp.company}-${exp.role}`}
              className="resume-entry"
            >
              <div className="flex flex-wrap items-baseline justify-between gap-x-6 gap-y-1">
                <h3 className="font-heading font-extrabold text-lg sm:text-xl">
                  {exp.company}
                </h3>
                {exp.period && (
                  <p className="font-mono text-xs text-muted">{exp.period}</p>
                )}
              </div>
              <p className="mt-1 font-mono text-xs uppercase tracking-[0.18em] text-secondary">
                {exp.role}
              </p>
              <p className="mt-3 max-w-2xl text-sm text-foreground/85 leading-relaxed">
                {exp.description}
              </p>
              {exp.areas && (
                <ul className="mt-3 grid gap-1.5 sm:grid-cols-2 text-sm text-muted">
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
              {exp.stack && (
                <p className="mt-3 font-mono text-xs text-muted/80">
                  {exp.stack.join(" · ")}
                </p>
              )}
            </article>
          ))}
        </div>
      </section>

      {/* ── Selected work + Engineering ─────────────────────────── */}
      <div className="mt-12 grid gap-10 md:grid-cols-2">
        <section className="resume-section" aria-labelledby="selected-work">
          <SectionTitle id="selected-work">Selected Work</SectionTitle>
          <ul className="mt-6 space-y-5">
            {resume.selectedWork.map((project) => (
              <li key={project.slug} className="resume-entry">
                <p className="font-heading font-bold">{project.title}</p>
                <p className="mt-0.5 text-sm text-muted">{project.category}</p>
                <p className="mt-1 font-mono text-xs text-muted/80">
                  {project.stack.slice(0, 3).join(" · ")}
                </p>
              </li>
            ))}
          </ul>
        </section>

        <section className="resume-section" aria-labelledby="engineering">
          <SectionTitle id="engineering">Engineering</SectionTitle>
          <dl className="mt-6 space-y-5">
            {resume.engineering.map((group) => (
              <div key={group.title}>
                <dt className="font-mono text-xs uppercase tracking-[0.18em] text-secondary">
                  {group.title}
                </dt>
                <dd className="mt-1.5 text-sm text-foreground/85">
                  {group.items.join(" · ")}
                </dd>
              </div>
            ))}
          </dl>
        </section>
      </div>

      {/* ── Education + Exploring ───────────────────────────────── */}
      <div className="mt-12 grid gap-10 md:grid-cols-2">
        <section className="resume-section" aria-labelledby="education">
          <SectionTitle id="education">Education</SectionTitle>
          <ul className="mt-6 space-y-5">
            {resume.education.map((edu) => (
              <li key={edu.institution} className="resume-entry">
                <p className="font-heading font-bold">{edu.institution}</p>
                <p className="mt-0.5 text-sm text-muted">{edu.degree}</p>
                <p className="mt-1 font-mono text-xs text-muted/80">
                  {edu.graduationDate}
                </p>
              </li>
            ))}
          </ul>
        </section>

        <section className="resume-section" aria-labelledby="exploring">
          <SectionTitle id="exploring">Currently Exploring</SectionTitle>
          <p className="mt-6 font-mono text-sm text-foreground/85">
            {resume.exploring.join(" · ")}
          </p>
        </section>
      </div>

      {/* ── Contact ─────────────────────────────────────────────── */}
      <section className="resume-section mt-12" aria-labelledby="contact">
        <SectionTitle id="contact">Contact</SectionTitle>
        <p className="mt-6 max-w-xl text-foreground/85">{resume.closing}</p>
        <ul className="mt-4 space-y-2">
          {socialLinks.map((link) => (
            <li key={link.label} className="flex items-baseline gap-4">
              <span className="w-20 shrink-0 font-mono text-[10px] uppercase tracking-[0.22em] text-muted/70">
                {link.label}
              </span>
              <a
                href={link.href}
                target={link.href.startsWith("mailto") ? undefined : "_blank"}
                rel="noopener noreferrer"
                aria-label={link.ariaLabel}
                className="font-mono text-sm text-foreground/85 hover:text-secondary transition-colors"
              >
                {link.value}
              </a>
            </li>
          ))}
        </ul>
      </section>
    </main>
  );
}
