"use client";

import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { useGamificationContext } from "../providers/GamificationProvider";

const primaryLinks = [
  { href: "/work", label: "Work" },
  { href: "/lab", label: "Lab" },
  { href: "/about", label: "About" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();
  const gamification = useGamificationContext();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 40);
    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const isActive = (href: string) =>
    pathname === href || pathname.startsWith(`${href}/`);

  return (
    <header
      className={`site-header fixed top-0 left-0 right-0 z-50 border-b backdrop-blur-md transition-colors duration-300 ${
        scrolled
          ? "border-border/60 bg-background/85"
          : "border-transparent bg-transparent"
      }`}
    >
      <nav
        className="container mx-auto px-5 sm:px-6 h-14 sm:h-16 flex items-center justify-between gap-3"
        aria-label="Main navigation"
      >
        {/* Logo + level chip */}
        <div className="flex items-center gap-3 min-w-0">
          <Link
            href="/"
            className="flex items-center gap-2 group shrink-0"
            onClick={() => gamification?.clickLogo()}
            aria-label="Novanop home"
          >
            <Image
              src="/images/novanop-logo.png"
              width={30}
              height={30}
              alt=""
              className="h-7 w-7 sm:h-8 sm:w-8"
            />
            <span className="hidden sm:inline font-heading text-sm sm:text-base font-extrabold tracking-wide group-hover:text-secondary transition-colors">
              NOVANOP
            </span>
          </Link>
          {gamification && gamification.state.level > 1 && (
            <span
              className="hidden sm:inline-flex items-center font-mono text-[10px] tracking-widest text-secondary/90 border border-secondary/30 px-1.5 py-0.5"
              title="Visitor level - keep exploring to level up"
            >
              LV.{gamification.state.level}
            </span>
          )}
        </div>

        {/* Links - intentionally quiet */}
        <div className="flex items-center gap-3 sm:gap-6 font-mono text-[11px] sm:text-[13px] uppercase tracking-wider">
          {primaryLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={`transition-colors ${
                isActive(link.href)
                  ? "text-secondary"
                  : "text-muted hover:text-foreground"
              }`}
            >
              {link.label}
            </Link>
          ))}
          <span
            className="hidden sm:block w-px h-4 bg-border"
            aria-hidden="true"
          />
          <Link
            href="/resume"
            className={`transition-colors ${
              isActive("/resume")
                ? "text-secondary"
                : "text-muted hover:text-foreground"
            }`}
          >
            Resume
          </Link>
          <Link
            href="/#contact"
            className="text-secondary hover:text-foreground transition-colors"
          >
            Contact
          </Link>
        </div>
      </nav>
    </header>
  );
}
