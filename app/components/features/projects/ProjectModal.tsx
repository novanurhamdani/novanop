import Image from "next/image";
import { Project } from "../../../../types";

interface ProjectModalProps {
  project: Project | null;
  onClose: () => void;
  onGithubClick: (projectId: string) => void;
}

export default function ProjectModal({
  project,
  onClose,
  onGithubClick,
}: ProjectModalProps) {
  if (!project) return null;

  return (
    <div
      className="fixed inset-0 bg-black/70 z-50 flex items-center justify-center p-4"
      onClick={onClose}
    >
      <div
        className="bg-card border border-border rounded-lg max-w-3xl w-full max-h-[90vh] overflow-y-auto p-8 relative fade-in"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          className="absolute top-4 right-4 text-foreground/50 hover:text-primary transition-colors text-2xl"
          onClick={onClose}
        >
          &times;
        </button>

        <div className="relative w-full mb-6">
          <Image
            src={project.image}
            alt={project.title}
            width={1200}
            height={675}
            className="w-full rounded-lg"
            priority
          />
        </div>

        <h2 className="font-heading text-4xl mb-2">{project.title}</h2>

        <div className="flex flex-wrap gap-2 mb-4">
          {project.tech.map((tech, index) => (
            <span
              key={index}
              className="bg-primary/20 text-primary text-xs font-bold px-2 py-1 rounded-full"
            >
              {tech}
            </span>
          ))}
        </div>

        <p className="text-foreground/90 mb-6">{project.description}</p>

        <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4">
          <a
            href={project.liveUrl}
            target="_blank"
            rel="noopener noreferrer"
            className={`text-center bg-primary text-white font-bold py-3 px-6 rounded-full hover:bg-purple-500 transition-all duration-300 ${
              !project.githubUrl ? "w-full" : "flex-1"
            }`}
          >
            View Live Demo
          </a>
          {project.githubUrl && (
            <a
              href={project.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex-1 text-center bg-card border-2 border-primary text-primary font-bold py-3 px-6 rounded-full hover:bg-primary hover:text-white transition-all duration-300"
              onClick={(e) => {
                e.preventDefault();
                onGithubClick(project.id);
                window.open(project.githubUrl, "_blank");
              }}
            >
              View on GitHub
            </a>
          )}
        </div>
      </div>
    </div>
  );
}
