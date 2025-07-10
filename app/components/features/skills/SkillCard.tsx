import Image from 'next/image';
import { Skill } from '../../../../types';

interface SkillCardProps {
  skill: Skill;
  onClick: () => void;
}

export default function SkillCard({ skill, onClick }: SkillCardProps) {
  return (
    <div 
      className="skill-item bg-card p-4 rounded-lg border border-transparent hover:border-primary transition-all duration-300 cursor-pointer flex flex-col items-center justify-center space-y-2"
      onClick={onClick}
    >
      <div className="text-primary w-12 h-12 relative">
        <Image 
          src={skill.icon} 
          alt={skill.name} 
          width={48} 
          height={48} 
        />
      </div>
      <span className="font-bold">{skill.name}</span>
    </div>
  );
}
