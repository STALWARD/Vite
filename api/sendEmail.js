import nodemailer from "nodemailer";

export default async function handler(req, res) {
  if (req.method !== "POST") {
    return res.status(405).json({ message: "Method not allowed" });
  }

  try {
    const { name, phone, email, message } = req.body;

    // Configure transporter
    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: process.env.MY_EMAIL,     // set in Vercel env vars
        pass: process.env.MY_PASSWORD,  // Gmail App Password
      },
    });

    const mailOptions = {
      from: process.env.MY_EMAIL,
      to: process.env.MY_EMAIL, // receiving email
      subject: `Message from ${name} (${email})`,
      text: `
        Name: ${name}
        Phone: ${phone}
        Email: ${email}
        Message: ${message}
      `,
    };

    await transporter.sendMail(mailOptions);

    return res.status(200).json({
      message: "Thanks! Email received. We shall contact you soon.",
    });
  } catch (err) {
    console.error("Email error:", err);
    return res.status(500).json({
      error: "Failed to send email",
      details: err.message,
    });
  }
}
