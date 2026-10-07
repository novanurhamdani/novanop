import Link from "next/link";
import { projects } from "../../../../lib/projects";
import StatusBadge from "../projects/StatusBadge";

/**
 * Compact related-work index - links to other project pages without
 * duplicating the full card treatment.
 */
export default function RelatedWork({ currentSlug }: { currentSlug: string }) {
  const related = projects.filter((p) => p.slug !== currentSlug).slice(0, 4);
  if (related.length === 0) return null;

  return (
    <section className="border-t border-border py-10 sm:py-14" data-reveal>
      <p className="font-mono text-xs tracking-[0.25em] text-secondary">
        RELATED WORK
      </p>
      <div className="mt-6 divide-y divide-border border-y border-border">
        {related.map((project) => (
          <Link
            key={project.slug}
            href={`/work/${project.slug}`}
            className="group flex items-center justify-between gap-4 py-4 transition-colors hover:bg-surface/60"
          >
            <div className="flex items-baseline gap-4 min-w-0">
              <span className="font-heading font-bold text-base sm:text-lg group-hover:text-secondary transition-colors whitespace-nowrap">
                {project.title}
              </span>
              <span className="hidden sm:inline font-mono text-[11px] uppercase tracking-[0.18em] text-muted truncate">
                {project.category}
              </span>
            </div>
            <div className="flex items-center gap-4 shrink-0">
              <StatusBadge status={project.status} />
              <span
                className="text-muted transition-transform duration-300 group-hover:translate-x-1 group-hover:text-secondary"
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
