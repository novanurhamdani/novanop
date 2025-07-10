import { useEffect, useState } from "react";

interface LoadingScreenProps {
  onLoadComplete: () => void;
}

export default function LoadingScreen({ onLoadComplete }: LoadingScreenProps) {
  const [progress, setProgress] = useState(0);
  const [loadingText, setLoadingText] = useState("Initializing");

  useEffect(() => {
    // Loading messages to display during progress
    const loadingMessages = [
      "Initializing alchemy engine...",
      "Brewing potions...",
      "Gathering magical components...",
      "Calibrating transmutation circles...",
      "Summoning code spirits...",
      "Unlocking arcane knowledge...",
      "Almost ready...",
    ];
    // Simulate loading with increasing progress
    const interval = setInterval(() => {
      setProgress((prevProgress) => {
        // Update loading text at certain progress points
        const newProgress = prevProgress + Math.random() * 3;
        const messageIndex = Math.floor(
          (newProgress / 100) * loadingMessages.length
        );
        setLoadingText(
          loadingMessages[Math.min(messageIndex, loadingMessages.length - 1)]
        );

        if (newProgress >= 100) {
          clearInterval(interval);
          // Add a small delay before completing to show 100%
          setTimeout(() => {
            onLoadComplete();
          }, 500);
          return 100;
        }
        return newProgress;
      });
    }, 150);

    return () => clearInterval(interval);
  }, [onLoadComplete]);

  return (
    <div className="fixed inset-0 bg-background flex flex-col items-center justify-center z-50">
      <div className="w-full max-w-md px-8 py-12">
        {/* Logo/Title */}
        <div className="text-center mb-12">
          <h1 className="font-heading text-4xl font-black uppercase">
            <span className="text-primary">The Code</span>
            <span className="block">Alchemist</span>
          </h1>
          <p className="text-sm text-foreground/70 mt-2">
            Transmuting code into magic...
          </p>
        </div>

        {/* Loading Text */}
        <div className="mb-4 text-center font-mono text-sm text-secondary">
          {loadingText}
        </div>

        {/* Progress Bar */}
        <div className="h-3 bg-card border border-border rounded-full overflow-hidden mb-2">
          <div
            className="h-full bg-orange-400 rounded-full transition-all duration-300 relative"
            style={{ width: `${progress}%` }}
          >
            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent animate-pulse"></div>
          </div>
        </div>

        {/* Progress Percentage */}
        <div className="text-right text-xs font-mono text-foreground/70">
          {Math.round(progress)}%
        </div>
      </div>
    </div>
  );
}
