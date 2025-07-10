import { Badge } from '../../../../types';

interface BadgeDisplayProps {
  badge: Badge;
}

export default function BadgeDisplay({ badge }: BadgeDisplayProps) {
  return (
    <div 
      className={`text-center p-4 bg-card border border-border rounded-lg transition-all duration-300 ${
        badge.unlocked ? 'opacity-100 transform scale-100' : 'opacity-40 transform scale-95'
      }`}
      title={badge.description}
    >
      <div className="text-5xl mb-2">{badge.icon}</div>
      <h3 className={`font-bold ${badge.unlocked ? 'text-secondary' : 'text-foreground/50'}`}>
        {badge.name}
      </h3>
    </div>
  );
}
