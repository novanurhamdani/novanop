"use client";

import { useState } from "react";
import { useGamificationContext } from "../../providers/GamificationProvider";
import { site, socialLinks } from "../../../../lib/site";

type FormStatus = "idle" | "sending" | "sent" | "error";

export default function Contact() {
  const [status, setStatus] = useState<FormStatus>("idle");
  const gamification = useGamificationContext();

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setStatus("sending");

    const formData = new FormData(e.currentTarget);

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: formData.get("name"),
          email: formData.get("email"),
          message: formData.get("message"),
        }),
      });

      if (response.ok) {
        setStatus("sent");
        gamification?.submitContactForm();
      } else {
        setStatus("error");
      }
    } catch {
      setStatus("error");
    }
  };

  return (
    <section
      id="contact"
      data-section="contact"
      className="border-t border-border/60"
    >
      <div className="container mx-auto px-5 sm:px-6 py-20 sm:py-28">
        <div className="grid gap-12 lg:grid-cols-2 lg:gap-16">
          {/* Copy + direct links */}
          <div data-reveal>
            <p className="eyebrow">
              Contact <span className="text-muted/60">/ whisper a spell</span>
            </p>
            <h2 className="mt-4 font-heading font-extrabold text-3xl sm:text-4xl lg:text-5xl leading-tight text-balance">
              Have a project, opportunity, or interesting problem?
            </h2>
            <p className="mt-4 max-w-md text-muted leading-relaxed">
              I&apos;m open to product work, engineering roles, and interesting
              technical challenges - especially where frontend meets real
              systems.
            </p>

            <a
              href={`mailto:${site.email}`}
              aria-label="Send email to Nova Nurhamdani"
              className="mt-8 inline-flex items-center gap-2 bg-primary px-6 py-3 font-semibold text-white transition-all duration-300 hover:bg-purple-dark hover:-translate-y-0.5"
            >
              Start a conversation <span aria-hidden="true">→</span>
            </a>

            <ul className="mt-10 space-y-3">
              {socialLinks.map((link) => (
                <li key={link.label} className="flex items-baseline gap-4">
                  <span className="w-20 font-mono text-[10px] uppercase tracking-[0.22em] text-muted/70">
                    {link.label}
                  </span>
                  <a
                    href={link.href}
                    target={
                      link.href.startsWith("mailto") ? undefined : "_blank"
                    }
                    rel="noopener noreferrer"
                    aria-label={link.ariaLabel}
                    className="font-mono text-sm text-foreground/85 hover:text-secondary transition-colors"
                  >
                    {link.value}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Form - same /api/contact backend as before */}
          <div data-reveal>
            {status === "sent" ? (
              <div className="border border-success/40 bg-success/10 p-8 text-center">
                <p className="text-3xl" aria-hidden="true">
                  🕊️
                </p>
                <h3 className="mt-3 font-heading font-bold text-xl text-success">
                  Message dispatched!
                </h3>
                <p className="mt-2 text-sm text-muted">
                  Thank you for reaching out. The alchemist will reply shortly.
                </p>
              </div>
            ) : (
              <form
                onSubmit={handleSubmit}
                className="border border-border bg-card p-6 sm:p-8"
              >
                <div className="mb-5">
                  <label
                    htmlFor="contact-name"
                    className="mb-2 block font-mono text-[11px] uppercase tracking-[0.2em] text-muted"
                  >
                    Name
                  </label>
                  <input
                    type="text"
                    id="contact-name"
                    name="name"
                    required
                    autoComplete="name"
                    className="w-full border border-border bg-background px-3 py-2.5 text-sm focus:border-primary focus:outline-none"
                  />
                </div>
                <div className="mb-5">
                  <label
                    htmlFor="contact-email"
                    className="mb-2 block font-mono text-[11px] uppercase tracking-[0.2em] text-muted"
                  >
                    Email
                  </label>
                  <input
                    type="email"
                    id="contact-email"
                    name="email"
                    required
                    autoComplete="email"
                    className="w-full border border-border bg-background px-3 py-2.5 text-sm focus:border-primary focus:outline-none"
                  />
                </div>
                <div className="mb-6">
                  <label
                    htmlFor="contact-message"
                    className="mb-2 block font-mono text-[11px] uppercase tracking-[0.2em] text-muted"
                  >
                    Message
                  </label>
                  <textarea
                    id="contact-message"
                    name="message"
                    rows={5}
                    required
                    className="w-full resize-y border border-border bg-background px-3 py-2.5 text-sm focus:border-primary focus:outline-none"
                  />
                </div>

                {status === "error" && (
                  <p
                    className="mb-4 border border-red-500/40 bg-red-500/10 px-3 py-2 text-sm text-red-300"
                    role="alert"
                  >
                    The spell fizzled - something went wrong. Please try again
                    or use email directly.
                  </p>
                )}

                <button
                  type="submit"
                  disabled={status === "sending"}
                  className="w-full border border-primary bg-primary/15 px-6 py-3 font-semibold text-foreground transition-all duration-300 hover:bg-primary hover:text-white disabled:opacity-50"
                >
                  {status === "sending" ? "Casting spell…" : "Dispatch message"}
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
