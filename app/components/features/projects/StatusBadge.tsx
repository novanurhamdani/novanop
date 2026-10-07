import { ProjectStatus } from "../../../../types";

const statusStyles: Record<ProjectStatus, { label: string; dot: string }> = {
  live: {
    label: "LIVE",
    dot: "bg-secondary rounded-full",
  },
  building: {
    label: "BUILDING",
    dot: "bg-primary",
  },
  experiment: {
    label: "EXPERIMENT",
    dot: "bg-primary",
  },
  planned: {
    label: "PLANNED",
    dot: "border border-border bg-transparent rounded-full",
  },
};

export default function StatusBadge({ status }: { status: ProjectStatus }) {
  const style = statusStyles[status];
  return (
    <span className="inline-flex items-center gap-1.5 font-mono text-[10px] font-bold tracking-[0.18em] px-2 py-0.5 border border-border bg-surface text-foreground">
      <span
        className={`inline-block h-2 w-2 ${style.dot}`}
        aria-hidden="true"
      />
      {style.label}
    </span>
  );
}
