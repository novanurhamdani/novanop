"use client";

import { useState, useEffect } from "react";
import { useTheme } from "next-themes";
import Image from "next/image";
import { ThemeToggle } from "./theme-toogle";

interface NavItem {
  id: string;
  label: string;
}

export function RetroNavbar() {
  const { theme, setTheme } = useTheme();
  const [activeSection, setActiveSection] = useState<string>("home");
  const [isScrolled, setIsScrolled] = useState<boolean>(false);

  const navItems: NavItem[] = [
    { id: "home", label: "Home" },
    { id: "about", label: "About Me" },
    { id: "portfolio", label: "Portfolio" },
    { id: "experience", label: "Experience" },
    { id: "contact", label: "Contact" },
  ];

  // Handle scroll event to highlight active section
  useEffect(() => {
    const handleScroll = () => {
      // Set navbar background when scrolled
      setIsScrolled(window.scrollY > 50);

      // Get all sections
      const sections = navItems
        .map((item) => document.getElementById(item.id))
        .filter(Boolean);

      // Find the section that is currently in view
      const currentSection = sections.find((section) => {
        if (!section) return false;
        const rect = section.getBoundingClientRect();
        return rect.top <= 150 && rect.bottom >= 150;
      });

      if (currentSection) {
        setActiveSection(currentSection.id);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [navItems]);

  // Scroll to section when nav item is clicked
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
      setActiveSection(id);
    }
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? theme === "dark"
            ? "bg-background/90 backdrop-blur-sm border-b"
            : "bg-background/90 backdrop-blur-sm border-b border-primary"
          : "bg-transparent"
      }`}
      style={isScrolled && theme === "dark" ? { borderColor: 'var(--electric-blue)' } : {}}
    >
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <div className="flex items-center gap-3">
            <div className="h-10 w-10 relative">
              <Image
                src={
                  theme === "dark"
                    ? "/logo-novanop-white.png"
                    : "/logo-novanop.png"
                }
                alt="Nova Nurhamdani"
                fill
                className="object-contain"
              />
            </div>
            <div>
              <h1
                className={`text-sm md:text-base ${
                  theme === "dark" ? "" : "text-primary font-bold"
                }`}
                style={theme === "dark" ? {
                  color: 'var(--electric-blue)',
                  textShadow: '0 0 5px var(--electric-blue), 0 0 10px var(--electric-blue), 0 0 15px var(--electric-blue)'
                } : {}}
              >
                novanop.com
              </h1>
            </div>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-1">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                className={`px-3 py-2 text-sm transition-all ${
                  activeSection === item.id
                    ? theme === "dark"
                      ? "font-bold"
                      : "text-primary font-bold"
                    : "hover:text-primary"
                }`}
                style={activeSection === item.id && theme === "dark" ? {
                  color: 'var(--electric-blue)',
                  textShadow: '0 0 5px var(--electric-blue), 0 0 10px var(--electric-blue), 0 0 15px var(--electric-blue)'
                } : {}}
              >
                <span className="relative">
                  {item.label}
                  {activeSection === item.id && (
                    <span
                      className={`absolute -bottom-1 left-0 right-0 h-0.5 ${
                        theme === "dark" ? "bg-electric-blue" : "bg-primary"
                      }`}
                    ></span>
                  )}
                </span>
              </button>
            ))}
            <ThemeToggle theme={theme} setTheme={setTheme} />
          </nav>

          {/* Mobile Navigation Toggle */}
          <div className="md:hidden flex items-center gap-2">
            <ThemeToggle theme={theme} setTheme={setTheme} />
            <button
              className={`px-2 py-1 text-xs border-2 ${
                theme === "dark"
                  ? "border-electric-blue text-electric-blue"
                  : "border-primary text-primary"
              }`}
              onClick={() => {
                const mobileNav = document.getElementById("mobile-nav");
                if (mobileNav) {
                  mobileNav.classList.toggle("hidden");
                }
              }}
            >
              Menu
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation Menu */}
      <div
        id="mobile-nav"
        className={`hidden md:hidden ${
          theme === "dark"
            ? "bg-background/95 backdrop-blur-sm border-b border-electric-blue"
            : "bg-background/95 backdrop-blur-sm border-b border-primary"
        }`}
      >
        <div className="container mx-auto px-4 py-4">
          <nav className="flex flex-col space-y-2">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => {
                  scrollToSection(item.id);
                  const mobileNav = document.getElementById("mobile-nav");
                  if (mobileNav) {
                    mobileNav.classList.add("hidden");
                  }
                }}
                className={`px-3 py-2 text-sm transition-all ${
                  activeSection === item.id
                    ? theme === "dark"
                      ? "font-bold"
                      : "text-primary font-bold"
                    : "hover:text-primary"
                }`}
                style={activeSection === item.id && theme === "dark" ? {
                  color: 'var(--electric-blue)',
                  textShadow: '0 0 5px var(--electric-blue), 0 0 10px var(--electric-blue), 0 0 15px var(--electric-blue)'
                } : {}}
              >
                <span className="relative">
                  {item.label}
                  {activeSection === item.id && (
                    <span
                      className={`absolute -bottom-1 left-0 right-0 h-0.5 ${
                        theme === "dark" ? "bg-electric-blue" : "bg-primary"
                      }`}
                    ></span>
                  )}
                </span>
              </button>
            ))}
          </nav>
        </div>
      </div>
    </header>
  );
}
