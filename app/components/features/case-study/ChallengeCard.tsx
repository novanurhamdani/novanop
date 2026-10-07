import { CaseStudyBlock } from "../../../../types";

export default function ChallengeCard({
  block,
  index,
}: {
  block: CaseStudyBlock;
  index: number;
}) {
  const number = String(index + 1).padStart(2, "0");

  return (
    <article className="flex min-h-52 flex-col border border-border bg-card p-4 sm:p-5">
      <div className="flex items-center justify-between gap-3 border-b border-border pb-3">
        <span className="font-mono text-[9px] font-bold uppercase tracking-[0.18em] text-secondary">
          Challenge // {number}
        </span>
        <span
          className="flex h-4 w-4 items-center justify-center rounded-full border border-border-muted font-mono text-[9px] text-muted"
          aria-hidden="true"
        >
          +
        </span>
      </div>

      <h3 className="mt-3 font-heading text-sm font-extrabold uppercase leading-snug text-foreground sm:text-base">
        {block.heading}
      </h3>
      <p className="mt-2 text-xs leading-relaxed text-muted sm:text-sm">
        {block.body}
      </p>

      <div className="mt-auto flex items-center justify-between gap-3 border-t border-border pt-3">
        <span className="font-mono text-[8px] uppercase tracking-[0.16em] text-dark-muted">
          Engineering challenge
        </span>
        <span className="h-1.5 w-1.5 bg-secondary" aria-hidden="true" />
      </div>
    </article>
  );
}
