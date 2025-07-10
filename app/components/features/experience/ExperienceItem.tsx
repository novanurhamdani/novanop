import { Experience } from '../../../../types';

interface ExperienceItemProps {
  experience: Experience;
}

export default function ExperienceItem({ experience }: ExperienceItemProps) {
  return (
    <div className="mb-8 relative">
      <div className="absolute -left-1.5 mt-1.5 w-3 h-3 bg-primary rounded-full border border-background"></div>
      <h3 className="font-bold text-xl text-primary">{experience.role}</h3>
      <p className="font-semibold text-secondary">{experience.company}</p>
      <p className="text-sm text-foreground/60 mb-2">{experience.period}</p>
      <p className="text-foreground/90">{experience.description}</p>
    </div>
  );
}
