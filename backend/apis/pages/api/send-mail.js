const { MailtrapClient } = require("mailtrap");

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
  email: "noreply@blokkat.xyz",
  name: senderName,
};

const recipients = [
  {
    email: "omarosman23@aucegypt.edu",
  },
  {
    email: "kareemikassab@aucegypt.edu",
  },
  {
    email: "blokkat.blockchain.ed@gmail.com",
  },
  {
    email: "omarosman232000@gmail.com",
  },
  {
    email: senderEmail,
  },
];

console.log(`sendersendersender: ${JSON.stringify(sender, null, 2)}`)

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

export default handler;

   
