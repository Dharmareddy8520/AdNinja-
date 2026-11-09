import { readFile } from "node:fs/promises";
import { join } from "node:path";
import { ImageResponse } from "next/og";

export const dynamic = "force-static";

export async function GET() {
  const icon = await readFile(
    join(process.cwd(), "public", "adninja-icon.png"),
  );
  const iconUrl = `data:image/png;base64,${icon.toString("base64")}`;

  return new ImageResponse(
    <div
      style={{
        width: "100%",
        height: "100%",
        display: "flex",
        alignItems: "center",
        padding: 78,
        background: "#102a25",
        color: "#ffffff",
        fontFamily: "Arial, sans-serif",
      }}
    >
      <div style={{ display: "flex", flexDirection: "column", width: 800 }}>
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: 26,
            marginBottom: 44,
          }}
        >
          {/* ImageResponse renders this as part of the build-time social graphic. */}
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src={iconUrl} alt="" width={116} height={116} />
          <span style={{ fontSize: 52, fontWeight: 800, letterSpacing: -2 }}>
            AdNinja
          </span>
        </div>
        <div style={{ display: "flex", flexDirection: "column", gap: 8 }}>
          <span style={{ fontSize: 62, fontWeight: 800, letterSpacing: -2 }}>
            Block unwanted ads.
          </span>
          <span
            style={{
              fontSize: 62,
              fontWeight: 800,
              letterSpacing: -2,
              color: "#bcebc7",
            }}
          >
            Browse with fewer distractions.
          </span>
        </div>
        <span style={{ marginTop: 42, fontSize: 25, color: "#b8d4c3" }}>
          Ad and tracker filtering · Website controls · Local-first
        </span>
      </div>
      <div
        style={{
          display: "flex",
          width: 210,
          height: 210,
          border: "22px solid #e63645",
          borderRadius: 105,
          marginLeft: "auto",
          marginTop: -250,
          opacity: 0.85,
        }}
      />
    </div>,
    { width: 1200, height: 630 },
  );
}
