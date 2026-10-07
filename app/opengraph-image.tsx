import { ImageResponse } from "next/og";
import { site } from "../lib/site";

export const alt = "Novanop - Nova Nurhamdani";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

/** Default share card - black/white cyber-grid, cobalt + lime accents. */
export default function OpengraphImage() {
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
        <span style={{ color: "#ceff00" }}>THE CODE ALCHEMIST</span>
      </div>
      <div style={{ display: "flex", flexDirection: "column" }}>
        <div
          style={{
            fontSize: 76,
            fontWeight: 800,
            lineHeight: 1.05,
            letterSpacing: -2,
            textTransform: "uppercase",
          }}
        >
          {site.name}
        </div>
        <div
          style={{
            marginTop: 18,
            fontSize: 30,
            color: "#1a4bff",
            fontWeight: 700,
          }}
        >
          {site.title}
        </div>
      </div>
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          fontSize: 20,
          letterSpacing: 2,
          color: "#a3a3a3",
        }}
      >
        <span>{site.tagline}</span>
        <span
          style={{
            background: "#ceff00",
            color: "#0a0a0a",
            padding: "4px 12px",
            fontWeight: 700,
          }}
        >
          novanop.com
        </span>
      </div>
    </div>,
    size,
  );
}
