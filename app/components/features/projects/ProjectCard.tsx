import Image from 'next/image';
import { Project } from '../../../../types';

interface ProjectCardProps {
  project: Project;
  onClick: () => void;
}

export default function ProjectCard({ project, onClick }: ProjectCardProps) {
  return (
    <div 
      className="project-card bg-card rounded-lg overflow-hidden border border-border group hover:shadow-lg hover:shadow-primary/20 hover:-translate-y-2 transition-all duration-300 cursor-pointer" 
      onClick={onClick}
    >
      <div className="relative w-full h-48">
        <Image 
          src={project.image} 
          alt={project.title} 
          fill
          className="object-cover"
        />
      </div>
      <div className="p-6">
        <h3 className="font-heading text-2xl mb-2">{project.title}</h3>
        <p className="text-foreground/80 mb-4">{project.tagline}</p>
        <div className="flex flex-wrap gap-2">
          {project.tech.map((tech, index) => (
            <span 
              key={index} 
              className="bg-primary/20 text-primary text-xs font-bold px-2 py-1 rounded-full"
            >
              {tech}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}
