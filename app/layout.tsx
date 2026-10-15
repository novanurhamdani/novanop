import type { Metadata } from "next";
import { Syne, Space_Grotesk, JetBrains_Mono } from "next/font/google";
import { site } from "../lib/site";
import "./globals.css";
import GoogleAnalytics from "./components/analytics/GoogleAnalytics";
import GamificationProvider from "./components/providers/GamificationProvider";
import Navbar from "./components/layout/Navbar";
import Footer from "./components/layout/Footer";

const syne = Syne({
  variable: "--font-syne",
  subsets: ["latin"],
  weight: ["700", "800"],
});

const spaceGrotesk = Space_Grotesk({
  variable: "--font-space-grotesk",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

const jetbrainsMono = JetBrains_Mono({
  variable: "--font-jetbrains-mono",
  subsets: ["latin"],
  weight: ["400", "500", "600"],
});

const defaultDescription =
  "Freelance web developer and frontend-heavy full-stack software engineer based in Indonesia. I build products, interfaces, and the systems behind them.";

export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  title: {
    default: "Nova Nurhamdani — Freelance Web Developer & Software Engineer",
    template: "%s | Nova Nurhamdani",
  },
  description: defaultDescription,
  keywords: [
    "freelance web developer",
    "web developer Indonesia",
    "full-stack developer",
    "frontend engineer",
    "Next.js developer",
    "React developer",
    "TypeScript developer",
    "Nova Nurhamdani",
    "Novanop",
  ],
  authors: [{ name: site.name, url: site.url }],
  creator: site.name,
  publisher: site.name,
  applicationName: site.brand,
  category: "technology",
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  openGraph: {
    title: "Nova Nurhamdani — Freelance Web Developer & Software Engineer",
    description: defaultDescription,
    type: "website",
    url: "/",
    siteName: "Novanop",
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: "Nova Nurhamdani — Freelance Web Developer & Software Engineer",
    description: defaultDescription,
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <script
          dangerouslySetInnerHTML={{
            __html: "document.documentElement.classList.add('js')",
          }}
        />
      </head>
      <body
        className={`${syne.variable} ${spaceGrotesk.variable} ${jetbrainsMono.variable} antialiased font-sans bg-background text-foreground`}
      >
        <GamificationProvider>
          <Navbar />
          {children}
          <Footer />
        </GamificationProvider>
        <GoogleAnalytics />
      </body>
    </html>
  );
}
