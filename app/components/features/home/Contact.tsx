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
      className="relative border-t-2 border-border bg-dark text-white"
    >
      <div
        className="grid-backdrop-dark absolute inset-x-0 h-full pointer-events-none"
        aria-hidden="true"
      />
      <div className="relative container mx-auto px-5 sm:px-6 py-20 sm:py-28">
        <div className="grid gap-0 lg:grid-cols-2 border border-border">
          {/* Cobalt feature panel: copy + direct links */}
          <div
            data-reveal
            className="bg-primary text-white p-8 sm:p-12 min-w-0"
          >
            <p className="eyebrow">
              08 / Contact{" "}
              <span className="text-dark-muted">/ whisper a spell</span>
            </p>
            <h2 className="mt-4 font-heading font-extrabold uppercase tracking-tight text-3xl sm:text-4xl lg:text-5xl leading-[0.95] text-balance">
              Have a project, opportunity, or interesting problem?
            </h2>
            <p className="mt-4 max-w-md text-blue-100 leading-relaxed">
              I&apos;m open to product work, engineering roles, and interesting
              technical challenges - especially where frontend meets real
              systems.
            </p>

            <a
              href={`mailto:${site.email}`}
              aria-label="Send email to Nova Nurhamdani"
              className="btn-brutal mt-8 inline-flex items-center gap-2 bg-secondary px-6 py-3 text-sm text-black"
            >
              Start a conversation
            </a>

            <ul className="mt-10 space-y-3 border-t border-blue-400/30 pt-8">
              {socialLinks.map((link) => (
                <li
                  key={link.label}
                  className="flex flex-wrap items-baseline gap-x-4 gap-y-1 min-w-0"
                >
                  <span className="w-20 shrink-0 font-mono text-[10px] uppercase tracking-[0.22em] text-secondary">
                    {link.label}
                  </span>
                  <a
                    href={link.href}
                    target={
                      link.href.startsWith("mailto") ? undefined : "_blank"
                    }
                    rel="noopener noreferrer"
                    aria-label={link.ariaLabel}
                    className="min-w-0 break-all font-mono text-sm text-white hover:text-secondary transition-colors"
                  >
                    {link.value}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Form - same /api/contact backend as before */}
          <div data-reveal className="bg-card p-8 sm:p-12 min-w-0">
            {status === "sent" ? (
              <div className="border border-secondary bg-secondary/10 p-8 text-center">
                <p className="text-3xl" aria-hidden="true">
                  🕊️
                </p>
                <h3 className="mt-3 font-heading font-bold text-xl text-secondary">
                  Message dispatched!
                </h3>
                <p className="mt-2 text-sm text-dark-muted">
                  Thank you for reaching out. The alchemist will reply shortly.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit}>
                <div className="mb-5">
                  <label
                    htmlFor="contact-name"
                    className="mb-2 block font-mono text-[11px] uppercase tracking-[0.2em] text-dark-muted"
                  >
                    Name
                  </label>
                  <input
                    type="text"
                    id="contact-name"
                    name="name"
                    required
                    autoComplete="name"
                    className="w-full border border-dark-border bg-dark-surface-strong px-3 py-2.5 text-sm text-white focus:border-secondary focus:outline-none"
                  />
                </div>
                <div className="mb-5">
                  <label
                    htmlFor="contact-email"
                    className="mb-2 block font-mono text-[11px] uppercase tracking-[0.2em] text-dark-muted"
                  >
                    Email
                  </label>
                  <input
                    type="email"
                    id="contact-email"
                    name="email"
                    required
                    autoComplete="email"
                    className="w-full border border-dark-border bg-dark-surface-strong px-3 py-2.5 text-sm text-white focus:border-secondary focus:outline-none"
                  />
                </div>
                <div className="mb-6">
                  <label
                    htmlFor="contact-message"
                    className="mb-2 block font-mono text-[11px] uppercase tracking-[0.2em] text-dark-muted"
                  >
                    Message
                  </label>
                  <textarea
                    id="contact-message"
                    name="message"
                    rows={5}
                    required
                    className="w-full resize-y border border-dark-border bg-dark-surface-strong px-3 py-2.5 text-sm text-white focus:border-secondary focus:outline-none"
                  />
                </div>

                {status === "error" && (
                  <p
                    className="mb-4 border border-danger bg-danger/10 px-3 py-2 text-sm text-red-400"
                    role="alert"
                  >
                    The spell fizzled - something went wrong. Please try again
                    or use email directly.
                  </p>
                )}

                <button
                  type="submit"
                  disabled={status === "sending"}
                  className="btn-brutal w-full bg-secondary px-6 py-3 text-sm text-black disabled:opacity-50"
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
