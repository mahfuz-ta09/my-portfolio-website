import { ImageResponse } from "next/og"
import { site } from "@/lib/site"

export const runtime = "edge"
export const alt = `${site.name} | ${site.role}`
export const size = { width: 1200, height: 630 }
export const contentType = "image/png"

export default function OpengraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          alignItems: "center",
          gap: 64,
          padding: 80,
          background: "#0d2242",
          color: "#fff",
          fontFamily: "sans-serif",
        }}
      >
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src={site.image}
          alt=""
          width={260}
          height={260}
          style={{ borderRadius: "50%", border: "6px solid rgba(4, 225, 225, 0.6)", objectFit: "cover" }}
        />
        <div style={{ display: "flex", flexDirection: "column" }}>
          <div style={{ color: "#04e1e1", fontSize: 30, letterSpacing: 4 }}>PORTFOLIO</div>
          <div style={{ marginTop: 16, fontSize: 64, fontWeight: 700, lineHeight: 1.1 }}>{site.name}</div>
          <div style={{ marginTop: 20, fontSize: 34, color: "#bfc2c5" }}>Full Stack Web Developer</div>
          <div style={{ marginTop: 6, fontSize: 34, color: "#04e1e1" }}>&amp; Programming Instructor</div>
        </div>
      </div>
    ),
    size
  )
}
