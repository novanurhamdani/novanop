"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import type { ProjectStatus } from "../../../../types";
import ProjectVisual from "./ProjectVisual";
import StatusBadge from "./StatusBadge";

export interface WorkArchiveProject {
  slug: string;
  title: string;
  category: string;
  description: string;
  status: ProjectStatus;
  role: string[];
  stack: string[];
  thumbnail?: string;
  hasCaseStudy: boolean;
}

type StatusFilter = "all" | "building" | "live" | "lab";
type ViewMode = "grid" | "list";

const filterMatches = (project: WorkArchiveProject, filter: StatusFilter) => {
  if (filter === "all") return true;
  if (filter === "lab") {
    return project.status === "planned" || project.status === "experiment";
  }
  return project.status === filter;
};

const ArchiveCard = ({
  project,
  index,
  viewMode,
}: {
  project: WorkArchiveProject;
  index: number;
  viewMode: ViewMode;
}) => (
  <Link
    href={`/work/${project.slug}`}
    className={`group flex h-full min-w-0 border border-border bg-card transition-colors hover:border-secondary focus-visible:border-secondary ${
      viewMode === "list" ? "flex-col md:flex-row" : "flex-col"
    }`}
  >
    <div
      className={`relative w-full overflow-hidden bg-surface ${
        viewMode === "list"
          ? "aspect-[16/9] md:aspect-auto md:min-h-56 md:w-[38%] md:shrink-0"
          : "aspect-[16/9]"
      }`}
    >
      {project.thumbnail ? (
        <Image
          src={project.thumbnail}
          alt={`${project.title} screenshot`}
          fill
          sizes={
            viewMode === "list"
              ? "(max-width: 768px) 100vw, 38vw"
              : "(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          }
          className="object-cover transition-transform duration-300 group-hover:scale-[1.02]"
        />
      ) : (
        <ProjectVisual slug={project.slug} title={project.title} />
      )}
      <span className="absolute left-3 top-3 bg-black px-1.5 py-1 font-mono text-[9px] font-bold tracking-widest text-secondary">
        {String(index + 1).padStart(2, "0")}
      </span>
      <span className="absolute right-3 top-3 hidden max-w-[55%] truncate border border-border bg-black/90 px-2 py-1 font-mono text-[8px] uppercase tracking-wider text-muted sm:block">
        {project.category}
      </span>
    </div>

    <div className="flex min-w-0 flex-1 flex-col p-4 sm:p-5">
      <div className="flex flex-wrap items-center justify-between gap-2">
        <StatusBadge status={project.status} />
        <span className="font-mono text-[8px] uppercase tracking-[0.16em] text-dark-muted sm:hidden">
          {project.category}
        </span>
      </div>

      <h3 className="mt-3 font-heading text-xl font-extrabold uppercase tracking-tight text-foreground transition-colors group-hover:text-secondary sm:text-2xl">
        {project.title}
      </h3>
      <p className="mt-2 line-clamp-3 text-xs leading-relaxed text-muted sm:text-sm">
        {project.description}
      </p>

      <dl className="mt-4 grid gap-3 border-t border-border pt-3 text-[10px] sm:grid-cols-[4rem_minmax(0,1fr)]">
        <dt className="font-mono uppercase tracking-widest text-dark-muted">
          Role
        </dt>
        <dd className="text-foreground/85">{project.role.join(" · ")}</dd>
        <dt className="font-mono uppercase tracking-widest text-dark-muted">
          Stack
        </dt>
        <dd className="flex flex-wrap gap-1.5 font-mono text-foreground/85">
          {project.stack.map((item) => (
            <span key={item} className="border border-border px-1.5 py-0.5">
              {item}
            </span>
          ))}
        </dd>
      </dl>

      <span className="mt-4 inline-flex w-fit items-center gap-2 bg-secondary px-3 py-2 font-mono text-[9px] font-bold uppercase tracking-wider text-black transition-transform group-hover:translate-x-1">
        {project.hasCaseStudy ? "View full case study" : "View project profile"}
        <span aria-hidden="true">→</span>
      </span>
    </div>
  </Link>
);

export default function WorkArchive({
  projects,
}: {
  projects: WorkArchiveProject[];
}) {
  const [statusFilter, setStatusFilter] = useState<StatusFilter>("all");
  const [categoryFilter, setCategoryFilter] = useState("all");
  const [viewMode, setViewMode] = useState<ViewMode>("grid");

  const filteredProjects = projects.filter(
    (project) =>
      filterMatches(project, statusFilter) &&
      (categoryFilter === "all" || project.category === categoryFilter),
  );
  const building = filteredProjects.filter(
    (project) => project.status === "building",
  );
  const shipped = filteredProjects.filter(
    (project) => project.status === "live",
  );
  const lab = filteredProjects.filter(
    (project) =>
      project.status === "planned" || project.status === "experiment",
  );
  const categories = Array.from(
    new Set(projects.map((project) => project.category)),
  );
  const counts = {
    all: projects.length,
    building: projects.filter((project) => project.status === "building")
      .length,
    live: projects.filter((project) => project.status === "live").length,
    lab: projects.filter(
      (project) =>
        project.status === "planned" || project.status === "experiment",
    ).length,
  };
  const groups = [
    {
      id: "building",
      index: "01",
      label: "Currently Building",
      items: building,
      columns: "md:grid-cols-2",
      accent: "bg-primary text-white",
    },
    {
      id: "live",
      index: "02",
      label: "Shipped / Live",
      items: shipped,
      columns: "sm:grid-cols-2 xl:grid-cols-3",
      accent: "bg-secondary text-black",
    },
    {
      id: "lab",
      index: "03",
      label: "Planned / Lab",
      items: lab,
      columns: "sm:grid-cols-2",
      accent: "bg-surface text-secondary",
    },
  ];
  const filters: { value: StatusFilter; label: string; count: number }[] = [
    { value: "all", label: "All", count: counts.all },
    { value: "building", label: "Currently Building", count: counts.building },
    { value: "live", label: "Shipped / Live", count: counts.live },
    { value: "lab", label: "Planned / Lab", count: counts.lab },
  ];
  const firstCaseStudy = projects.find((project) => project.hasCaseStudy);

  return (
    <>
      <section
        id="work-index"
        className="relative overflow-hidden border-b-2 border-border bg-card"
      >
        <div
          className="grid-backdrop-dark pointer-events-none absolute inset-0 opacity-70"
          aria-hidden="true"
        />
        <div className="relative mx-auto grid max-w-6xl gap-8 px-4 py-8 sm:px-6 sm:py-10 lg:grid-cols-[1.2fr_0.8fr] lg:items-center">
          <div data-reveal>
            <p className="font-mono text-[9px] uppercase tracking-[0.2em] text-secondary">
              <span className="bg-primary px-1.5 py-1 text-white">
                Project index
              </span>{" "}
              / Full catalogue
            </p>
            <h1 className="mt-4 max-w-2xl font-heading text-4xl font-black uppercase leading-[0.86] tracking-tight sm:text-5xl lg:text-6xl">
              Things I&apos;ve
              <span className="block text-secondary">actually built.</span>
            </h1>
            <p className="mt-4 max-w-xl text-xs leading-relaxed text-muted sm:text-sm">
              Production software, independent products, and engineering
              experiments - grouped by how done they actually are.
            </p>
          </div>

          <div
            role="group"
            className="border border-border bg-black p-3 sm:p-4"
            data-reveal
            aria-label="Project status summary"
          >
            <div className="mb-3 flex items-center justify-between gap-3">
              <p className="font-mono text-[8px] uppercase tracking-[0.18em] text-dark-muted">
                Inventory / Status register
              </p>
              <p className="font-mono text-[8px] uppercase tracking-widest text-secondary">
                {String(counts.all).padStart(2, "0")} items
              </p>
            </div>
            <div className="grid grid-cols-3 gap-1.5">
              {[
                {
                  label: "Building",
                  count: counts.building,
                  style: "border-primary bg-primary text-white",
                },
                {
                  label: "Live",
                  count: counts.live,
                  style: "border-border bg-card text-foreground",
                },
                {
                  label: "Planned",
                  count: counts.lab,
                  style: "border-secondary bg-secondary text-black",
                },
              ].map((item) => (
                <div
                  key={item.label}
                  className={`border p-2 sm:p-3 ${item.style}`}
                >
                  <p className="font-mono text-[7px] uppercase tracking-wider sm:text-[8px]">
                    {item.label}
                  </p>
                  <p className="mt-1 font-heading text-xl font-black sm:text-2xl">
                    {String(item.count).padStart(2, "0")}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <div className="border-b border-border bg-card">
        <div className="mx-auto flex max-w-6xl flex-col gap-3 px-4 py-3 sm:px-6 lg:flex-row lg:items-center lg:justify-between">
          <div className="flex min-w-0 items-center gap-2">
            <span className="shrink-0 font-mono text-[8px] uppercase tracking-widest text-dark-muted">
              Filter /
            </span>
            <div className="flex min-w-0 gap-1.5 overflow-x-auto">
              {filters.map((filter) => (
                <button
                  key={filter.value}
                  type="button"
                  aria-pressed={statusFilter === filter.value}
                  onClick={() => setStatusFilter(filter.value)}
                  className={`shrink-0 border px-2 py-1.5 font-mono text-[8px] font-bold uppercase tracking-wider transition-colors ${
                    statusFilter === filter.value
                      ? "border-secondary bg-secondary text-black"
                      : "border-border bg-dark text-muted hover:border-muted hover:text-foreground"
                  }`}
                >
                  {filter.label}{" "}
                  <span>{String(filter.count).padStart(2, "0")}</span>
                </button>
              ))}
            </div>
          </div>

          <div className="flex flex-wrap items-center justify-between gap-3 sm:justify-end">
            <label className="flex items-center gap-2 font-mono text-[8px] uppercase tracking-widest text-dark-muted">
              Type
              <select
                value={categoryFilter}
                onChange={(event) => setCategoryFilter(event.target.value)}
                className="max-w-44 border border-border bg-dark px-2 py-1.5 text-[9px] text-foreground focus:border-secondary focus:outline-none"
              >
                <option value="all">All types</option>
                {categories.map((category) => (
                  <option key={category} value={category}>
                    {category}
                  </option>
                ))}
              </select>
            </label>

            <div className="flex items-center gap-1 border-l border-border pl-3">
              <span className="font-mono text-[8px] uppercase tracking-widest text-dark-muted">
                View
              </span>
              {(["grid", "list"] as const).map((mode) => (
                <button
                  key={mode}
                  type="button"
                  aria-label={`${mode} view`}
                  aria-pressed={viewMode === mode}
                  onClick={() => setViewMode(mode)}
                  className={`border px-2 py-1 font-mono text-[8px] uppercase tracking-widest ${
                    viewMode === mode
                      ? "border-primary bg-primary text-white"
                      : "border-border text-muted hover:text-foreground"
                  }`}
                >
                  {mode}
                </button>
              ))}
            </div>
          </div>
        </div>
      </div>

      <div className="mx-auto max-w-6xl px-4 py-8 sm:px-6 sm:py-10">
        {groups.map(
          (group) =>
            group.items.length > 0 && (
              <section
                key={group.id}
                id={`work-${group.id}`}
                className="mb-10 last:mb-0 sm:mb-12"
              >
                <div className="mb-4 flex items-end justify-between gap-4 border-b border-border pb-3">
                  <div className="flex items-center gap-2.5">
                    <span
                      className={`px-1.5 py-1 font-mono text-[9px] font-bold tracking-widest ${group.accent}`}
                    >
                      {group.index}
                    </span>
                    <h2 className="font-heading text-lg font-extrabold uppercase tracking-tight text-foreground sm:text-xl">
                      {group.label}
                    </h2>
                  </div>
                  <p className="font-mono text-[8px] uppercase tracking-[0.16em] text-dark-muted">
                    {String(group.items.length).padStart(2, "0")} projects
                  </p>
                </div>

                <div
                  className={`grid gap-3 ${
                    viewMode === "list" ? "grid-cols-1" : group.columns
                  }`}
                >
                  {group.items.map((project, index) => (
                    <div key={project.slug} className="h-full">
                      <ArchiveCard
                        project={project}
                        index={index}
                        viewMode={viewMode}
                      />
                    </div>
                  ))}
                </div>
              </section>
            ),
        )}

        {filteredProjects.length === 0 && (
          <p className="border border-border bg-card p-8 text-center font-mono text-xs uppercase tracking-widest text-muted">
            No projects in this selection.
          </p>
        )}
      </div>

      <section className="border-y border-border bg-primary text-white">
        <div className="mx-auto grid max-w-6xl gap-5 px-4 py-8 sm:px-6 sm:py-10 md:grid-cols-[1fr_auto] md:items-center">
          <div>
            <p className="font-mono text-[8px] uppercase tracking-[0.2em] text-white">
              Product engineering / open to conversation
            </p>
            <h2 className="mt-2 max-w-2xl font-heading text-2xl font-black uppercase leading-[0.9] sm:text-3xl">
              Let&apos;s build something great together.
            </h2>
            <p className="mt-2 max-w-xl text-xs leading-relaxed text-white sm:text-sm">
              I&apos;m open to product work, engineering roles, and interesting
              technical challenges - especially where frontend meets real
              systems.
            </p>
          </div>
          <div className="flex flex-wrap gap-2">
            <Link
              href="/#contact"
              className="btn-brutal inline-flex items-center gap-2 border-black bg-secondary px-3 py-2.5 font-mono text-[9px] font-bold uppercase tracking-widest text-black"
            >
              Start an inquiry
            </Link>
            {firstCaseStudy && (
              <Link
                href={`/work/${firstCaseStudy.slug}`}
                className="btn-brutal inline-flex items-center gap-2 border-black bg-black px-3 py-2.5 font-mono text-[9px] font-bold uppercase tracking-widest text-white"
              >
                Explore a case study
              </Link>
            )}
          </div>
        </div>
      </section>
    </>
  );
}
