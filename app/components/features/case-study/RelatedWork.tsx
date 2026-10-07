import Link from "next/link";
import { projects } from "../../../../lib/projects";
import StatusBadge from "../projects/StatusBadge";

/**
 * Compact related-work index - links to other project pages without
 * duplicating the full card treatment.
 */
export default function RelatedWork({ currentSlug }: { currentSlug: string }) {
  const related = projects.filter((project) => project.slug !== currentSlug).slice(0, 4);
  if (related.length === 0) return null;

  return (
    <section className="border-t border-border py-8 sm:py-10" data-reveal>
      <div className="mb-4 flex items-end justify-between gap-4">
        <div>
          <p className="font-mono text-[9px] tracking-[0.22em] text-secondary">
            PROJECT INDEX / 09
          </p>
          <h2 className="mt-1 font-heading text-lg font-extrabold uppercase tracking-tight sm:text-xl">
            Related work
          </h2>
        </div>
        <Link
          href="/work"
          className="font-mono text-[9px] uppercase tracking-widest text-muted transition-colors hover:text-secondary"
        >
          All projects →
        </Link>
      </div>

      <div className="grid gap-2 sm:grid-cols-2 xl:grid-cols-4">
        {related.map((project, index) => (
          <Link
            key={project.slug}
            href={`/work/${project.slug}`}
            className={`group border border-border border-t-2 bg-card p-3 transition-colors hover:bg-surface ${
              index % 2 === 0 ? "border-t-primary" : "border-t-secondary"
            }`}
          >
            <div className="flex items-center justify-between gap-2">
              <span className="font-mono text-[9px] uppercase tracking-widest text-muted">
                {project.category}
              </span>
              <StatusBadge status={project.status} />
            </div>
            <div className="mt-4 flex items-end justify-between gap-3">
              <h3 className="font-heading text-sm font-bold uppercase tracking-tight transition-colors group-hover:text-secondary">
                {project.title}
              </h3>
              <span
                className="font-mono text-xs text-muted transition-transform group-hover:translate-x-1 group-hover:text-secondary"
                aria-hidden="true"
              >
                →
              </span>
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
}
