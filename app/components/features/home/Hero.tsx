import Link from "next/link";
import HeroMascot from "./HeroMascot";

export default function Hero() {
  return (
    <section
      id="hero"
      data-section="hero"
      className="relative overflow-hidden pt-28 sm:pt-36 pb-16 sm:pb-24"
    >
      {/* Restrained engineering backdrop */}
      <div
        className="grid-backdrop absolute inset-0 [mask-image:radial-gradient(ellipse_75%_65%_at_50%_35%,black,transparent)]"
        aria-hidden="true"
      />
      <div
        className="absolute -top-32 right-0 h-96 w-96 rounded-full bg-primary/10 blur-3xl"
        aria-hidden="true"
      />

      <div className="relative container mx-auto px-5 sm:px-6">
        <div className="grid items-center gap-12 lg:grid-cols-12">
          {/* Copy */}
          <div className="lg:col-span-7">
            <p className="eyebrow" data-reveal>
              <span aria-hidden="true">✦</span> The Code Alchemist
            </p>

            <h1
              className="mt-6 font-heading font-black text-4xl sm:text-6xl lg:text-7xl leading-[1.05] tracking-tight"
              data-reveal
            >
              Nova
              <br />
              Nurhamdani
            </h1>

            <p
              className="mt-6 font-heading font-bold text-xl sm:text-2xl text-foreground"
              data-reveal
            >
              Frontend-heavy <span className="text-primary">Full-Stack</span>{" "}
              Software Engineer
            </p>

            <p
              className="mt-4 max-w-xl text-base sm:text-lg text-muted leading-relaxed"
              data-reveal
            >
              I build products, interfaces, and the systems behind them.
            </p>

            <p
              className="mt-6 font-mono text-xs sm:text-sm text-muted/80 tracking-wide"
              data-reveal
            >
              React · Next.js · TypeScript · Go · PostgreSQL
            </p>

            <div
              className="mt-10 flex flex-wrap items-center gap-4"
              data-reveal
            >
              <a
                href="#work"
                className="inline-flex items-center gap-2 bg-primary px-6 py-3 font-semibold text-white transition-all duration-300 hover:bg-purple-dark hover:-translate-y-0.5"
              >
                Explore Work
                <span aria-hidden="true">→</span>
              </a>
              <Link
                href="/resume"
                className="inline-flex items-center gap-2 border border-border px-6 py-3 font-semibold text-foreground transition-all duration-300 hover:border-secondary hover:text-secondary"
              >
                Resume
                <span aria-hidden="true">→</span>
              </Link>
            </div>
          </div>

          {/* Mascot */}
          <div className="lg:col-span-5" data-reveal>
            <HeroMascot />
          </div>
        </div>
      </div>
    </section>
  );
}
