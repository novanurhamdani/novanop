import Link from "next/link";
import { useEffect, useState } from "react";
import { GamificationState } from "../../../types";
import ThemeToggle from "./ThemeToggle";

interface NavbarProps {
  state: GamificationState;
  clickLogo: () => void;
}

export default function Navbar({ state, clickLogo }: NavbarProps) {
  const [scrolled, setScrolled] = useState(false);

  // Handle scroll effect for navbar
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-sm border-b transition-all duration-300 ${
        scrolled ? "border-border/50" : "border-transparent"
      }`}
    >
      <nav className="container mx-auto px-6 py-3 flex justify-between items-center">
        {/* Logo */}
        <Link
          href="#"
          className="flex items-center space-x-2 group"
          onClick={clickLogo}
        >
          {/* Erlenmeyer Flask SVG Icon */}
          <svg
            className="w-8 h-8 text-primary group-hover:text-secondary transition-colors"
            fill="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M18.586 5H5.414A1.414 1.414 0 0 0 4 6.414v1.172A10.958 10.958 0 0 0 9.586 19h4.828a10.958 10.958 0 0 0 5.586-11.414V6.414A1.414 1.414 0 0 0 18.586 5zM8 2h8v2H8V2zm8.414 15H7.586a8.963 8.963 0 0 1-4.172-9.586L3 7.586V6.414A3.414 3.414 0 0 1 5.414 3h13.172A3.414 3.414 0 0 1 21 6.414v1.172l-.414.414A8.963 8.963 0 0 1 16.414 17z" />
          </svg>
          <span className="font-heading text-lg font-bold group-hover:text-secondary transition-colors">
            The Code Alchemist
          </span>
        </Link>

        {/* XP Bar & Level */}
        <div className="flex items-center space-x-4">
          <ThemeToggle />
          <span className="font-bold text-secondary text-sm">
            Lv. {state.level}
          </span>
          <div className="w-32 md:w-48 h-4 bg-card border border-border rounded-full overflow-hidden">
            <div
              className="h-full bg-orange-400 rounded-full transition-all duration-500"
              style={{ width: `${(state.xp / state.xpForNextLevel) * 100}%` }}
            ></div>
          </div>
          <span className="text-xs font-mono w-20 text-right">
            {state.xp} / {state.xpForNextLevel} XP
          </span>
        </div>
      </nav>
    </header>
  );
}
