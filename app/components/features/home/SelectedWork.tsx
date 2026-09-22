import Link from "next/link";
import { selectedWork } from "../../../../lib/projects";
import SectionHeading from "../../layout/SectionHeading";
import ProjectCard from "../projects/ProjectCard";

export default function SelectedWork() {
  const ordered = selectedWork;

  return (
    <section
      id="work"
      data-section="work"
      className="container mx-auto px-5 sm:px-6 py-20 sm:py-28"
    >
      <SectionHeading
        eyebrow="Selected Work"
        title="Things I've actually built."
        intro="A mix of production software, independent products, and engineering experiments."
      />

      {/* Mirrored bento: wide featured card, narrow featured card,
          then the planned pair flipped - diagonal balance, aligned edges */}
      <div className="grid gap-6 lg:grid-cols-12">
        {ordered.map((project, index) => (
          <div
            key={project.slug}
            data-reveal
            className={`h-full ${
              index % 4 === 0 || index % 4 === 3
                ? "lg:col-span-7"
                : "lg:col-span-5"
            }`}
          >
            <ProjectCard project={project} />
          </div>
        ))}
      </div>

      <div className="mt-10" data-reveal>
        <Link
          href="/work"
          className="inline-flex items-center gap-2 font-mono text-xs uppercase tracking-[0.2em] text-muted hover:text-secondary transition-colors"
        >
          View all work <span aria-hidden="true">→</span>
        </Link>
      </div>
    </section>
  );
}
