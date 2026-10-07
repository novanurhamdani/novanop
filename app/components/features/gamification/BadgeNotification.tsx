import { Badge } from "../../../../types";

interface BadgeNotificationProps {
  badge: Badge | null;
}

export default function BadgeNotification({ badge }: BadgeNotificationProps) {
  if (!badge) return null;

  return (
    <div className="no-print fixed bottom-8 right-8 bg-dark border-2 border-secondary shadow-brutal p-4 flex items-center space-x-4 z-50 fade-in">
      <div className="text-4xl">{badge.icon}</div>
      <div>
        <h4 className="font-bold text-secondary">Badge Unlocked!</h4>
        <p className="text-sm text-white">{badge.name}</p>
      </div>
    </div>
  );
}
