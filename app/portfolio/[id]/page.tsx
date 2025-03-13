import { projects } from "@/constants/projects";
import { ProjectDetail } from "@/components/project-detail";

// Generate static params for all projects
export function generateStaticParams() {
  return projects.map((project) => ({
    id: project.id,
  }));
}

export default function ProjectDetailPage({ params }: { params: { id: string } }) {
  const project = projects.find((p) => p.id === params.id) || null;
  
  if (!project) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold mb-4">Project Not Found</h1>
          <a href="/#portfolio" className="inline-flex items-center px-4 py-2 retro-btn">
            ← Back to Portfolio
          </a>
        </div>
      </div>
    );
  }

  // Find next project
  const currentIndex = projects.findIndex((p) => p.id === params.id);
  const nextIndex = (currentIndex + 1) % projects.length;
  const nextProject = projects[nextIndex];

  return <ProjectDetail project={project} nextProject={nextProject} />;
}
