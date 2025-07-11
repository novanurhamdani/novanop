"use client";

import { Education } from "../../../../types";

interface EducationItemProps {
  education: Education;
}

const EducationItem = ({ education }: EducationItemProps) => {
  return (
    <div className="education-item mb-8 relative">
      <div className="flex flex-col">
        <h3 className="text-xl font-bold text-primary mb-1">
          {education.degree}
        </h3>
        <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center mb-2">
          <h4 className="text-lg font-semibold">{education.institution}</h4>
          <span className="text-sm text-foreground/70">
            {education.graduationDate}
          </span>
        </div>
        <p className="text-foreground/90 mb-2">{education.description}</p>
        {education.gpa && (
          <p className="text-sm font-semibold text-primary">
            Current GPA: {education.gpa}
          </p>
        )}
      </div>

      {/* Decorative elements */}
      <div className="absolute left-0 top-0 w-3 h-3 rounded-full bg-primary -translate-x-[1.5rem]"></div>
    </div>
  );
};

export default EducationItem;
