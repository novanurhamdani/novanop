import { Badge } from '../../../../types';

interface BadgeNotificationProps {
  badge: Badge | null;
}

export default function BadgeNotification({ badge }: BadgeNotificationProps) {
  if (!badge) return null;
  
  return (
    <div className="fixed bottom-8 right-8 bg-card border-2 border-secondary rounded-lg shadow-2xl p-4 flex items-center space-x-4 z-50 fade-in">
      <div className="text-4xl">{badge.icon}</div>
      <div>
        <h4 className="font-bold text-secondary">Badge Unlocked!</h4>
        <p className="text-sm">{badge.name}</p>
      </div>
    </div>
  );
}
