
const { MailtrapClient } = require("mailtrap");

export default (request, response) => {

const TOKEN = "";

const { senderEmail, senderName, text, captchaToken } = request.body;

  // Verify CAPTCHA
  const captchaResponse = await fetch("https://hcaptcha.com/siteverify", {
    method: "POST",
    headers: { "Content-Type": "application/x-www-form-urlencoded" },
    body: `secret=ES_5b1b988d1bca43a59cc029c446f27030&response=${captchaToken}`,
  });
  const captchaResult = await captchaResponse.json();

  if (!captchaResult.success) {
    return response.status(400).send({ error: "CAPTCHA validation failed" });
  }

const client = new MailtrapClient({
  token: TOKEN,
  testInboxId: 3304017,
});

const sender = {
  email: senderEmail,
  name: "Contact us",
};
const recipients = [
  {
    email: "omarosman232000@gmail.com",
  },
  {
    email: "blokkat.blockchain.ed@gmail.com",
  }
];

client.testing
  .send({
    from: sender,
    to: recipients,
    subject: `Contact us from website blokkat: ${senderName}`,
    text: text,
    category: "Contact us",
  })
  .then(console.log, console.error);

  response.send({
    data: 'mail sent',
  });


}
   

