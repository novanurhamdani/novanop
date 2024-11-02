type ProjectProps = {
  title: string;
  type: string;
  techStack: string[];
};

export function ProjectCard({ title, type, techStack }: ProjectProps) {
  return (
    <div className="rounded-lg border bg-card p-6 shadow-sm transition-all hover:shadow-md">
      <h3 className="mb-2 text-xl font-semibold">{title}</h3>
      <p className="mb-4 text-sm text-muted-foreground">{type}</p>
      <div className="flex flex-wrap gap-2">
        {techStack.map((tech, index) => (
          <span
            key={index}
            className="rounded-full bg-secondary px-3 py-1 text-xs"
          >
            {tech}
          </span>
        ))}
      </div>
    </div>
  );
}
