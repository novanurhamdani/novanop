import Image from "next/image";
import Link from "next/link";
import { selectedWork } from "../../../../lib/projects";
import SectionHeading from "../../layout/SectionHeading";
import ProjectVisual from "../projects/ProjectVisual";
import StatusBadge from "../projects/StatusBadge";

export default function SelectedWork() {
  const spotlight = selectedWork.find((project) => project.slug === "loomoda");
  const supportingProjects = selectedWork.filter(
    (project) => project.slug !== spotlight?.slug,
  );

  return (
    <section
      id="work"
      data-section="work"
      className="border-t border-border bg-background"
    >
      <div className="mx-auto max-w-6xl px-4 py-14 sm:px-6 sm:py-16">
        <SectionHeading
          eyebrow="Selected Work"
          number="02"
          title="Things I've actually built."
          intro="A mix of production software, independent products, and engineering experiments."
          compact
        />

        {spotlight && (
          <article
            data-reveal
            className="mt-8 grid overflow-hidden border border-border md:grid-cols-12"
          >
            <div className="flex flex-col border-b border-border bg-surface p-5 md:col-span-3 md:border-b-0 md:border-r">
              <p className="font-mono text-[9px] uppercase tracking-[0.2em] text-muted">
                Featured build / Loomoda
              </p>
              <div className="mt-4">
                <StatusBadge status={spotlight.status} />
              </div>
              <dl className="mt-6 space-y-4">
                <div>
                  <dt className="font-mono text-[9px] uppercase tracking-widest text-dark-muted">
                    Role
                  </dt>
                  <dd className="mt-1 text-xs text-foreground">
                    {spotlight.role.join(" · ")}
                  </dd>
                </div>
                <div>
                  <dt className="font-mono text-[9px] uppercase tracking-widest text-dark-muted">
                    Stack
                  </dt>
                  <dd className="mt-1 flex flex-wrap gap-1.5">
                    {spotlight.stack.map((item) => (
                      <span
                        key={item}
                        className="border border-border px-1.5 py-0.5 font-mono text-[9px] text-foreground"
                      >
                        {item}
                      </span>
                    ))}
                  </dd>
                </div>
              </dl>
            </div>

            <div className="flex flex-col justify-center bg-primary p-6 text-white sm:p-8 md:col-span-5">
              <p className="font-mono text-[9px] uppercase tracking-[0.22em] text-white">
                {spotlight.category}
              </p>
              <h3 className="mt-3 font-heading text-3xl font-black uppercase leading-none tracking-tight sm:text-4xl">
                {spotlight.title}
              </h3>
              <p className="mt-3 max-w-lg text-sm leading-relaxed text-white">
                {spotlight.description}
              </p>
              <Link
                href={`/work/${spotlight.slug}`}
                className="btn-brutal mt-6 inline-flex w-fit items-center gap-2 border-black bg-secondary px-4 py-2.5 font-mono text-[10px] font-bold uppercase tracking-widest text-black"
              >
                Explore the build <span aria-hidden="true">→</span>
              </Link>
            </div>

            <Link
              href={`/work/${spotlight.slug}`}
              aria-label={`${spotlight.title} — Open case study`}
              className="relative flex min-h-56 items-center justify-center overflow-hidden bg-white p-4 md:col-span-4"
            >
              {spotlight.thumbnail ? (
                <Image
                  src={spotlight.thumbnail}
                  alt=""
                  fill
                  sizes="(max-width: 768px) 100vw, 34vw"
                  className="object-cover"
                />
              ) : (
                <ProjectVisual slug={spotlight.slug} title={spotlight.title} />
              )}
              <span className="absolute bottom-3 right-3 bg-black px-2 py-1 font-mono text-[9px] uppercase tracking-widest text-secondary">
                Open case study ↗
              </span>
            </Link>
          </article>
        )}

        <div className="grid mt-3 gap-3 sm:grid-cols-2 xl:grid-cols-3">
          {supportingProjects.map((project, index) => (
            <Link
              key={project.slug}
              href={`/work/${project.slug}`}
              data-reveal
              className="group flex min-w-0 flex-col border border-border bg-card transition-colors hover:border-secondary focus-visible:border-secondary"
            >
              <div className="relative w-full overflow-hidden border-b border-border">
                {project.thumbnail ? (
                  <div className="relative aspect-[16/9]">
                    <Image
                      src={project.thumbnail}
                      alt={`${project.title} product screenshot`}
                      fill
                      sizes="(max-width: 640px) 100vw, (max-width: 1280px) 50vw, 25vw"
                      className="object-cover transition-transform duration-300 group-hover:scale-[1.03]"
                    />
                  </div>
                ) : (
                  <ProjectVisual slug={project.slug} title={project.title} />
                )}
                <span className="absolute left-2 top-2 bg-black px-1.5 py-0.5 font-mono text-[9px] tracking-widest text-secondary">
                  {String(index + 2).padStart(2, "0")}
                </span>
              </div>

              <div className="flex flex-1 flex-col p-3 sm:p-4">
                <div className="flex flex-wrap items-center justify-between gap-2">
                  <StatusBadge status={project.status} />
                  <span className="font-mono text-[9px] uppercase tracking-wider text-muted">
                    {project.category}
                  </span>
                </div>
                <h3 className="mt-3 font-heading text-base font-extrabold uppercase tracking-tight transition-colors group-hover:text-secondary sm:text-lg">
                  {project.title}
                </h3>
                <p className="mt-1 line-clamp-2 text-xs leading-relaxed text-muted">
                  {project.description}
                </p>
                <p className="mt-auto pt-4 font-mono text-[9px] leading-relaxed text-dark-muted">
                  {project.stack.join(" · ")}
                </p>
              </div>
            </Link>
          ))}
        </div>

        <div className="mt-6" data-reveal>
          <Link
            href="/work"
            className="btn-brutal inline-flex items-center gap-2 border border-black bg-primary px-4 py-2.5 font-mono text-[10px] uppercase tracking-[0.2em] text-white"
          >
            View all work <span aria-hidden="true">→</span>
          </Link>
        </div>
      </div>
    </section>
  );
}
