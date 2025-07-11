import { Experience } from "../../../../types";

interface ExperienceItemProps {
  experience: Experience;
  isLast?: boolean;
}

export default function ExperienceItem({
  experience,
  isLast = false,
}: ExperienceItemProps) {
  return (
    <div className={`relative ${isLast ? "" : "mb-8"}`}>
      <div className="experience-dot">
        <div className="experience-dot-inner"></div>
      </div>
      <div className="experience-content">
        <h3 className="font-bold text-xl text-primary">{experience.role}</h3>
        <p className="font-semibold text-secondary">{experience.company}</p>
        <p className="text-sm text-foreground/60 mb-2">{experience.period}</p>
        <div
          className="text-foreground/90 experience-description"
          dangerouslySetInnerHTML={{ __html: experience.description }}
        />
      </div>
    </div>
  );
}
