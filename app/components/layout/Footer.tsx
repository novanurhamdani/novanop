import Image from "next/image";
import Link from "next/link";
import { socialLinks } from "../../../lib/site";

const siteLinks = [
  { href: "/work", label: "Work" },
  { href: "/lab", label: "Lab" },
  { href: "/about", label: "About" },
  { href: "/resume", label: "Resume" },
  { href: "/#contact", label: "Contact" },
];

export default function Footer() {
  return (
    <footer className="bg-card text-white border-t-2 border-border">
      <div className="container mx-auto px-5 sm:px-6 py-12">
        <div className="grid gap-10 md:grid-cols-3">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-2">
              <Image
                src="/images/new-logo.png"
                alt=""
                width={4168}
                height={4168}
                sizes="28px"
                unoptimized
                className="h-7 w-7 border border-black object-cover"
              />
              <span className="font-heading font-extrabold tracking-wide">
                NOVANOP
              </span>
            </div>
            <p className="mt-3 text-sm text-dark-muted">The Code Alchemist</p>
            <p className="text-sm text-dark-muted">
              Frontend-heavy Full-Stack Software Engineer
            </p>
          </div>

          {/* Site links */}
          <nav aria-label="Footer site navigation">
            <p className="eyebrow eyebrow-dark mb-4">Site</p>
            <ul className="space-y-2 text-sm">
              {siteLinks.map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    className="text-dark-muted hover:text-white transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          {/* Elsewhere */}
          <nav aria-label="Footer social navigation">
            <p className="eyebrow eyebrow-dark mb-4">Elsewhere</p>
            <ul className="space-y-2 text-sm">
              {socialLinks.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    target={
                      link.href.startsWith("mailto") ? undefined : "_blank"
                    }
                    rel="noopener noreferrer"
                    aria-label={link.ariaLabel}
                    className="text-dark-muted hover:text-white transition-colors"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>
        </div>

        <div className="mt-10 pt-6 border-t border-dark-border flex flex-col sm:flex-row items-start sm:items-center justify-between gap-2">
          <p className="text-xs text-dark-muted">
            &copy; {new Date().getFullYear()} Nova Nurhamdani. Crafted with code
            and a touch of magic.
          </p>
          <p className="font-mono text-[11px] text-dark-muted">
            next.js · typescript · still brewing
          </p>
        </div>
      </div>
    </footer>
  );
}
