import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { getProject, projects } from "../../../lib/projects";
import { Project } from "../../../types";
import { labItems } from "../../../lib/lab";
import StatusBadge from "../../components/features/projects/StatusBadge";
import ProjectVisual from "../../components/features/projects/ProjectVisual";
import ZoomableImage from "../../components/features/projects/ZoomableImage";
import ChallengeCard from "../../components/features/case-study/ChallengeCard";
import CaseSection from "../../components/features/case-study/CaseSection";
import ArchitectureDiagram from "../../components/features/case-study/ArchitectureDiagram";
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

const caseStudyNav = [
  { id: "case-section-01", label: "Problem" },
  { id: "case-section-02", label: "What I Built" },
  { id: "case-section-03", label: "Challenges" },
  { id: "case-section-04", label: "Architecture" },
  { id: "case-section-05", label: "Decisions" },
  { id: "case-section-08", label: "Learnings" },
];

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
    <main className="pt-24 pb-0 sm:pt-28">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <Link
          href="/work"
          className="font-mono text-xs uppercase tracking-[0.2em] text-muted hover:text-secondary transition-colors"
        >
          ← Back to work
        </Link>
      </div>

      {cs && (
        <nav
          aria-label="Case study sections"
          className="mt-4 border-y border-border bg-dark"
        >
          <div className="mx-auto flex max-w-6xl items-center gap-5 overflow-x-auto px-4 py-2.5 sm:px-6">
            <span className="shrink-0 font-mono text-[9px] uppercase tracking-[0.18em] text-secondary">
              {project.title} / Index
            </span>
            {caseStudyNav.map((item) => (
              <a
                key={item.id}
                href={`#${item.id}`}
                className="shrink-0 font-mono text-[9px] uppercase tracking-[0.16em] text-muted transition-colors hover:text-secondary"
              >
                {item.label}
              </a>
            ))}
            <Link
              href="/#contact"
              className="shrink-0 bg-secondary px-2 py-1 font-mono text-[9px] font-bold uppercase tracking-widest text-black"
            >
              Contact
            </Link>
          </div>
        </nav>
      )}

      {/* Project header - split spec sheet */}
      <header className="mt-4" data-reveal>
        <div className="grid overflow-hidden border-y-2 border-border bg-white shadow-brutal-blue lg:grid-cols-2">
          <div className="min-w-0 bg-white p-6 text-black sm:p-8 lg:p-10">
            <div className="flex items-center gap-4">
              <StatusBadge status={project.status} />
              <span className="font-mono text-xs uppercase tracking-[0.18em] text-neutral-500">
                {project.category}
              </span>
            </div>

            <h1 className="mt-4 font-heading font-black uppercase tracking-tight text-4xl sm:text-5xl">
              {project.title}
            </h1>
            <span
              className="mt-3 block h-1.5 w-24 bg-primary"
              aria-hidden="true"
            />

            <p className="mt-4 max-w-xl text-sm leading-relaxed text-neutral-600 sm:text-base">
              {project.description}
            </p>

            <dl className="mt-5 grid gap-5 border-t border-black/15 pt-4 sm:grid-cols-2">
              <div>
                <dt className="font-mono text-[9px] uppercase tracking-[0.2em] text-neutral-500">
                  Role &amp; focus
                </dt>
                <dd className="mt-2 text-xs leading-relaxed text-black">
                  {project.role.join(" · ")}
                </dd>
              </div>
              <div>
                <dt className="font-mono text-[9px] uppercase tracking-[0.2em] text-neutral-500">
                  Core tech stack
                </dt>
                <dd className="mt-2 flex flex-wrap gap-1.5 font-mono text-black">
                  {project.stack.map((tech) => (
                    <span
                      key={tech}
                      className="border border-black/20 bg-neutral-100 px-1.5 py-px text-[10px] text-black"
                    >
                      {tech}
                    </span>
                  ))}
                </dd>
              </div>
            </dl>

            {links.length > 0 && (
              <div className="mt-5 flex flex-wrap gap-2">
                {links.map((link) => (
                  <a
                    key={link.label}
                    href={link.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 border-2 border-black px-4 py-2 text-[11px] font-semibold text-black transition-colors hover:border-primary hover:bg-primary hover:text-white"
                  >
                    {link.label}
                  </a>
                ))}
              </div>
            )}
          </div>

          <div className="border-t-2 border-border bg-dark-surface grid-backdrop-dark p-4 sm:p-6 lg:border-l-2 lg:border-t-0">
            <div className="mx-auto w-full max-w-[34rem]">
              {project.thumbnail ? (
                <div className="relative aspect-[16/9] overflow-hidden shadow-brutal">
                  <ZoomableImage
                    src={project.thumbnail}
                    alt={`${project.title} screenshot`}
                    sizes="(max-width: 1024px) 100vw, 50vw"
                    priority
                  />
                </div>
              ) : (
                <div className="border-2 border-primary shadow-brutal">
                  <ProjectVisual slug={project.slug} title={project.title} />
                </div>
              )}
              {!project.thumbnail && (
                <p className="mt-3 font-mono text-[10px] uppercase tracking-[0.2em] text-muted">
                  abstract placeholder - real visuals ship with the product
                </p>
              )}
              {project.screenshots && (
                <div className="mt-2 grid grid-cols-2 gap-2">
                  {project.screenshots.map((shot) => (
                    <div
                      key={shot}
                      className="relative aspect-[16/7] overflow-hidden border border-border"
                    >
                      <ZoomableImage
                        src={shot}
                        alt={`${project.title} screenshot`}
                        sizes="(max-width: 1024px) 50vw, 25vw"
                      />
                    </div>
                  ))}
                </div>
              )}
            </div>
          </div>
        </div>
      </header>

      {cs ? (
        /* ── Full engineering case study ─────────────────────────── */
        <div className="mt-6">
          <CaseSection index="01" title="The Problem" layout="split">
            <div className="space-y-4 border border-border bg-card p-4 sm:p-5">
              {cs.problem.map((paragraph, i) => (
                <p key={i} className="text-foreground/85 leading-relaxed">
                  {paragraph}
                </p>
              ))}
            </div>
          </CaseSection>

          <CaseSection index="02" title="What I Built" variant="cobalt">
            <div>
              <p className="max-w-4xl text-sm leading-relaxed text-white sm:text-base">
                {cs.built.intro}
              </p>
              <ul className="mt-5 grid gap-2 sm:grid-cols-2">
                {cs.built.points.map((point) => (
                  <li
                    key={point}
                    className="flex items-start gap-2 border border-white/25 bg-black/20 p-3 text-xs leading-relaxed text-white sm:text-sm"
                  >
                    <span
                      className="shrink-0 text-secondary"
                      aria-hidden="true"
                    >
                      ▸
                    </span>
                    {point}
                  </li>
                ))}
              </ul>
            </div>
          </CaseSection>

          <CaseSection
            index="03"
            eyebrow="Complexity & Concurrency"
            summary={`${cs.challenges.length} case-specific challenges`}
            title="Engineering Challenges"
          >
            <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
              {cs.challenges.map((challenge, i) => (
                <ChallengeCard
                  key={challenge.heading}
                  block={challenge}
                  index={i}
                />
              ))}
            </div>
          </CaseSection>

          <CaseSection
            index="04"
            eyebrow="System Blueprint"
            summary="Service boundaries / data model"
            title="Architecture & Contracts"
          >
            <ArchitectureDiagram layers={cs.architecture} />
          </CaseSection>

          <CaseSection
            index="05"
            eyebrow="Engineering Trade-offs"
            title="Key Decisions"
            intro="Deliberate choices made to preserve velocity without sacrificing correctness."
          >
            <ol className="divide-y divide-border border-y border-border bg-card">
              {cs.decisions.map((decision, i) => (
                <li
                  key={decision.heading}
                  className="grid gap-2 py-4 md:grid-cols-[2.5rem_minmax(0,0.9fr)_minmax(0,1.4fr)] md:gap-4"
                >
                  <span className="h-fit w-fit bg-black px-1.5 py-0.5 font-mono text-[9px] font-bold text-secondary">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <h3 className="font-heading text-xs font-bold uppercase leading-relaxed text-foreground">
                    {decision.heading}
                  </h3>
                  <p className="text-xs leading-relaxed text-muted sm:text-sm">
                    {decision.body}
                  </p>
                </li>
              ))}
            </ol>
          </CaseSection>

          <CaseSection
            index="06"
            eyebrow="Surface Breakdown"
            title="Product Surface"
          >
            <div className="grid gap-2 sm:grid-cols-2 lg:grid-cols-3">
              {cs.surface.map((surface, i) => (
                <div
                  key={surface.title}
                  className="flex min-w-0 flex-col border border-border bg-card p-4"
                >
                  <div className="flex items-center justify-between gap-3 border-b border-border pb-3">
                    <span
                      className={`px-1.5 py-0.5 font-mono text-[8px] font-bold uppercase tracking-[0.16em] ${
                        i === 0
                          ? "bg-primary text-white"
                          : i === 1
                            ? "bg-secondary text-black"
                            : "bg-surface-strong text-muted"
                      }`}
                    >
                      Surface / {String(i + 1).padStart(2, "0")}
                    </span>
                    <span className="font-mono text-[8px] text-dark-muted">
                      {project.slug.toUpperCase()}
                    </span>
                  </div>
                  <h3 className="mt-3 font-heading text-sm font-bold uppercase leading-snug text-foreground">
                    {surface.title}
                  </h3>
                  <ul className="mt-3 space-y-1.5 text-xs leading-relaxed text-muted">
                    {surface.items.map((item) => (
                      <li key={item} className="flex items-baseline gap-2">
                        <span
                          className="text-secondary text-xs"
                          aria-hidden="true"
                        >
                          ▸
                        </span>
                        {item}
                      </li>
                    ))}
                  </ul>
                  <p className="mt-auto border-t border-border pt-3 font-mono text-[8px] uppercase tracking-[0.14em] text-dark-muted">
                    Product surface / {project.title}
                  </p>
                </div>
              ))}
            </div>
          </CaseSection>

          <CaseSection
            index="07"
            eyebrow="Project Status"
            title="Current State"
          >
            <div className="grid gap-5 border border-border bg-card p-4 sm:p-5 md:grid-cols-[minmax(0,1fr)_auto] md:items-center">
              <div className="space-y-3">
                {cs.currentState.map((paragraph, i) => (
                  <p
                    key={i}
                    className="text-xs leading-relaxed text-foreground/85 sm:text-sm"
                  >
                    {paragraph}
                  </p>
                ))}
              </div>
              <div className="border border-border bg-black p-3">
                <p className="mb-2 font-mono text-[8px] uppercase tracking-[0.18em] text-dark-muted">
                  Current project status
                </p>
                <StatusBadge status={project.status} />
              </div>
            </div>
          </CaseSection>

          <CaseSection
            index="08"
            eyebrow="Retrospective & Takeaways"
            title="What I Learned"
            variant="lime"
          >
            <ul className="grid gap-2 sm:grid-cols-2">
              {cs.learnings.map((learning) => (
                <li
                  key={learning}
                  className="flex items-start gap-2 bg-black p-3 text-xs leading-relaxed text-white sm:text-sm"
                >
                  <span className="shrink-0 text-secondary" aria-hidden="true">
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
        <div className="mx-auto max-w-6xl px-4 sm:px-6">
          <div className="mt-6 border-t border-border py-8" data-reveal>
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
                      <span className="text-secondary" aria-hidden="true">
                        ▸
                      </span>
                      {point}
                    </li>
                  ))}
                </ul>
              </div>
            )}

            {statusNotes[project.status] && (
              <p className="max-w-2xl border-l-2 border-secondary bg-surface px-4 py-3 text-sm text-muted">
                {statusNotes[project.status]}
              </p>
            )}

            {labItem?.focus && (
              <div className="mt-8 max-w-2xl">
                <p className="font-mono text-xs uppercase tracking-[0.22em] text-muted mb-4">
                  What it will explore
                </p>
                <ul className="grid gap-2 sm:grid-cols-2 text-sm text-muted">
                  {labItem.focus.map((item) => (
                    <li key={item} className="flex items-baseline gap-2">
                      <span
                        className="text-secondary text-xs"
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
              <p className="max-w-2xl border-l-2 border-secondary bg-surface px-4 py-3 text-sm text-muted">
                Shipped and running. A full engineering write-up may land here
                later.
              </p>
            )}
          </div>
        </div>
      )}

      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <RelatedWork currentSlug={project.slug} />
      </div>

      <section className="border-y border-border bg-primary text-white">
        <div className="mx-auto grid max-w-6xl gap-6 px-4 py-8 sm:px-6 sm:py-10 lg:grid-cols-12 lg:items-center">
          <div className="lg:col-span-7">
            <p className="w-fit bg-black px-2 py-1 font-mono text-[9px] uppercase tracking-[0.22em] text-secondary">
              The next chapter starts here
            </p>
            <h2 className="mt-3 max-w-2xl font-heading text-2xl font-black uppercase leading-[0.95] tracking-tight sm:text-3xl">
              Let&apos;s build something resilient together.
            </h2>
          </div>
          <div className="flex flex-wrap gap-3 lg:col-span-5 lg:justify-end">
            <Link
              href="/#contact"
              className="btn-brutal inline-flex items-center gap-2 border-black bg-secondary px-4 py-2.5 font-mono text-[10px] font-bold uppercase tracking-widest text-black"
            >
              Start a conversation
            </Link>
            <Link
              href="/work"
              className="btn-brutal inline-flex items-center gap-2 border-black bg-black px-4 py-2.5 font-mono text-[10px] font-bold uppercase tracking-widest text-white"
            >
              More work
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
