import sendgrid from "@sendgrid/mail";

sendgrid.setApiKey(process.env.SENDGRID_API_KEY);

export default async function handler(req, res) {
  console.log("Request received:", req.method, req.url);

  if (req.method === "POST") {
    console.log("Form data:", req.body);
    const { name, email, message } = req.body;

    const msg = {
      to: "mariusherlea@gmail.com", // Your email address
      from: "your-sendgrid-verified-email@example.com", // Your verified SendGrid sender email
      subject: "New Contact Form Submission",
      text: `Name: ${name}\nEmail: ${email}\nMessage: ${message}`,
      html: `<strong>Name:</strong> ${name}<br><strong>Email:</strong> ${email}<br><strong>Message:</strong> ${message}`,
    };

    try {
      await sendgrid.send(msg);
      res
        .status(200)
        .json({ success: true, message: "Email sent successfully" });
    } catch (error) {
      console.error("Error sending email:", error);
      res.status(500).json({ success: false, message: "Error sending email" });
    }
  } else {
    res.setHeader("Allow", ["POST"]);
    res.status(405).end(`Method ${req.method} Not Allowed`);
  }
}
