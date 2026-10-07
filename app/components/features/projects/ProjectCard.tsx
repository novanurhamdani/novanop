import Link from "next/link";
import Image from "next/image";
import { Project } from "../../../../types";
import StatusBadge from "./StatusBadge";
import ProjectVisual from "./ProjectVisual";

interface ProjectCardProps {
  project: Project;
  featured?: boolean;
}

export default function ProjectCard({ project, featured }: ProjectCardProps) {
  return (
    <Link
      href={`/work/${project.slug}`}
      className={`group flex h-full flex-col bg-card transition-all duration-150 hover:-translate-y-1 hover:border-secondary hover:shadow-brutal-lime focus-visible:-translate-y-1 focus-visible:border-secondary focus-visible:shadow-brutal-lime`}
    >
      {project.thumbnail ? (
        <div className="relative aspect-[16/10] w-full overflow-hidden bg-surface">
          <Image
            src={project.thumbnail}
            alt={`${project.title} screenshot`}
            fill
            className="object-cover"
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          />
        </div>
      ) : (
        <ProjectVisual slug={project.slug} title={project.title} />
      )}

      <div
        className={`flex flex-1 flex-col border-t p-5 sm:p-6 ${
          featured ? "border-black bg-card text-white" : "border-border bg-card"
        }`}
      >
        <div className="flex items-center justify-between gap-3 mb-4">
          <StatusBadge status={project.status} />
          <span
            className={`font-mono text-[11px] uppercase tracking-[0.18em] ${
              featured ? "text-white" : "text-muted"
            }`}
          >
            {project.category}
          </span>
        </div>

        <h3
          className={`font-heading font-extrabold text-xl sm:text-2xl uppercase tracking-tight transition-colors ${
            featured ? "group-hover:text-black" : "group-hover:text-secondary"
          }`}
        >
          {project.title}
        </h3>

        <p
          className={`mt-2 text-sm leading-relaxed ${
            featured ? "text-white" : "text-muted"
          }`}
        >
          {project.description}
        </p>

        <dl className="mt-5 space-y-3 text-xs">
          <div className="flex gap-3">
            <dt
              className={`font-mono uppercase tracking-widest w-14 shrink-0 pt-px ${
                featured ? "text-white" : "text-dark-muted"
              }`}
            >
              Role
            </dt>
            <dd className={featured ? "text-white" : "text-foreground/85"}>
              {project.role.join(" · ")}
            </dd>
          </div>
          <div className="flex gap-3">
            <dt
              className={`font-mono uppercase tracking-widest w-14 shrink-0 pt-px ${
                featured ? "text-white" : "text-dark-muted"
              }`}
            >
              Stack
            </dt>
            <dd
              className={`flex flex-wrap gap-x-2 gap-y-1 font-mono ${
                featured ? "text-white" : "text-foreground/80"
              }`}
            >
              {project.stack.map((tech) => (
                <span
                  key={tech}
                  className={`border px-1.5 py-px ${
                    featured ? "border-white/40" : "border-border"
                  }`}
                >
                  {tech}
                </span>
              ))}
            </dd>
          </div>
        </dl>

        <span className="mt-auto inline-flex items-center gap-2 pt-6 font-mono text-xs uppercase tracking-widest text-secondary">
          View project
          <span
            className="transition-transform duration-300 group-hover:translate-x-1"
            aria-hidden="true"
          >
            →
          </span>
        </span>
      </div>
    </Link>
  );
}
