import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { notFound } from "next/navigation";
import { getProject, projects } from "../../../lib/projects";
import { Project } from "../../../types";
import { labItems } from "../../../lib/lab";
import StatusBadge from "../../components/features/projects/StatusBadge";
import ProjectVisual from "../../components/features/projects/ProjectVisual";
import CaseSection from "../../components/features/case-study/CaseSection";
import ArchitectureDiagram from "../../components/features/case-study/ArchitectureDiagram";
import TitledBlock from "../../components/features/case-study/TitledBlock";
import RelatedWork from "../../components/features/case-study/RelatedWork";

export function generateStaticParams() {
  return projects.map((project) => ({ slug: project.slug }));
}

const statusSuffix: Record<Project["status"], string> = {
  building: " Currently in active development.",
  live: "",
  experiment: " An engineering experiment.",
  planned: " A planned engineering project.",
};

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const project = getProject(slug);
  if (!project) return {};
  const title = `${project.title} - ${project.category} | Nova Nurhamdani`;
  const description = `${project.description}${statusSuffix[project.status]}`;
  const url = `/work/${project.slug}`;
  return {
    title,
    description,
    alternates: { canonical: url },
    openGraph: {
      title,
      description,
      type: "website",
      url,
    },
  };
}

const statusNotes: Record<string, string> = {
  building: "",
  planned:
    "This is a planned engineering sandbox - a scoped concept in the lab, not a shipped product. Watch this space.",
  experiment: "An engineering experiment - built to learn, not to ship.",
  live: "",
};

