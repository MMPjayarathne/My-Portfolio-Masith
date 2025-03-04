import { NextResponse } from "next/server";
import nodemailer from "nodemailer";


async function sendEmail({ name, email, message }: { name: string; email: string; message: string }) {
  
  const transporter = nodemailer.createTransport({
    service: "gmail", 
    auth: {
      user: process.env.EMAIL_SENDER, 
      pass: process.env.EMAIL_PASSWORD,
    },
  });


  const mailOptions = {
    from: process.env.EMAIL_SENDER, 
    to: process.env.EMAIL_RECEIVER, 
    subject: `New Message from ${name} (${email})`, 
    text: message, 
    html: `<p>${message}</p>`,
  };

  await transporter.sendMail(mailOptions);
}


export async function POST(request: Request) {
  try {
    const { name, email, message } = await request.json();

    if (!name || !email || !message) {
      return NextResponse.json({ error: "All fields are required" }, { status: 400 });
    }

    await sendEmail({ name, email, message });

    return NextResponse.json({ message: "Email sent successfully" }, { status: 200 });
  } catch (error) {
    console.error("Error sending email:", error);
    return NextResponse.json({ error: "Failed to send email" }, { status: 500 });
  }
}