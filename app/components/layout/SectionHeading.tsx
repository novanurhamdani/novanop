interface SectionHeadingProps {
  eyebrow: string;
  number?: string;
  title: string;
  intro?: string;
  align?: "left" | "center";
  compact?: boolean;
}

export default function SectionHeading({
  eyebrow,
  number,
  title,
  intro,
  align = "left",
  compact = false,
}: SectionHeadingProps) {
  const centered = align === "center";
  return (
    <div
      className={`${compact ? "mb-7 sm:mb-9" : "mb-12 sm:mb-16"} ${
        centered ? "text-center" : ""
      }`}
      data-reveal
    >
      <p
        className={`flex items-center gap-3 justify-start ${
          centered ? "justify-center" : ""
        }`}
      >
        <span
          className={`inline-block h-px w-8 bg-secondary ${
            centered ? "hidden" : ""
          }`}
          aria-hidden="true"
        />
        {number && (
          <span className="bg-primary px-1.5 py-0.5 font-mono text-[0.65rem] font-bold tracking-[0.22em] text-white">
            {number}
          </span>
        )}
        <span className="eyebrow">{eyebrow}</span>
      </p>
      <h2
        className={`${compact ? "mt-3" : "mt-4"} max-w-3xl text-balance font-heading font-extrabold uppercase leading-[0.95] tracking-tight ${
          compact
            ? "text-2xl sm:text-3xl lg:text-4xl"
            : "text-3xl sm:text-4xl lg:text-5xl"
        } ${centered ? "mx-auto" : ""}`}
      >
        {title}
      </h2>
      {intro && (
        <p
          className={`${compact ? "mt-3" : "mt-4"} max-w-2xl text-muted ${
            compact ? "text-sm sm:text-base" : "text-base sm:text-lg"
          } ${centered ? "mx-auto" : ""}`}
        >
          {intro}
        </p>
      )}
    </div>
  );
}
