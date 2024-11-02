import { Code2, User2 } from "lucide-react";
import { ThemeToggle } from "./theme-toogle";

export function Sidebar() {
  return (
    <aside className="fixed left-0 top-0 z-40 h-screen w-64 border-r bg-background">
      <div className="flex h-full flex-col px-4 py-8">
        <div className="mb-8 flex items-center gap-2">
          <Code2 className="h-8 w-8" />
          <h1 className="text-xl font-bold">Your Name</h1>
        </div>

        <div className="mb-8">
          <div className="flex items-center gap-2">
            <User2 className="h-5 w-5" />
            <span className="text-muted-foreground">Full Stack Developer</span>
          </div>
        </div>

        <div className="mt-auto">
          <ThemeToggle />
        </div>
      </div>
    </aside>
  );
}
