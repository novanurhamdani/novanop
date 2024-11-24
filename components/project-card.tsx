import { Project } from "@/types/project";
import Image from "next/image";
import Link from "next/link";
import StackIcon from "tech-stack-icons";

type ProjectCardProps = {
  project: Project;
};

export function ProjectCard({ project }: ProjectCardProps) {
  return (
    <Link href={`/projects/${project.id}`}>
      <div className="group relative h-[380px] flex flex-col rounded-lg border bg-card py-6 px-4 shadow-sm transition-all hover:shadow-md hover:bg-accent/50">
        {/* Header with Logo */}
        <div className="mb-4 flex items-center gap-4">
          <Image
            src={project.logo}
            alt={`${project.title} logo`}
            width={48}
            height={48}
            className="rounded-lg"
          />
          <div>
            <h3 className="text-xl font-semibold group-hover:text-primary">
              {project.title}
            </h3>
            <p className="text-sm text-muted-foreground">{project.type}</p>
          </div>
        </div>

        {/* Description */}
        <p className="mb-4 flex-1 text-sm text-muted-foreground line-clamp-4">
          {project.summary}
        </p>

        {/* Tech Stack - Always at bottom */}
        <div className="flex flex-wrap gap-2">
          {project.techStack.map((tech) => (
            <div
              key={tech.name}
              className="flex items-center gap-1.5 rounded-full bg-primary/10 px-3 py-2 text-xs"
            >
              <StackIcon name={tech.icon} style={{ height: 14, width: 14 }} />
              <span className="text-xs text-primary">{tech.name}</span>
            </div>
          ))}
        </div>
      </div>
    </Link>
  );
}
