import type { Metadata } from "next";
import { projects } from "../../lib/projects";
import SectionHeading from "../components/layout/SectionHeading";
import ProjectCard from "../components/features/projects/ProjectCard";

export const metadata: Metadata = {
  title: "Work - Nova Nurhamdani | Novanop",
  description:
    "Selected products, shipped projects, and engineering work by Nova Nurhamdani - grouped by what is being built, what is live, and what is planned.",
  alternates: { canonical: "/work" },
  openGraph: {
    title: "Work - Nova Nurhamdani | Novanop",
    description:
      "Selected products, shipped projects, and engineering work by Nova Nurhamdani.",
    type: "website",
    url: "/work",
  },
};

/** Archive grouped by honest status - shipped first-class, lab labelled. */
const groups = [
  {
    label: "Currently building",
    items: projects.filter((p) => p.status === "building"),
  },
  {
    label: "Shipped / live",
    items: projects.filter((p) => p.status === "live"),
  },
  {
    label: "Planned / lab",
    items: projects.filter(
      (p) => p.status === "planned" || p.status === "experiment",
    ),
  },
];

export default function WorkPage() {
  return (
    <main className="container mx-auto px-5 sm:px-6 pt-28 sm:pt-36 pb-20">
      <SectionHeading
        eyebrow="Work"
        title="Things I've actually built."
        intro="Production software, independent products, and engineering experiments - grouped by how done they actually are."
      />

      {groups.map(
        (group) =>
          group.items.length > 0 && (
            <section key={group.label} className="mb-16 last:mb-0">
              <p
                className="font-mono text-[11px] uppercase tracking-[0.25em] text-muted mb-6 flex items-center gap-3"
                data-reveal
              >
                <span
                  className="inline-block h-px w-6 bg-border"
                  aria-hidden="true"
                />
                {group.label}
                <span className="text-muted/60">
                  [{String(group.items.length).padStart(2, "0")}]
                </span>
              </p>
              <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
                {group.items.map((project) => (
                  <div key={project.slug} data-reveal className="h-full">
                    <ProjectCard project={project} />
                  </div>
                ))}
              </div>
            </section>
          ),
      )}
    </main>
  );
}
