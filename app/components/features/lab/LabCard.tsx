import Link from "next/link";
import { LabItem } from "../../../../types";
import StatusBadge from "../projects/StatusBadge";

interface LabCardProps {
  item: LabItem;
}

/**
 * Lab card - the playful end of the spectrum. Dashed borders and a
 * brewing flask keep the Code Alchemist alive where it belongs.
 */
export default function LabCard({ item }: LabCardProps) {
  const inner = (
    <>
      <div className="flex items-start justify-between gap-3">
        <span className="text-2xl" aria-hidden="true">
          ⚗
        </span>
        <StatusBadge status={item.status} />
      </div>
      <h3 className="mt-5 font-heading font-extrabold text-lg">{item.title}</h3>
      <p className="mt-1 text-sm text-muted">{item.subtitle}</p>
      {item.focus && (
        <ul className="mt-4 space-y-1.5">
          {item.focus.map((focus) => (
            <li
              key={focus}
              className="flex items-baseline gap-2 font-mono text-[11px] text-muted/90"
            >
              <span className="text-secondary/70" aria-hidden="true">
                ▸
              </span>
              {focus}
            </li>
          ))}
        </ul>
      )}
      {item.stack && (
        <p className="mt-4 font-mono text-[11px] text-muted/60 tracking-wide border-t border-border/50 pt-3">
          {item.stack.join(" · ")}
        </p>
      )}
      {item.href && (
        <span className="mt-4 inline-flex items-center gap-1.5 font-mono text-[11px] uppercase tracking-widest text-secondary">
          Details <span aria-hidden="true">→</span>
        </span>
      )}
    </>
  );

  const className =
    "block h-full border border-dashed border-border bg-surface/50 p-5 transition-all duration-300 hover:border-secondary/60 hover:-translate-y-0.5";

  if (item.href) {
    return (
      <Link href={item.href} className={className}>
        {inner}
      </Link>
    );
  }
  return <div className={className}>{inner}</div>;
}
