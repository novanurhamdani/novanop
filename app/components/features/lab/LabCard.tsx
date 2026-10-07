import Link from "next/link";
import { LabItem } from "../../../../types";
import StatusBadge from "../projects/StatusBadge";

interface LabCardProps {
  item: LabItem;
  accent?: "cobalt" | "lime";
  compact?: boolean;
  index?: number;
}

export default function LabCard({
  item,
  accent,
  compact = false,
  index = 0,
}: LabCardProps) {
  const cobalt = accent === "cobalt";
  const lime = accent === "lime";
  const focus = item.focus ?? [];
  const previewFocus = focus.slice(0, 2);
  const remainingFocus = compact ? [] : focus.slice(2);

  const content = (
    <>
      <div className="flex items-start justify-between gap-3">
        <div>
          <p
            className={`font-mono text-[8px] uppercase tracking-[0.17em] ${
              lime ? "text-black/70" : cobalt ? "text-white" : "text-muted"
            }`}
          >
            {String(index + 1).padStart(2, "0")} /{" "}
            {item.status === "planned"
              ? "Planned blueprint"
              : "Active experiment"}
          </p>
          <h3
            className={`mt-2 font-heading font-extrabold uppercase leading-tight ${
              compact ? "text-base" : "text-lg sm:text-xl"
            }`}
          >
            {item.title}
          </h3>
        </div>
        <StatusBadge status={item.status} />
      </div>

      <p
        className={`mt-1 text-xs ${
          lime ? "text-black/80" : cobalt ? "text-white" : "text-muted"
        }`}
      >
        {item.subtitle}
      </p>

      <div
        className={`mt-3 border p-2.5 ${
          lime
            ? "border-black/30 bg-black/5"
            : cobalt
              ? "border-white/30 bg-black/20"
              : "border-border bg-black/50"
        }`}
      >
        <div className="mb-2 flex items-center justify-between gap-2">
          <p
            className={`font-mono text-[7px] uppercase tracking-[0.18em] ${
              lime ? "text-black" : cobalt ? "text-white" : "text-dark-muted"
            }`}
          >
            Focus areas
          </p>
          <span
            className={`font-mono text-[7px] ${
              lime ? "text-black/70" : cobalt ? "text-white" : "text-muted"
            }`}
          >
            {String(focus.length).padStart(2, "0")} / SCOPE
          </span>
        </div>
        <div className="flex flex-wrap gap-1">
          {previewFocus.map((itemFocus) => (
            <span
              key={itemFocus}
              className={`border px-1.5 py-1 font-mono text-[8px] ${
                lime
                  ? "border-black/25 text-black"
                  : cobalt
                    ? "border-white/30 text-white"
                    : "border-border text-foreground/85"
              }`}
            >
              {itemFocus}
            </span>
          ))}
        </div>
      </div>

      {remainingFocus.length > 0 && (
        <ul className="mt-3 space-y-1">
          {remainingFocus.map((itemFocus) => (
            <li
              key={itemFocus}
              className={`flex items-baseline gap-1.5 font-mono text-[9px] leading-relaxed ${
                lime ? "text-black/80" : cobalt ? "text-white" : "text-muted"
              }`}
            >
              <span
                className={`shrink-0 ${lime ? "text-black" : "text-secondary"}`}
                aria-hidden="true"
              >
                ▸
              </span>
              {itemFocus}
            </li>
          ))}
        </ul>
      )}

      <div
        className={`flex flex-wrap items-center justify-between gap-2 border-t pt-3 ${
          compact ? "mt-3" : "mt-auto"
        } ${
          lime
            ? "border-black/25"
            : cobalt
              ? "border-white/30"
              : "border-border"
        }`}
      >
        {item.stack && (
          <p
            className={`font-mono text-[8px] ${
              lime ? "text-black/80" : cobalt ? "text-white" : "text-muted"
            }`}
          >
            {item.stack.join(" · ")}
          </p>
        )}
        {item.href && (
          <span
            className={`inline-flex items-center gap-1.5 font-mono text-[9px] font-bold uppercase tracking-widest ${
              lime ? "text-black" : cobalt ? "text-white" : "text-secondary"
            }`}
          >
            Inspect details <span aria-hidden="true">→</span>
          </span>
        )}
      </div>
    </>
  );

  const className = `flex h-full flex-col border p-4 transition-all duration-150 hover:-translate-y-0.5 sm:p-5 ${
    cobalt
      ? "border-primary bg-primary text-white hover:shadow-brutal-lime"
      : lime
        ? "border-black bg-secondary text-black hover:shadow-brutal-blue"
        : "border-border bg-card hover:border-secondary"
  }`;

  if (item.href) {
    return (
      <Link href={item.href} className={className}>
        {content}
      </Link>
    );
  }

  return <article className={className}>{content}</article>;
}
