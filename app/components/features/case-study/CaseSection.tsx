interface CaseSectionProps {
  index: string; // "01", "02", ...
  title: string;
  variant?: "default" | "cobalt" | "lime";
  layout?: "stacked" | "split";
  eyebrow?: string;
  summary?: string;
  intro?: string;
  children: React.ReactNode;
}

/**
 * Numbered case-study section - engineering-document rhythm,
 * not blog-post styling. Feature variants turn a section into a
 * solid cobalt or lime block to break the dark-page rhythm.
 */
export default function CaseSection({
  index,
  title,
  variant = "default",
  layout = "stacked",
  eyebrow,
  summary,
  intro,
  children,
}: CaseSectionProps) {
  const cobalt = variant === "cobalt";
  const lime = variant === "lime";
  const feature = cobalt || lime;
  const headingText = lime
    ? "text-black"
    : cobalt
      ? "text-white"
      : "text-foreground";
  const labelText = lime
    ? "text-black/70"
    : cobalt
      ? "text-white/80"
      : "text-muted";
  const headingRule = lime
    ? "border-black/20"
    : cobalt
      ? "border-white/30"
      : "border-border";

  const heading = eyebrow ? (
    <div>
      <div className="flex flex-wrap items-center justify-between gap-3">
        <p className="flex items-center gap-3">
          <span
            className={`px-1.5 py-0.5 font-mono text-[10px] font-bold tracking-[0.2em] ${
              lime ? "bg-black text-secondary" : "bg-secondary text-black"
            }`}
          >
            {index}
          </span>
          <span
            className={`font-mono text-[9px] uppercase tracking-[0.18em] ${labelText}`}
          >
            {eyebrow}
          </span>
        </p>
        {summary && (
          <p
            className={`font-mono text-[9px] uppercase tracking-[0.15em] ${labelText}`}
          >
            {summary}
          </p>
        )}
      </div>
      <h2
        className={`mt-3 border-b pb-3 font-heading text-2xl font-extrabold uppercase tracking-wide sm:text-3xl ${headingText} ${headingRule}`}
      >
        {title}
      </h2>
      {intro && (
        <p className={`mt-2 max-w-3xl text-xs leading-relaxed ${labelText}`}>
          {intro}
        </p>
      )}
    </div>
  ) : (
    <div className={layout === "split" ? "lg:col-span-4" : ""}>
      <div className="flex items-center gap-3">
        <span
          className={`inline-block px-1.5 py-0.5 font-mono text-[10px] font-bold tracking-[0.2em] ${
            feature ? "bg-black text-secondary" : "bg-primary text-white"
          }`}
        >
          {index}
        </span>
        <h2
          className={`font-heading text-lg font-extrabold uppercase tracking-wide sm:text-xl ${
            lime ? "text-black" : "text-foreground"
          }`}
        >
          {title}
        </h2>
      </div>
    </div>
  );

  const body =
    layout === "split" ? (
      <div className="grid gap-5 lg:grid-cols-12">
        {heading}
        <div className="lg:col-span-8">{children}</div>
      </div>
    ) : (
      <>
        {heading}
        <div className="mt-4">{children}</div>
      </>
    );

  if (feature) {
    return (
      <section
        id={`case-section-${index}`}
        className={`border-y border-border ${
          cobalt ? "bg-primary text-white" : "bg-secondary text-black"
        }`}
        data-reveal
      >
        <div className="mx-auto max-w-6xl px-4 py-8 sm:px-6 sm:py-10">
          {body}
        </div>
      </section>
    );
  }

  return (
    <section
      id={`case-section-${index}`}
      className="border-t border-border bg-dark py-8 sm:py-10"
      data-reveal
    >
      <div className="mx-auto max-w-6xl px-4 sm:px-6">{body}</div>
    </section>
  );
}
