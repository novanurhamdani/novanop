import { User2, FolderKanban, FileText } from "lucide-react";
import { ThemeToggle } from "./theme-toogle";
import Image from "next/image";
import { useTheme } from "next-themes";
import { Dispatch, SetStateAction, useState } from "react";
import { cn } from "@/lib/utils";

type SidebarProps = {
  activeSection: string;
  setActiveSection: Dispatch<SetStateAction<string>>;
};

export function Sidebar({ activeSection, setActiveSection }: SidebarProps) {
  const { theme, setTheme } = useTheme();

  const menuItems = [
    { id: "projects", icon: FolderKanban, label: "Projects" },
    { id: "cv", icon: FileText, label: "CV" },
  ];

  return (
    <aside className="fixed left-0 top-0 z-40 h-screen w-64 border-r bg-background">
      <div className="flex h-full flex-col px-4 py-8">
        <div className="mb-8 flex items-center gap-2">
          <Image
            src={
              theme === "dark" ? "/logo-novanop-white.png" : "/logo-novanop.png"
            }
            alt=""
            width={50}
            height={50}
          />
          <h1 className="text-xl font-bold">Nova Nurhamdani</h1>
          <ThemeToggle theme={theme} setTheme={setTheme} />
        </div>

        <div className="mb-8">
          <div className="flex items-center gap-2">
            <User2 className="h-5 w-5" />
            <span className="text-muted-foreground">Software Engineer</span>
          </div>
        </div>

        <nav className="space-y-2">
          {menuItems.map((item) => {
            const Icon = item.icon;
            return (
              <button
                key={item.id}
                onClick={() => setActiveSection(item.id)}
                className={cn(
                  "flex w-full items-center gap-2 rounded-lg px-3 py-2 transition-colors",
                  activeSection === item.id
                    ? "bg-accent text-accent-foreground"
                    : "hover:bg-accent/50"
                )}
              >
                <Icon className="h-5 w-5" />
                <span>{item.label}</span>
              </button>
            );
          })}
        </nav>
      </div>
    </aside>
  );
}
