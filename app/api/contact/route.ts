import { NextRequest, NextResponse } from "next/server";
import nodemailer from "nodemailer";

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { name, email, message } = body;

    // Create a transporter
    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: "nova.nurhamdani@gmail.com",
        pass: process.env.EMAIL_PASSWORD,
      },
    });

    // Email content
    const mailOptions = {
      from: email,
      to: "nova.nurhamdani@gmail.com",
      subject: `Portfolio Contact: ${name}`,
      text: `
Name: ${name}
Email: ${email}
Message: ${message}
      `,
      html: `
<div style="font-family: Arial, sans-serif; padding: 20px; max-width: 600px;">
  <h2 style="color: #a855f7;">New Contact from Portfolio</h2>
  <p><strong>Name:</strong> ${name}</p>
  <p><strong>Email:</strong> ${email}</p>
  <h3>Message:</h3>
  <p style="background-color: #f5f5f5; padding: 15px; border-radius: 5px;">${message}</p>
</div>
      `,
    };

    // Send email
    await transporter.sendMail(mailOptions);

    return NextResponse.json({ success: true }, { status: 200 });
  } catch (error) {
    console.error("Error sending email:", error);
    return NextResponse.json(
      { error: "Failed to send message" },
      { status: 500 }
    );
  }
}
