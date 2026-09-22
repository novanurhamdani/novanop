import { ProjectStatus } from "../../../../types";

const statusStyles: Record<ProjectStatus, { label: string; className: string }> =
  {
    live: {
      label: "LIVE",
      className: "text-success border-success/50 bg-success/10",
    },
    building: {
      label: "BUILDING",
      className: "text-secondary border-secondary/50 bg-secondary/10",
    },
    experiment: {
      label: "EXPERIMENT",
      className: "text-primary border-primary/50 bg-primary/10",
    },
    planned: {
      label: "PLANNED",
      className: "text-muted border-muted/50 bg-muted/10",
    },
  };

export default function StatusBadge({ status }: { status: ProjectStatus }) {
  const style = statusStyles[status];
  return (
    <span
      className={`inline-flex items-center font-mono text-[10px] font-medium tracking-[0.18em] px-2 py-0.5 border ${style.className}`}
    >
      {style.label}
    </span>
  );
}
