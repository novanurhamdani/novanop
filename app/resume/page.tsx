import type { Metadata } from "next";
import ResumeView from "../components/features/resume/ResumeView";

export const metadata: Metadata = {
  title: "Nova Nurhamdani - Resume | Software Engineer",
  description:
    "Resume of Nova Nurhamdani, a frontend-heavy full-stack software engineer building products, interfaces, and the systems behind them.",
  alternates: { canonical: "/resume" },
  openGraph: {
    title: "Nova Nurhamdani - Resume | Software Engineer",
    description:
      "Resume of Nova Nurhamdani, a frontend-heavy full-stack software engineer.",
    type: "website",
    url: "/resume",
  },
};

export default function ResumePage() {
  return <ResumeView />;
}
