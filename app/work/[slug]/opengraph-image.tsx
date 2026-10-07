import { ImageResponse } from "next/og";
import { getProject, projects } from "../../../lib/projects";
import { site } from "../../../lib/site";
import { ProjectStatus } from "../../../types";

export const alt = "Project share card";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export function generateStaticParams() {
  return projects.map((project) => ({ slug: project.slug }));
}

const statusStyles: Record<
  ProjectStatus,
  { label: string; color: string; bg: string; border: string }
> = {
  live: { label: "LIVE", color: "#0a0a0a", bg: "#ceff00", border: "#262626" },
  building: {
    label: "BUILDING",
    color: "#ffffff",
    bg: "#1a4bff",
    border: "#0a0a0a",
  },
  experiment: {
    label: "EXPERIMENT",
    color: "#ffffff",
    bg: "#1a4bff",
    border: "#0a0a0a",
  },
  planned: {
    label: "PLANNED",
    color: "#0a0a0a",
    bg: "#ffffff",
    border: "#262626",
  },
};

/** Per-project share card - title, category, status, stack. */
export default async function OpengraphImage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const project = getProject(slug);
  if (!project) return new Response("Not found", { status: 404 });

  const status = statusStyles[project.status];

  return new ImageResponse(
    <div
      style={{
        width: "100%",
        height: "100%",
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
        padding: 64,
        background: "#0a0a0a",
        backgroundImage:
          "linear-gradient(to right, rgba(255,255,255,0.06) 1px, transparent 1px), linear-gradient(to bottom, rgba(255,255,255,0.06) 1px, transparent 1px)",
        backgroundSize: "32px 32px",
        color: "#ffffff",
        fontFamily: "sans-serif",
      }}
    >
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          fontSize: 20,
          letterSpacing: 6,
          color: "#1a4bff",
        }}
      >
        <span>NOVANOP</span>
        <span
          style={{
            color: status.color,
            background: status.bg,
            border: `2px solid ${status.border}`,
            padding: "4px 14px",
            letterSpacing: 4,
            fontSize: 18,
          }}
        >
          {status.label}
        </span>
      </div>
      <div style={{ display: "flex", flexDirection: "column" }}>
        <div
          style={{
            fontSize: 72,
            fontWeight: 800,
            lineHeight: 1.05,
            letterSpacing: -2,
            textTransform: "uppercase",
          }}
        >
          {project.title}
        </div>
        <div
          style={{
            marginTop: 16,
            fontSize: 30,
            color: "#1a4bff",
            fontWeight: 700,
          }}
        >
          {project.category}
        </div>
      </div>
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          fontSize: 20,
          letterSpacing: 2,
          color: "#a3a3a3",
        }}
      >
        <span>{project.stack.join(" · ")}</span>
        <span>{site.name} · novanop.com</span>
      </div>
    </div>,
    size,
  );
}
