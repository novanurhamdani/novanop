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
          ? "hover:bg-white hover:text-primary-foreground"
          : "border-primary text-primary hover:bg-primary hover:text-primary-foreground"
      }`}
      style={
        theme === "dark"
          ? {
              borderColor: "var(--electric-blue)",
              color: "var(--electric-blue)",
            }
          : {}
      }
      aria-label="Toggle theme"
    >
      <div className="relative z-10">
        {theme === "dark" ? (
          <Sun className="h-5 w-5" />
        ) : (
          <Moon className="h-5 w-5" />
        )}
      </div>

      {/* Pixelated corners for retro look */}
      <span
        className={`absolute -top-1 -right-1 h-2 w-2 ${
          theme === "dark" ? "" : "bg-primary"
        }`}
        style={
          theme === "dark" ? { backgroundColor: "var(--electric-blue)" } : {}
        }
      ></span>
      <span
        className={`absolute -bottom-1 -left-1 h-2 w-2 ${
          theme === "dark" ? "" : "bg-primary"
        }`}
        style={
          theme === "dark" ? { backgroundColor: "var(--electric-blue)" } : {}
        }
      ></span>

      {/* Animated glow effect for dark theme */}

      <span
        className="absolute inset-0 opacity-20 blur-sm animate-pulse"
        style={{ backgroundColor: "var(--electric-blue)" }}
      ></span>

      {/* Pixel border effect */}
      <span
        className={`absolute top-0 left-0 w-1 h-1 ${
          theme === "dark" ? "" : "bg-primary"
        }`}
        style={
          theme === "dark" ? { backgroundColor: "var(--electric-blue)" } : {}
        }
      ></span>
      <span
        className={`absolute top-0 right-0 w-1 h-1 ${
          theme === "dark" ? "" : "bg-primary"
        }`}
        style={
          theme === "dark" ? { backgroundColor: "var(--electric-blue)" } : {}
        }
      ></span>
      <span
        className={`absolute bottom-0 left-0 w-1 h-1 ${
          theme === "dark" ? "" : "bg-primary"
        }`}
        style={
          theme === "dark" ? { backgroundColor: "var(--electric-blue)" } : {}
        }
      ></span>
      <span
        className={`absolute bottom-0 right-0 w-1 h-1 ${
          theme === "dark" ? "" : "bg-primary"
        }`}
        style={
          theme === "dark" ? { backgroundColor: "var(--electric-blue)" } : {}
        }
      ></span>
    </button>
  );
}
