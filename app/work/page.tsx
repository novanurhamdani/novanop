import type { Metadata } from "next";
import { projects } from "../../lib/projects";
import WorkArchive, {
  type WorkArchiveProject,
} from "../components/features/projects/WorkArchive";

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

const archiveProjects: WorkArchiveProject[] = projects.map((project) => ({
  slug: project.slug,
  title: project.title,
  category: project.category,
  description: project.description,
  status: project.status,
  role: project.role,
  stack: project.stack,
  thumbnail: project.thumbnail,
  hasCaseStudy: Boolean(project.caseStudy),
}));

export default function WorkPage() {
  return (
    <main className="bg-background pt-24 sm:pt-28">
      <WorkArchive projects={archiveProjects} />
    </main>
  );
}
