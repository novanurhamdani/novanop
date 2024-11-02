import { User2 } from "lucide-react";
import { ThemeToggle } from "./theme-toogle";
import Image from "next/image";
import { useTheme } from "next-themes";

export function Sidebar() {
  const { theme, setTheme } = useTheme();

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
      </div>
    </aside>
  );
}
