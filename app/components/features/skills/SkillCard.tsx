import Image from 'next/image';
import { Skill } from '../../../../types';

interface SkillCardProps {
  skill: Skill;
  onClick: () => void;
  blackAndWhite?: boolean;
}

export default function SkillCard({ skill, onClick, blackAndWhite = false }: SkillCardProps) {
  return (
    <div 
      className={`skill-item ${blackAndWhite ? 'w-20 h-20' : 'p-4'} rounded-lg border border-transparent hover:border-primary transition-all duration-300 cursor-pointer flex flex-col items-center justify-center`}
      onClick={onClick}
    >
      <div className={`${blackAndWhite ? 'w-12 h-12' : 'w-12 h-12'} relative flex items-center justify-center`}>
        <Image 
          src={skill.icon} 
          alt={skill.name} 
          width={blackAndWhite ? 40 : 48} 
          height={blackAndWhite ? 40 : 48}
          className={blackAndWhite ? 'filter grayscale brightness-0 invert opacity-80' : ''}
          style={{ objectFit: 'contain' }}
        />
      </div>
      {!blackAndWhite && <span className="font-bold">{skill.name}</span>}
    </div>
  );
}
