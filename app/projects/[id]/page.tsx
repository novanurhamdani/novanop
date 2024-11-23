import { projects } from "@/constants/projects";
import { notFound } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import StackIcon from "tech-stack-icons";
import { Github, Globe } from "lucide-react";

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

  return (
    <div className="container mx-auto px-6 py-8">
      {/* Back Button */}
      <Link
        href="/?section=projects"
        className="mb-8 inline-flex items-center text-sm text-muted-foreground hover:text-primary"
      >
        ← Back to Projects
      </Link>

      <div className="mb-8 flex items-center gap-6">
        <Image
          src={project.logo}
          alt={`${project.title} logo`}
          width={64}
          height={64}
          className="rounded-lg"
        />
        <div>
          <h1 className="text-3xl font-bold">{project.title}</h1>
          <p className="text-lg text-muted-foreground">{project.type}</p>
        </div>
      </div>

      {/* Tech Stack */}
      <div className="mb-8">
        <h2 className="mb-4 text-xl font-semibold">Tech Stack</h2>
        <div className="flex flex-wrap gap-3">
          {project.techStack.map((tech) => (
            <div
              key={tech.name}
              className="flex items-center gap-2 rounded-full bg-primary/10 px-4 py-2"
            >
              <StackIcon name={tech.icon} style={{ height: 20, width: 20 }} />
              <span className="text-sm text-primary">{tech.name}</span>
            </div>
          ))}
        </div>
      </div>

      {/* Summary */}
      <div className="mb-8">
        <h2 className="mb-4 text-xl font-semibold">Summary</h2>
        <p className="text-muted-foreground">{project.summary}</p>
      </div>

      {/* Description */}
      <div className="mb-8">
        <h2 className="mb-4 text-xl font-semibold">Description</h2>
        <div className="prose prose-gray max-w-none dark:prose-invert text-muted-foreground">
          {project.description.split("\n").map((paragraph, index) =>
            paragraph.trim() ? (
              <p key={index} className="mb-4">
                {paragraph.trim()}
              </p>
            ) : (
              <br key={index} />
            )
          )}
        </div>
      </div>

      {/* Demo Video */}
      {project.demoVideo && (
        <div className="mb-8">
          <h2 className="mb-4 text-xl font-semibold">Demo Video</h2>
          <div className="aspect-video overflow-hidden rounded-lg">
            <iframe
              src={project.demoVideo}
              className="h-full w-full"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            />
          </div>
        </div>
      )}

      {/* Project Images */}
      {project.images && project.images.length > 0 && (
        <div className="mb-8">
          <h2 className="mb-4 text-xl font-semibold">Screenshots</h2>
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {project.images.map((image, index) => (
              <Image
                key={index}
                src={image}
                alt={`${project.title} screenshot ${index + 1}`}
                width={400}
                height={300}
                className="rounded-lg"
              />
            ))}
          </div>
        </div>
      )}

      {/* Action Buttons */}
      <div className="flex flex-col md:flex-row gap-4">
        {project.liveDemo && (
          <Link
            href={project.liveDemo}
            target="_blank"
            className="flex justify-center items-center gap-2 rounded-lg bg-primary px-6 py-2 text-primary-foreground hover:bg-primary/90"
          >
            <Globe className="w-4 h-4" />
            View Live Demo
          </Link>
        )}
        {project.githubRepo && (
          <Link
            href={project.githubRepo}
            target="_blank"
            className="flex justify-center items-center gap-2 rounded-lg bg-secondary px-6 py-2 text-secondary-foreground hover:bg-secondary/90"
          >
            <Github className="w-4 h-4" />
            View Source Code
          </Link>
        )}
      </div>
    </div>
  );
}
