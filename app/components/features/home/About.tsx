import Image from "next/image";

/**
 * About - intentionally concise placeholder copy, easy to replace later.
 * Communicates product mindset + curiosity + engineering + the alchemist.
 */
export default function About() {
  return (
    <section
      id="about"
      data-section="about"
      className="border-t border-border bg-white text-black"
    >
      <div className="mx-auto max-w-6xl px-4 py-10 sm:px-6 sm:py-12">
        <div className="grid items-center gap-6 lg:grid-cols-12 lg:gap-8">
          <div className="lg:col-span-4" data-reveal>
            <p className="eyebrow">
              <span className="bg-primary px-1 py-0.5 text-white">07</span>{" "}
              About / the person behind the code
            </p>
            <h2 className="mt-4 font-heading text-3xl font-black uppercase leading-[0.9] tracking-tight sm:text-4xl">
              Engineering with real-world empathy &amp; rigor.
            </h2>
            <div
              className="profile-image-container relative mt-5 aspect-square w-24 shadow-brutal-blue sm:w-28"
              tabIndex={0}
              aria-label="Nova's photo - flip between the Code Alchemist avatar and the real photo"
            >
              <div className="profile-image-inner">
                <div className="profile-image-front">
                  <Image
                    src="/images/photo-new-2d.png"
                    alt="The Code Alchemist avatar"
                    fill
                    className="border-2 border-black object-cover"
                  />
                </div>
                <div className="profile-image-back">
                  <Image
                    src="/images/photo-new.png"
                    alt="Nova Nurhamdani"
                    fill
                    className="border-2 border-black object-cover"
                  />
                </div>
              </div>
            </div>
            <p className="mt-2 font-mono text-[9px] uppercase tracking-[0.16em] text-neutral-500">
              hover / focus to meet the human
            </p>
          </div>

          <div
            className="border-l-2 border-primary bg-neutral-100 p-5 text-sm leading-relaxed text-neutral-700 sm:p-7 sm:text-base lg:col-span-8"
            data-reveal
          >
            <p className="max-w-3xl">
              I started programming in 2009, then spent years inside information
              systems, internal audit, and financial operations before returning
              to code in 2021.
            </p>
            <p className="mt-4 max-w-3xl">
              Coming back through frontend taught me how people actually
              interact with software, and production financial and payment
              systems showed me where the real problems live - the workflows
              behind the screen: API contracts, data models, operational edge
              cases.
            </p>
            <p className="mt-4 max-w-3xl">
              So now I build toward both: Next.js and TypeScript on the surface,
              Go and PostgreSQL underneath. The Code Alchemist persona stuck
              around - it still fits. I like systems that feel like magic on the
              surface and behave like clockwork underneath.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
