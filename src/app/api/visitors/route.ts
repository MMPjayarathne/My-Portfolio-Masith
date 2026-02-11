import { NextResponse } from "next/server";
import nodemailer from "nodemailer";
import fs from "fs";
import path from "path";

// ---------------------------------------------------------------------------
// Storage path
// In development  → project root  data/visitors.json  (writable)
// In production   → /tmp/visitors.json  (writable on Vercel, but ephemeral per
//                   serverless instance; for true persistence swap this for
//                   Upstash Redis / Vercel KV / any external store)
// ---------------------------------------------------------------------------
const DATA_PATH =
  process.env.VISITOR_DATA_PATH ||
  (process.env.NODE_ENV === "production"
    ? "/tmp/visitors.json"
    : path.join(process.cwd(), "data", "visitors.json"));

function readCount(): number {
  try {
    if (!fs.existsSync(DATA_PATH)) return 0;
    const raw = fs.readFileSync(DATA_PATH, "utf8");
    const json = JSON.parse(raw);
    return typeof json.count === "number" ? json.count : 0;
  } catch {
    return 0;
  }
}

function writeCount(count: number): void {
  try {
    const dir = path.dirname(DATA_PATH);
    if (!fs.existsSync(dir)) fs.mkdirSync(dir, { recursive: true });
    fs.writeFileSync(DATA_PATH, JSON.stringify({ count }), "utf8");
  } catch (err) {
    console.error("Failed to write visitor count:", err);
  }
}

async function sendVisitorEmail(count: number) {
  const transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: process.env.EMAIL_SENDER,
      pass: process.env.EMAIL_PASSWORD,
    },
  });

  const now = new Date().toLocaleString("en-US", {
    timeZone: "Asia/Colombo",
    dateStyle: "full",
    timeStyle: "short",
  });

  await transporter.sendMail({
    from: process.env.EMAIL_SENDER,
    to: process.env.EMAIL_RECEIVER,
    subject: `Portfolio Visit #${count} — ${now}`,
    html: `
      <div style="font-family:sans-serif;max-width:480px;margin:auto;padding:24px;
                  border:1px solid #e2e8f0;border-radius:12px;">
        <h2 style="color:#228b22;margin-bottom:4px;">New Portfolio Visit 👋</h2>
        <p style="color:#555;margin-top:0;">Someone just visited your portfolio!</p>
        <table style="width:100%;border-collapse:collapse;margin-top:16px;">
          <tr>
            <td style="padding:8px 0;color:#888;font-size:14px;">Visit number</td>
            <td style="padding:8px 0;font-weight:bold;font-size:18px;color:#228b22;">#${count}</td>
          </tr>
          <tr>
            <td style="padding:8px 0;color:#888;font-size:14px;">Time (IST)</td>
            <td style="padding:8px 0;font-size:14px;">${now}</td>
          </tr>
        </table>
        <p style="margin-top:24px;font-size:12px;color:#aaa;">
          Sent automatically by your portfolio — masithpramuditha.dev
        </p>
      </div>
    `,
  });
}

// ---------------------------------------------------------------------------
// POST  /api/visitors  — increment counter + send email notification
// ---------------------------------------------------------------------------
export async function POST() {
  try {
    const current = readCount();
    const next = current + 1;
    writeCount(next);

    // Fire-and-forget email — don't block the response
    sendVisitorEmail(next).catch((err) =>
      console.error("Visitor email failed:", err)
    );

    return NextResponse.json({ count: next }, { status: 200 });
  } catch (error) {
    console.error("Visitor tracking error:", error);
    return NextResponse.json({ error: "Tracking failed" }, { status: 500 });
  }
}

// ---------------------------------------------------------------------------
// GET  /api/visitors  — return current count (for live polling)
// ---------------------------------------------------------------------------
export async function GET() {
  try {
    const count = readCount();
    return NextResponse.json({ count }, { status: 200 });
  } catch (error) {
    console.error("Visitor read error:", error);
    return NextResponse.json({ error: "Read failed" }, { status: 500 });
  }
}