export default async function ProjectPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const project = getProject(slug);
  if (!project) notFound();

  const links = [
    { url: project.demoUrl, label: "Live demo" },
    { url: project.sourceUrl, label: "Source" },
    { url: project.caseStudyUrl, label: "Case study" },
    ...(project.links ?? []),
  ].filter((l) => l.url);

  const cs = project.caseStudy;
  const labItem = labItems.find((l) => l.slug === project.slug);

  return (
    <main className="container mx-auto px-5 sm:px-6 pt-28 sm:pt-36 pb-20">
      <Link
        href="/work"
        className="font-mono text-xs uppercase tracking-[0.2em] text-muted hover:text-secondary transition-colors"
      >
        ← Back to work
      </Link>

      {/* Project header */}
      <header className="mt-8 grid gap-10 lg:grid-cols-12" data-reveal>
        <div className="lg:col-span-7">
          <div className="flex items-center gap-4">
            <StatusBadge status={project.status} />
            <span className="font-mono text-xs uppercase tracking-[0.18em] text-muted">
              {project.category}
            </span>
          </div>

          <h1 className="mt-4 font-heading font-black text-4xl sm:text-5xl">
            {project.title}
          </h1>

          <p className="mt-4 max-w-xl text-lg text-muted leading-relaxed">
            {project.description}
          </p>

          <dl className="mt-8 space-y-4">
            <div className="flex gap-4">
              <dt className="w-20 shrink-0 font-mono text-[11px] uppercase tracking-[0.2em] text-muted/70 pt-0.5">
                Role
              </dt>
              <dd className="text-foreground/85">{project.role.join(" · ")}</dd>
            </div>
            <div className="flex gap-4">
              <dt className="w-20 shrink-0 font-mono text-[11px] uppercase tracking-[0.2em] text-muted/70 pt-0.5">
                Stack
              </dt>
              <dd className="flex flex-wrap gap-2 font-mono text-sm text-foreground/80">
                {project.stack.map((tech) => (
                  <span
                    key={tech}
                    className="border border-border/70 px-2 py-0.5 text-xs"
                  >
                    {tech}
                  </span>
                ))}
              </dd>
            </div>
          </dl>

          {links.length > 0 && (
            <div className="mt-8 flex flex-wrap gap-4">
              {links.map((link) => (
                <a
                  key={link.label}
                  href={link.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 border border-border px-5 py-2.5 text-sm font-semibold transition-colors hover:border-secondary hover:text-secondary"
                >
                  {link.label} <span aria-hidden="true">↗</span>
                </a>
              ))}
            </div>
          )}
        </div>

        <div className="lg:col-span-5">
          {project.thumbnail ? (
            <div className="relative aspect-[16/10] overflow-hidden border border-border">
              <Image
                src={project.thumbnail}
                alt={`${project.title} screenshot`}
                fill
                className="object-cover"
                priority
              />
            </div>
          ) : (
            <div className="border border-border">
              <ProjectVisual slug={project.slug} title={project.title} />
            </div>
          )}
          {!project.thumbnail && (
            <p className="mt-3 font-mono text-[10px] uppercase tracking-[0.2em] text-muted/60">
              abstract placeholder - real visuals ship with the product
            </p>
          )}
        </div>
      </header>

      {cs ? (
        /* ── Full engineering case study ─────────────────────────── */
        <div className="mt-6">
          <CaseSection index="01" title="The Problem">
            <div className="space-y-4 max-w-2xl">
              {cs.problem.map((paragraph, i) => (
                <p key={i} className="text-foreground/85 leading-relaxed">
                  {paragraph}
                </p>
              ))}
            </div>
          </CaseSection>

          <CaseSection index="02" title="What I Built">
            <div className="max-w-2xl">
              <p className="text-foreground/85 leading-relaxed">
                {cs.built.intro}
              </p>
              <ul className="mt-5 space-y-2.5">
                {cs.built.points.map((point) => (
                  <li
                    key={point}
                    className="flex items-baseline gap-3 text-sm sm:text-base text-muted"
                  >
                    <span className="text-secondary/70" aria-hidden="true">
                      ▸
                    </span>
                    {point}
                  </li>
                ))}
              </ul>
            </div>
          </CaseSection>

          <CaseSection index="03" title="Engineering Challenges">
            <div className="grid gap-6 sm:grid-cols-2">
              {cs.challenges.map((challenge) => (
                <TitledBlock key={challenge.heading} block={challenge} />
              ))}
            </div>
          </CaseSection>

          <CaseSection index="04" title="Architecture">
            <ArchitectureDiagram layers={cs.architecture} />
          </CaseSection>

          <CaseSection index="05" title="Key Decisions">
            <ol className="space-y-6">
              {cs.decisions.map((decision, i) => (
                <li key={decision.heading} className="flex gap-4">
                  <span className="font-mono text-xs text-secondary/80 pt-1 shrink-0">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <TitledBlock block={decision} />
                </li>
              ))}
            </ol>
          </CaseSection>

          <CaseSection index="06" title="Product Surface">
            <div className="grid gap-6 sm:grid-cols-2">
              {cs.surface.map((surface) => (
                <div
                  key={surface.title}
                  className="border border-border bg-surface/50 p-5"
                >
                  <h3 className="font-mono text-xs uppercase tracking-[0.2em] text-secondary mb-4">
                    {surface.title}
                  </h3>
                  <ul className="space-y-2 text-sm text-muted">
                    {surface.items.map((item) => (
                      <li key={item} className="flex items-baseline gap-2">
                        <span
                          className="text-primary/70 text-xs"
                          aria-hidden="true"
                        >
                          ▸
                        </span>
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </CaseSection>

          <CaseSection index="07" title="Current State">
            <div className="max-w-2xl space-y-4">
              {cs.currentState.map((paragraph, i) => (
                <p key={i} className="text-foreground/85 leading-relaxed">
                  {paragraph}
                </p>
              ))}
            </div>
          </CaseSection>

          <CaseSection index="08" title="What I Learned">
            <ul className="max-w-2xl space-y-3">
              {cs.learnings.map((learning) => (
                <li
                  key={learning}
                  className="flex items-baseline gap-3 text-foreground/85"
                >
                  <span className="text-secondary" aria-hidden="true">
                    ✦
                  </span>
                  {learning}
                </li>
              ))}
            </ul>
          </CaseSection>
        </div>
      ) : (
        /* ── Projects without a case study ───────────────────────── */
        <div className="mt-6 border-t border-border pt-10" data-reveal>
          {project.profile && (
            <div className="max-w-2xl mb-10">
              <p className="font-mono text-xs uppercase tracking-[0.22em] text-secondary mb-4">
                What I built
              </p>
              <ul className="space-y-2.5">
                {project.profile.built.map((point) => (
                  <li
                    key={point}
                    className="flex items-baseline gap-3 text-sm sm:text-base text-muted"
                  >
                    <span className="text-secondary/70" aria-hidden="true">
                      ▸
                    </span>
                    {point}
                  </li>
                ))}
              </ul>
            </div>
          )}

          {statusNotes[project.status] && (
            <p className="max-w-2xl border-l-2 border-secondary/50 bg-surface/60 px-4 py-3 text-sm text-muted">
              {statusNotes[project.status]}
            </p>
          )}

          {labItem?.focus && (
            <div className="mt-8 max-w-2xl">
              <p className="font-mono text-xs uppercase tracking-[0.22em] text-muted/70 mb-4">
                What it will explore
              </p>
              <ul className="grid gap-2 sm:grid-cols-2 text-sm text-muted">
                {labItem.focus.map((item) => (
                  <li key={item} className="flex items-baseline gap-2">
                    <span
                      className="text-secondary/70 text-xs"
                      aria-hidden="true"
                    >
                      ▸
                    </span>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          )}

          {project.status === "live" && (
            <p className="max-w-2xl border-l-2 border-success/50 bg-surface/60 px-4 py-3 text-sm text-muted">
              Shipped and running. A full engineering write-up may land here
              later.
            </p>
          )}
        </div>
      )}

      <RelatedWork currentSlug={project.slug} />
    </main>
  );
}
