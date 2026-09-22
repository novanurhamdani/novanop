import Link from "next/link";
import Image from "next/image";
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
    <footer className="border-t border-border mt-24">
      <div className="container mx-auto px-5 sm:px-6 py-12">
        <div className="grid gap-10 md:grid-cols-3">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-2">
              <Image
                src="/images/novanop-logo.png"
                width={26}
                height={26}
                alt=""
                className="h-6 w-6"
              />
              <span className="font-heading font-extrabold tracking-wide">
                NOVANOP
              </span>
            </div>
            <p className="mt-3 text-sm text-muted">The Code Alchemist</p>
            <p className="text-sm text-muted">
              Frontend-heavy Full-Stack Software Engineer
            </p>
          </div>

          {/* Site links */}
          <nav aria-label="Footer site navigation">
            <p className="eyebrow mb-4">Site</p>
            <ul className="space-y-2 text-sm">
              {siteLinks.map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    className="text-muted hover:text-foreground transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          {/* Elsewhere */}
          <nav aria-label="Footer social navigation">
            <p className="eyebrow mb-4">Elsewhere</p>
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
                    className="text-muted hover:text-foreground transition-colors"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>
        </div>

        <div className="mt-10 pt-6 border-t border-border/60 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-2">
          <p className="text-xs text-muted">
            &copy; {new Date().getFullYear()} Nova Nurhamdani. Crafted with code
            and a touch of magic.
          </p>
          <p className="font-mono text-[11px] text-muted/70">
            next.js · typescript · still brewing
          </p>
        </div>
      </div>
    </footer>
  );
}
