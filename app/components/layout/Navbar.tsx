"use client";

import Image from "next/image";
import Link from "next/link";
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
      className={`site-header fixed top-0 left-0 right-0 z-50 border-b border-border backdrop-blur-md transition-colors duration-300 ${
        scrolled ? "bg-background" : "bg-background/85"
      }`}
    >
      {/* Ticker strip - system status line, decorative facts only */}
      <div
        className="no-print border-b border-border bg-surface px-4 py-1.5 flex items-center justify-between font-mono text-[10px] tracking-wider text-muted"
        aria-hidden="true"
      >
        <span className="flex items-center gap-2">
          <span className="w-2 h-2 rounded-full bg-secondary" />
          <span className="text-foreground font-bold">THE CODE ALCHEMIST</span>
        </span>
        <span className="hidden md:inline">
          REACT · NEXT.JS · TYPESCRIPT · GO · POSTGRESQL
        </span>
        <span className="text-secondary">EST. 2009</span>
      </div>
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
            aria-label="NOVANOP home"
          >
            <Image
              src="/images/new-logo.png"
              alt=""
              width={4168}
              height={4168}
              sizes="32px"
              unoptimized
              className="h-8 w-8 border border-black object-cover"
            />
            <span className="hidden sm:inline font-mono text-xs sm:text-sm tracking-widest group-hover:text-secondary transition-colors">
              NOVANOP
            </span>
          </Link>
          {gamification && gamification.state.level > 1 && (
            <span
              className="hidden sm:inline-flex items-center font-mono text-[10px] tracking-widest text-black bg-secondary border border-border px-1.5 py-0.5"
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
            className="bg-secondary text-black border border-black px-3 py-1.5 font-bold hover:bg-white transition-colors"
          >
            Contact
          </Link>
        </div>
      </nav>
    </header>
  );
}
