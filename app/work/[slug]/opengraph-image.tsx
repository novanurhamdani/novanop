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

const statusStyles: Record<ProjectStatus, { label: string; color: string }> = {
  live: { label: "LIVE", color: "#22c55e" },
  building: { label: "BUILDING", color: "#fbbf24" },
  experiment: { label: "EXPERIMENT", color: "#a855f7" },
  planned: { label: "PLANNED", color: "#a293c9" },
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
        background: "#0f051d",
        backgroundImage:
          "linear-gradient(to right, rgba(162,147,201,0.07) 1px, transparent 1px), linear-gradient(to bottom, rgba(162,147,201,0.07) 1px, transparent 1px)",
        backgroundSize: "56px 56px",
        color: "#e0d8f0",
        fontFamily: "sans-serif",
      }}
    >
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          fontSize: 20,
          letterSpacing: 6,
          color: "#fbbf24",
        }}
      >
        <span>NOVANOP</span>
        <span
          style={{
            color: status.color,
            border: `2px solid ${status.color}`,
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
          }}
        >
          {project.title}
        </div>
        <div
          style={{
            marginTop: 16,
            fontSize: 30,
            color: "#a855f7",
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
          color: "#a293c9",
        }}
      >
        <span>{project.stack.join(" · ")}</span>
        <span>
          {site.name} · novanop.com
        </span>
      </div>
    </div>,
    size,
  );
}
