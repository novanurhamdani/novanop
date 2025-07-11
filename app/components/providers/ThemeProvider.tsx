"use client";

import { useEffect, useState } from "react";

export default function ThemeProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const [mounted, setMounted] = useState(false);

  // After mounting, we have access to the window object
  useEffect(() => {
    // Get theme from localStorage or use system preference
    const storedTheme = localStorage.getItem("theme");
    
    if (storedTheme) {
      // Apply stored theme preference
      document.documentElement.classList.toggle("dark", storedTheme === "dark");
    } else {
      // Check system preference if no stored preference
      const prefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
      document.documentElement.classList.toggle("dark", prefersDark);
      localStorage.setItem("theme", prefersDark ? "dark" : "light");
    }
    
    setMounted(true);
  }, []);

  // Avoid hydration mismatch by only rendering children after mounting
  if (!mounted) {
    return null;
  }

  return <>{children}</>;
}
