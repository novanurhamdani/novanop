import { useEffect, useState } from 'react';

interface LevelUpNotificationProps {
  level: number;
}

export default function LevelUpNotification({ level }: LevelUpNotificationProps) {
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(false);
    }, 5000);

    return () => clearTimeout(timer);
  }, []);

  if (!isVisible) return null;

  return (
    <div className="fixed bottom-24 left-1/2 transform -translate-x-1/2 bg-gradient-to-r from-primary to-secondary text-white py-4 px-8 rounded-lg shadow-lg z-50 fade-in">
      <div className="flex flex-col items-center">
        <div className="text-3xl mb-2">🎉</div>
        <h3 className="font-bold text-xl mb-1">Level Up!</h3>
        <p className="text-center">You&apos;ve reached <span className="font-bold">Level {level}</span></p>
      </div>
    </div>
  );
}
