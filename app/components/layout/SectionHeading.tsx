interface SectionHeadingProps {
  eyebrow: string;
  title: string;
  intro?: string;
  align?: "left" | "center";
}

export default function SectionHeading({
  eyebrow,
  title,
  intro,
  align = "left",
}: SectionHeadingProps) {
  const centered = align === "center";
  return (
    <div
      className={`mb-12 sm:mb-16 ${centered ? "text-center" : ""}`}
      data-reveal
    >
      <p className="eyebrow flex items-center gap-3 justify-start">
        <span
          className={`inline-block h-px w-8 bg-secondary/60 ${
            centered ? "hidden" : ""
          }`}
          aria-hidden="true"
        />
        {eyebrow}
      </p>
      <h2
        className={`mt-4 font-heading font-extrabold text-3xl sm:text-4xl lg:text-5xl leading-tight max-w-3xl text-balance ${
          centered ? "mx-auto" : ""
        }`}
      >
        {title}
      </h2>
      {intro && (
        <p
          className={`mt-4 text-muted text-base sm:text-lg max-w-2xl ${
            centered ? "mx-auto" : ""
          }`}
        >
          {intro}
        </p>
      )}
    </div>
  );
}
