import { MailtrapClient } from "mailtrap";

const allowCors = fn => async (req, res) => {
  res.setHeader('Access-Control-Allow-Credentials', true)
  res.setHeader('Access-Control-Allow-Origin', '*')
  res.setHeader('Access-Control-Allow-Methods', 'GET,OPTIONS,PATCH,DELETE,POST,PUT')
  res.setHeader(
    'Access-Control-Allow-Headers',
    'X-CSRF-Token, X-Requested-With, Accept, Accept-Version, Content-Length, Content-MD5, Content-Type, Date, X-Api-Version'
  )
  if (req.method === 'OPTIONS') {
    res.status(200).end()
    return
  }
  return await fn(req, res)
}


const handler = async(request, response) => {

  const { senderEmail, senderName, subject, text, category, captchaToken } = request.body;
  const HCAPTCHA_SECRET = process.env.HCAPTCHA_SECRET;

  // Verify CAPTCHA
  const captchaResponse = await fetch("https://hcaptcha.com/siteverify", {
    method: "POST",
    headers: { "Content-Type": "application/x-www-form-urlencoded" },
    body: `secret=${HCAPTCHA_SECRET}&response=${captchaToken}`,
  });

  const captchaResult = await captchaResponse.json();

  if (!captchaResult.success) {
    return response.status(400).send({ error: "CAPTCHA validation failed" });
  }

  const TOKEN = process.env.MAILTRAP_TOKEN;
  const client = new MailtrapClient({
    token: TOKEN,
  });

  const sender = {
    email: "contact@blokkat.xyz",
    name: senderName,
  };

const recipients = [
  {
    email: "blokkat.blockchain.ed@gmail.com",
  },
  {
    email: "kareemikassab@aucegypt.edu",
  },
  {
    email: "omarosman23@aucegypt.edu",
  },
  {
    email: "omarosman232000@gmail.com",
  },
  {
    email: senderEmail,
  },
];

  client
  .send({
    from: sender,
    to: recipients,
    subject: subject || "Contact Form Submission",
    text: text || "No message provided.",
    category: category || "Contact Form"})
  .then(() => {
    response.send({
      data: "Mail sent successfully",
    });
  })
  .catch((error) => {
    console.error(error);
    response.status(500).send({
      error: "Failed to send email",
    });
  });

  response.send({
    data: 'Mail sent successfully',
  });
}

export default allowCors(handler);
   
