import { CaseStudyBlock } from "../../../../types";

/**
 * A named challenge/decision block - hairline-accented heading plus
 * reasoning. Used for both challenges and key decisions.
 */
export default function TitledBlock({
  block,
  accent = "secondary",
}: {
  block: CaseStudyBlock;
  accent?: "primary" | "secondary";
}) {
  return (
    <div
      className={`border-l-2 pl-4 sm:pl-5 ${
        accent === "primary" ? "border-primary" : "border-secondary"
      }`}
    >
      <h3 className="font-heading font-bold text-base sm:text-lg">
        {block.heading}
      </h3>
      <p className="mt-2 text-sm sm:text-base text-muted leading-relaxed">
        {block.body}
      </p>
    </div>
  );
}
