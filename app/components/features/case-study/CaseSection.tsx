interface CaseSectionProps {
  index: string; // "01", "02", ...
  title: string;
  children: React.ReactNode;
}

/**
 * Numbered case-study section — engineering-document rhythm,
 * not blog-post styling.
 */
export default function CaseSection({
  index,
  title,
  children,
}: CaseSectionProps) {
  return (
    <section className="border-t border-border py-10 sm:py-14" data-reveal>
      <div className="grid gap-6 lg:grid-cols-12">
        <div className="lg:col-span-4">
          <p className="font-mono text-xs tracking-[0.25em] text-secondary">
            {index}
          </p>
          <h2 className="mt-2 font-heading font-extrabold text-xl sm:text-2xl uppercase tracking-wide">
            {title}
          </h2>
        </div>
        <div className="lg:col-span-8">{children}</div>
      </div>
    </section>
  );
}
