/**
 * Canonical site identity and contact links - single source of truth.
 * Consumed by Footer, Contact, and the resume. Keep URLs real.
 */
export const site = {
  brand: "NOVANOP",
  name: "Nova Nurhamdani",
  title: "Frontend-heavy Full-Stack Software Engineer",
  tagline: "I build products, interfaces, and the systems behind them.",
  url: "https://novanop.com",
  location: "Indonesia",
  email: "nova.nurhamdani@gmail.com",
  linkedin: "https://www.linkedin.com/in/nova-nurhamdani/",
  github: "https://github.com/novanurhamdani",
};

/** Social/contact links for nav surfaces, footer, resume. */
export const socialLinks = [
  {
    label: "Email",
    href: `mailto:${site.email}`,
    value: site.email,
    ariaLabel: "Send email to Nova Nurhamdani",
  },
  {
    label: "LinkedIn",
    href: site.linkedin,
    value: "/in/nova-nurhamdani",
    ariaLabel: "View Nova Nurhamdani's LinkedIn profile",
  },
  {
    label: "GitHub",
    href: site.github,
    value: "@novanurhamdani",
    ariaLabel: "View Nova Nurhamdani's GitHub profile",
  },
];
