import Link from "next/link";
import HeroMascot from "./HeroMascot";

export default function Hero() {
  return (
    <section
      id="hero"
      data-section="hero"
      className="relative overflow-hidden border-b-4 border-primary bg-white pt-24 pb-8 text-black sm:pt-28 sm:pb-10"
    >
      <div
        className="grid-backdrop-light pointer-events-none absolute inset-0 [mask-image:linear-gradient(to_bottom,black,transparent_90%)]"
        aria-hidden="true"
      />

      <span
        className="pointer-events-none absolute right-[4%] top-32 hidden select-none font-mono text-5xl font-bold text-secondary lg:block"
        aria-hidden="true"
      >
        ✕
      </span>
      <span
        className="pointer-events-none absolute bottom-8 left-[38%] hidden select-none font-mono text-2xl font-bold text-primary lg:block"
        aria-hidden="true"
      >
        +
      </span>

      <div className="relative mx-auto max-w-6xl px-4 sm:px-6">
        <div
          className="grid overflow-hidden border-2 border-black shadow-brutal-blue lg:grid-cols-12"
          data-reveal
        >
          <div className="relative z-10 px-6 py-8 sm:px-10 sm:py-10 lg:col-span-7 lg:px-12 lg:py-12">
            <p className="eyebrow">
              <span aria-hidden="true">+</span> The Code Alchemist
              <span className="ml-2 text-white/70">/ Nova Nurhamdani</span>
            </p>

            <h1 className="mt-7 font-heading text-[clamp(2.55rem,8vw,5.8rem)] font-black uppercase leading-[0.82] tracking-[-0.055em] sm:mt-8 lg:text-[clamp(3.8rem,5.6vw,5.8rem)]">
              <span className="block">I build</span>
              <span className="block">products.</span>
              <span className="block text-primary">interfaces.</span>
              <span className="block">systems.</span>
            </h1>

            <p className="mt-6 max-w-xl font-heading text-base font-bold sm:mt-7 sm:text-lg">
              Frontend-heavy <span className="text-primary">Full-Stack</span>{" "}
              Software Engineer
            </p>

            <p className="mt-2 max-w-xl text-sm leading-relaxed text-neutral-600 sm:text-base">
              I build products, interfaces, and the{" "}
              <span className="bg-secondary px-1 text-black">
                systems behind them.
              </span>
            </p>

            <p className="mt-4 font-mono text-[10px] tracking-wide text-neutral-500 sm:text-xs">
              React · Next.js · TypeScript · Go · PostgreSQL
            </p>

            <div className="mt-6 flex flex-wrap items-center gap-3 sm:mt-7">
              <a
                href="#work"
                className="btn-brutal inline-flex items-center gap-2 bg-secondary px-4 py-2.5 text-xs text-black sm:px-5"
              >
                Explore Work
              </a>
              <Link
                href="/resume"
                className="btn-brutal inline-flex items-center gap-2 bg-black px-4 py-2.5 text-xs text-white sm:px-5"
              >
                Resume
                <span aria-hidden="true">→</span>
              </Link>
            </div>
          </div>

          <div className="relative flex min-h-[300px] items-center justify-center overflow-hidden border-t-2 border-black bg-dark grid-backdrop-dark px-6 py-10 sm:min-h-[360px] lg:col-span-5 lg:border-l-2 lg:border-t-0">
            <span
              className="absolute right-5 top-5 font-mono text-[9px] tracking-[0.2em] text-secondary"
              aria-hidden="true"
            >
              NOV / 001
            </span>
            <HeroMascot />
            <span
              className="absolute bottom-4 left-5 bg-black px-2 py-1 font-mono text-[9px] tracking-[0.2em] text-secondary"
              aria-hidden="true"
            >
              PRODUCT · INTERFACE · SYSTEM
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}
