type ProjectProps = {
  title: string;
  type: string;
  techStack: string[];
};

export function ProjectCard({ title, type, techStack }: ProjectProps) {
  return (
    <div className="group rounded-lg border bg-card p-6 shadow-sm transition-all hover:shadow-md hover:bg-accent/50 hover:cursor-pointer">
      <h3 className="mb-2 text-xl font-semibold">{title}</h3>
      <p className="mb-4 text-sm text-muted-foreground">{type}</p>
      <div className="flex flex-wrap gap-2">
        {techStack.map((tech, index) => (
          <span
            key={index}
            className="rounded-full bg-primary px-3 py-1 text-xs text-primary-foreground"
          >
            {tech}
          </span>
        ))}
      </div>
    </div>
  );
}
