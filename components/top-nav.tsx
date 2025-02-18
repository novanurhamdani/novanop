"use client";

import { User2, FolderKanban, FileText } from "lucide-react";
import Image from "next/image";
import { useTheme } from "next-themes";
import { Dispatch, SetStateAction } from "react";
import { cn } from "@/lib/utils";
import { ThemeToggle } from "./theme-toogle";

type TopNavProps = {
  activeSection: string;
  setActiveSection: Dispatch<SetStateAction<string>>;
};

export function TopNav({ activeSection, setActiveSection }: TopNavProps) {
  const { theme, setTheme } = useTheme();

  const menuItems = [
    { id: "cv", icon: FileText, label: "CV" },
    { id: "projects", icon: FolderKanban, label: "Projects" },
  ];

  return (
    <header className="fixed left-0 right-0 top-0 z-40 border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="flex h-8 w-8 items-center justify-center rounded-lg">
              <Image
                src={
                  theme === "dark"
                    ? "/logo-novanop-white.png"
                    : "/logo-novanop.png"
                }
                alt=""
                width={50}
                height={50}
              />
            </div>
            <div>
              <h1 className="text-lg font-bold">Nova Nurhamdani</h1>
              <div className="flex items-center gap-1 text-sm text-muted-foreground">
                <User2 className="h-3 w-3" />
                <span>Frontend Engineer</span>
              </div>
            </div>
          </div>

          <div className="flex items-center gap-4">
            <nav className="flex gap-1">
              {menuItems.map((item) => {
                const Icon = item.icon;
                return (
                  <button
                    key={item.id}
                    onClick={() => setActiveSection(item.id)}
                    className={cn(
                      "flex items-center gap-2 rounded-lg px-3 py-2 text-sm transition-colors",
                      activeSection === item.id
                        ? "bg-primary text-primary-foreground"
                        : "hover:bg-accent"
                    )}
                  >
                    <Icon className="h-4 w-4" />
                    <span className="hidden sm:inline">{item.label}</span>
                  </button>
                );
              })}
            </nav>
            <ThemeToggle theme={theme} setTheme={setTheme} />
          </div>
        </div>
      </div>
    </header>
  );
}
