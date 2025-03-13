"use client";

import { Moon, Sun } from "lucide-react";

type ThemeToggleProps = {
  theme: string | undefined;
  setTheme: (theme: string) => void;
};

export function ThemeToggle({ theme, setTheme }: ThemeToggleProps) {
  return (
    <button
      onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
      className={`relative flex h-10 w-10 items-center justify-center border-2 transition-all duration-300 ${
        theme === "dark"
          ? "border-electric-blue text-electric-blue hover:bg-electric-blue hover:text-background"
          : "border-primary text-primary hover:bg-primary hover:text-primary-foreground"
      }`}
      aria-label="Toggle theme"
    >
      {theme === "dark" ? (
        <Sun className="h-5 w-5" />
      ) : (
        <Moon className="h-5 w-5" />
      )}
      <span className={`absolute -top-1 -right-1 h-2 w-2 ${theme === "dark" ? "bg-electric-blue" : "bg-primary"}`}></span>
      <span className={`absolute -bottom-1 -left-1 h-2 w-2 ${theme === "dark" ? "bg-electric-blue" : "bg-primary"}`}></span>
    </button>
  );
}
