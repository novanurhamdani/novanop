import { Fira_Code, Press_Start_2P, VT323 } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/theme-provider";
import { Analytics } from "@vercel/analytics/react";
import GoogleAnalytics from "./google-analytics";

const firaCode = Fira_Code({
  subsets: ["latin"],
  variable: "--font-fira-code",
});

const pressStart2P = Press_Start_2P({
  weight: "400",
  subsets: ["latin"],
  variable: "--font-press-start-2p",
});

const vt323 = VT323({
  weight: "400",
  subsets: ["latin"],
  variable: "--font-vt323",
});

export const metadata = {
  title: "Nova Nurhamdani | Retro Portfolio",
  description: "Nova Nurhamdani's Retro-Style Portfolio Website - Frontend Engineer",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${firaCode.variable} ${pressStart2P.variable} ${vt323.variable} min-h-screen antialiased font-mono`}
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem
          disableTransitionOnChange
        >
          {children}
        </ThemeProvider>
        <Analytics />
        <GoogleAnalytics />
      </body>
    </html>
  );
}
