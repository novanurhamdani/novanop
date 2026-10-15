import type { Metadata } from "next";
import { projects } from "../../lib/projects";
import { site } from "../../lib/site";
import WorkArchive, {
  type WorkArchiveProject,
} from "../components/features/projects/WorkArchive";

const workTitle = "Projects & Engineering Work";
const workDescription =
  "Projects and engineering work by Nova Nurhamdani: commerce platforms, product tools, and design systems built with Next.js, TypeScript, Go, and PostgreSQL.";

export const metadata: Metadata = {
  title: workTitle,
  description: workDescription,
  alternates: { canonical: "/work" },
  openGraph: {
    title: workTitle,
    description: workDescription,
    type: "website",
    url: "/work",
  },
};

/** ItemList schema so the project archive is visible as a structured collection. */
const workListSchema = {
  "@context": "https://schema.org",
  "@type": "ItemList",
  itemListElement: projects.map((project, index) => ({
    "@type": "ListItem",
    position: index + 1,
    name: project.title,
    url: `${site.url}/work/${project.slug}`,
  })),
};

const archiveProjects: WorkArchiveProject[] = projects.map((project) => ({
  slug: project.slug,
  title: project.title,
  category: project.category,
  description: project.description,
  status: project.status,
  role: project.role,
  stack: project.stack,
  thumbnail: project.thumbnail,
  domain: project.demoUrl ? new URL(project.demoUrl).host : project.slug,
  hasCaseStudy: Boolean(project.caseStudy),
}));

export default function WorkPage() {
  return (
    <main className="bg-background pt-24 sm:pt-28">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(workListSchema).replace(/</g, "\\u003c"),
        }}
      />
      <WorkArchive projects={archiveProjects} />
    </main>
  );
}
