import { NextRequest, NextResponse } from "next/server";
import nodemailer from "nodemailer";

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const LIMITS = { name: 100, email: 254, message: 5000 };

const escapeHtml = (value: string) =>
  value
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#39;");

export async function POST(request: NextRequest) {
  try {
    if (!process.env.EMAIL_PASSWORD) {
      console.error("Contact form called without EMAIL_PASSWORD configured");
      return NextResponse.json(
        { error: "Contact form is temporarily unavailable" },
        { status: 503 },
      );
    }

    let body: unknown;
    try {
      body = await request.json();
    } catch {
      return NextResponse.json({ error: "Invalid request" }, { status: 400 });
    }

    const { name, email, message } = (body ?? {}) as Record<string, unknown>;

    if (
      typeof name !== "string" ||
      typeof email !== "string" ||
      typeof message !== "string" ||
      !name.trim() ||
      !message.trim() ||
      !EMAIL_RE.test(email) ||
      name.length > LIMITS.name ||
      email.length > LIMITS.email ||
      message.length > LIMITS.message
    ) {
      return NextResponse.json({ error: "Invalid request" }, { status: 400 });
    }

    const safeName = escapeHtml(name);
    const safeEmail = escapeHtml(email);
    const safeMessage = escapeHtml(message);
    const owner = "nova.nurhamdani@gmail.com";

    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: owner,
        pass: process.env.EMAIL_PASSWORD,
      },
    });

    await transporter.sendMail({
      from: owner,
      replyTo: email,
      to: owner,
      subject: `Portfolio Contact: ${name.slice(0, LIMITS.name)}`,
      text: `Name: ${name}\nEmail: ${email}\nMessage: ${message}`,
      html: `
<div style="font-family: Arial, sans-serif; padding: 20px; max-width: 600px;">
  <h2 style="color: #a855f7;">New Contact from Portfolio</h2>
  <p><strong>Name:</strong> ${safeName}</p>
  <p><strong>Email:</strong> ${safeEmail}</p>
  <h3>Message:</h3>
  <p style="background-color: #f5f5f5; padding: 15px; border-radius: 5px;">${safeMessage}</p>
</div>
      `,
    });

    return NextResponse.json({ success: true }, { status: 200 });
  } catch (error) {
    console.error("Error sending email:", error);
    return NextResponse.json(
      { error: "Failed to send message" },
      { status: 500 },
    );
  }
}
