import Image from "next/image";
import SectionHeading from "../../layout/SectionHeading";

/**
 * About - intentionally concise placeholder copy, easy to replace later.
 * Communicates product mindset + curiosity + engineering + the alchemist.
 */
export default function About() {
  return (
    <section
      id="about"
      data-section="about"
      className="border-t border-border/60"
    >
      <div className="container mx-auto px-5 sm:px-6 py-20 sm:py-28">
        <SectionHeading eyebrow="About" title="The person behind the code." />

        <div className="grid items-start gap-10 md:grid-cols-12">
          {/* Photo - flip between the alchemist and the real person */}
          <div className="md:col-span-4" data-reveal>
            <div
              className="profile-image-container relative mx-auto aspect-square w-48 sm:w-56 md:w-full md:max-w-xs"
              tabIndex={0}
              aria-label="Nova's photo - flip between the Code Alchemist avatar and the real photo"
            >
              <div className="profile-image-inner">
                <div className="profile-image-front">
                  <Image
                    src="/images/photo.png"
                    alt="The Code Alchemist avatar"
                    fill
                    className="border border-border object-cover"
                  />
                </div>
                <div className="profile-image-back">
                  <Image
                    src="/images/photo-real.png"
                    alt="Nova Nurhamdani"
                    fill
                    className="border border-border object-cover"
                  />
                </div>
              </div>
            </div>
            <p className="mt-3 text-center font-mono text-[10px] uppercase tracking-[0.2em] text-muted/60">
              hover / focus to meet the human
            </p>
          </div>

          {/* Copy */}
          <div
            className="md:col-span-8 space-y-5 text-foreground/85 leading-relaxed max-w-2xl"
            data-reveal
          >
            <p>
              I started programming in 2009, then spent years inside information
              systems, internal audit, and financial operations before returning
              to code in 2021.
            </p>
            <p>
              Coming back through frontend taught me how people actually
              interact with software, and production financial and payment
              systems showed me where the real problems live - the workflows
              behind the screen: API contracts, data models, operational edge
              cases.
            </p>
            <p>
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
