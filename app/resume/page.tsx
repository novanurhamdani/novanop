import type { Metadata } from "next";
import ResumeView from "../components/features/resume/ResumeView";

const resumeTitle = "Resume";
const resumeDescription =
  "Resume of Nova Nurhamdani — freelance web developer and frontend-heavy full-stack engineer. React, Next.js, TypeScript, Go, PostgreSQL.";

export const metadata: Metadata = {
  title: resumeTitle,
  description: resumeDescription,
  alternates: { canonical: "/resume" },
  openGraph: {
    title: resumeTitle,
    description: resumeDescription,
    type: "website",
    url: "/resume",
  },
};

export default function ResumePage() {
  return <ResumeView />;
}
