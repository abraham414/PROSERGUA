import { ImageResponse } from "next/og";
import { readFile } from "node:fs/promises";
import { join } from "node:path";
import { company } from "@/data/company";

export const alt = `${company.brandName} — ${company.tagline}`;
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";
// Requerido por el export estático: sin servidor, esta imagen solo puede
// generarse una vez durante `next build`, no bajo demanda.
export const dynamic = "force-static";

export default async function Image() {
  const logoData = await readFile(
    join(process.cwd(), "public/images/logo/prosergua-isotype-mark.png"),
    "base64",
  );
  const logoSrc = `data:image/png;base64,${logoData}`;

  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          gap: 40,
          background: "#1a336a",
        }}
      >
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img src={logoSrc} width={200} height={229} alt="" />
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            gap: 16,
          }}
        >
          <div style={{ display: "flex", fontSize: 84, fontWeight: 800, color: "#ffffff" }}>
            {company.brandName}
          </div>
          <div style={{ display: "flex", fontSize: 32, fontWeight: 600, color: "#fec908" }}>
            {company.tagline}
          </div>
        </div>
      </div>
    ),
    { ...size },
  );
}
