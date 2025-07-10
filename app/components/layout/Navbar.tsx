import Link from "next/link";
import { useEffect, useState } from "react";
import { GamificationState } from "../../../types";
import Image from "next/image";

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
          <Image
            src="/images/novanop-logo.png"
            width={50}
            height={50}
            alt="Logo"
          />
          <span className="font-heading text-lg font-bold group-hover:text-secondary transition-colors">
            NOVANOP
          </span>
        </Link>

        {/* XP Bar & Level */}
        <div className="flex items-center space-x-4">
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
