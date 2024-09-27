// pages/api/contact.js
import nodemailer from 'nodemailer';
import { NextResponse } from 'next/server';
import validator from 'validator';
import dotenv from 'dotenv';
dotenv.config();

export async function POST(req) {
  const body = await req.json(); // Parse the incoming request body

  const { name, email, subject, message } = body;

  if (!name || !email || !subject || !message) {
    return NextResponse.json({ success: false, message: 'Please provide all the details' }, { status: 400 });
  }

  const isValidEmail = validator.isEmail(email);
  if (!isValidEmail) {
    return NextResponse.json({ success: false, message: 'Please provide a valid email' }, { status: 405 });
  }

  // Create a transporter object using your email service
  let transporter = nodemailer.createTransport({
    service: 'gmail', // You can use 'Gmail' or any other service like Mailgun, SendGrid, etc.
    auth: {
      user: process.env.EMAIL_USER, // Your email
      pass: process.env.EMAIL_PASS, // Your email password or app-specific password
    },
    tls: {
      rejectUnauthorized: false, // This will allow self-signed certificates
    },
  });

  try {
    // Send mail
    await transporter.sendMail({
      from: email, // Sender address
      to: process.env.EMAIL_USER, // Receiver address
      subject: 'Jay-Empire/Web', // Subject line
      text: message, // Plain text body
      html: `<p>You have a new contact message</p>
              <p><strong>Name:</strong> ${name}</p>
              <p><strong>Subject:</strong> ${subject}</p>
              <p><strong>Email:</strong> ${email}</p>
              <p><strong>Message:</strong> ${message}</p>`, // HTML body
    });

    // Respond with success message
    return NextResponse.json({ success: true, message: 'Email sent successfully' });
  } catch (error) {
    console.log(error);
    return NextResponse.json({ success: false, message: 'Error sending email' }, { status: 450 });
  }
}
