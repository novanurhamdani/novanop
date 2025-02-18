import { projects } from "@/constants/projects";
import { notFound } from "next/navigation";
import ProjectDetails from "@/components/project-details";

export function generateStaticParams() {
  return projects.map((project) => ({
    id: project.id,
  }));
}

export default function ProjectPage({ params }: { params: { id: string } }) {
  const project = projects.find((p) => p.id === params.id);

  if (!project) {
    notFound();
  }

  return <ProjectDetails params={{ id: params.id }} />;
}
