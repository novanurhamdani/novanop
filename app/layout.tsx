import type { Metadata } from "next";
import { Montserrat, Space_Grotesk, JetBrains_Mono } from "next/font/google";
import { site } from "../lib/site";
import "./globals.css";
import GoogleAnalytics from "./components/analytics/GoogleAnalytics";
import GamificationProvider from "./components/providers/GamificationProvider";
import Navbar from "./components/layout/Navbar";
import Footer from "./components/layout/Footer";

const montserrat = Montserrat({
  variable: "--font-montserrat",
  subsets: ["latin"],
  weight: ["700", "800", "900"],
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

export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  title:
    "Nova Nurhamdani - Frontend-heavy Full-Stack Software Engineer | Novanop",
  description:
    "Nova Nurhamdani is a frontend-heavy full-stack software engineer building products, interfaces, and the systems behind them.",
  openGraph: {
    title: `Nova Nurhamdani - ${site.title}`,
    description: site.tagline,
    type: "website",
    url: "/",
    siteName: "Novanop",
  },
  twitter: {
    card: "summary_large_image",
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
        className={`${montserrat.variable} ${spaceGrotesk.variable} ${jetbrainsMono.variable} antialiased font-sans bg-background text-foreground`}
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
