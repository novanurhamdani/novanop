import Image from "next/image";
import type { ReactNode } from "react";
import { twMerge } from "tailwind-merge";

interface ScreenshotFrameProps {
  src: string;
  alt: string;
  domain?: string;
  sizes?: string;
  priority?: boolean;
  className?: string;
  windowClassName?: string;
  imageClassName?: string;
  /** Renders custom fill content (for example the zoomable trigger). */
  children?: ReactNode;
}

/**
 * Uniform screenshot treatment: a dark technical panel containing a
 * standardized mock-browser window, so real screenshots align visually
 * across cards, archives and case-study headers.
 */
export default function ScreenshotFrame({
  src,
  alt,
  domain = "app.domain.com",
  sizes = "100vw",
  priority = false,
  className,
  windowClassName,
  imageClassName,
  children,
}: ScreenshotFrameProps) {
  return (
    <div
      className={twMerge(
        "relative aspect-[16/10] w-full overflow-hidden border-b border-[#1e2430] bg-[#12151b] p-4 sm:p-[37px]",
        className,
      )}
    >
      <div
        className="pointer-events-none absolute inset-0 opacity-30"
        aria-hidden="true"
        style={{
          backgroundImage:
            "linear-gradient(rgba(255,255,255,0.06) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.06) 1px, transparent 1px)",
          backgroundSize: "20px 20px",
        }}
      />

      <div
        className={twMerge(
          "relative flex h-full w-full flex-col overflow-hidden rounded-[10px] border border-[#2a3140] bg-[#181c24] shadow-2xl",
          windowClassName,
        )}
      >
        <div className="flex h-7 shrink-0 items-center justify-between border-b border-[#232936] bg-[#11141b] px-3">
          <div className="flex items-center gap-1.5" aria-hidden="true">
            <span className="h-2.5 w-2.5 rounded-full bg-[#ff5f56]/90" />
            <span className="h-2.5 w-2.5 rounded-full bg-[#ffbd2e]/90" />
            <span className="h-2.5 w-2.5 rounded-full bg-[#27c93f]/90" />
          </div>
          <div className="max-w-[180px] truncate rounded border border-neutral-800/80 bg-[#0a0d12] px-2.5 py-0.5 font-mono text-[10px] text-neutral-400">
            {domain}
          </div>
          <div className="w-4" aria-hidden="true" />
        </div>

        <div className="relative w-full flex-1 overflow-hidden bg-black/40">
          {children ?? (
            <Image
              src={src}
              alt={alt}
              fill
              unoptimized
              priority={priority}
              sizes={sizes}
              className={twMerge("object-cover object-top", imageClassName)}
            />
          )}
        </div>
      </div>
    </div>
  );
}
