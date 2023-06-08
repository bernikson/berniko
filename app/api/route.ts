import { NextResponse } from "next/server";
import * as nodemailer from "nodemailer";

export async function POST(request: Request) {
  const data = await request.json();

  const transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: process.env.MAIL_EMAIL,
      pass: process.env.MAIL_PASSWORD,
    },
  });

  const mailOptions = {
    from: process.env.MAIL_EMAIL,
    to: process.env.MAIL_EMAIL,
    subject: data.title,
    html: `<h4>name: ${data.name}</h1> <h4>title: ${data.title}</h1> <h4>email: ${data.email}</h1> <h4>message: ${data.message}</h1>`,
  };

  transporter.sendMail(mailOptions, (error: unknown) => {
    if (error) console.log(error);
  });

  return NextResponse.json(data);
}
