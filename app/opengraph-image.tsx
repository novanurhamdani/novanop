import { ImageResponse } from "next/og";
import { site } from "../lib/site";

export const alt = "Novanop - Nova Nurhamdani";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

/** Default share card - dark/purple identity, yellow accent. */
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
        <span style={{ color: "#a293c9" }}>THE CODE ALCHEMIST</span>
      </div>
      <div style={{ display: "flex", flexDirection: "column" }}>
        <div
          style={{
            fontSize: 76,
            fontWeight: 800,
            lineHeight: 1.05,
            letterSpacing: -2,
          }}
        >
          {site.name}
        </div>
        <div
          style={{
            marginTop: 18,
            fontSize: 30,
            color: "#a855f7",
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
          fontSize: 20,
          letterSpacing: 2,
          color: "#a293c9",
        }}
      >
        <span>{site.tagline}</span>
        <span>novanop.com</span>
      </div>
    </div>,
    size,
  );
}
