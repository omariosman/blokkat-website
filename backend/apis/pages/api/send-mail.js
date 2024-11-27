
const { MailtrapClient } = require("mailtrap");

export default (request, response) => {

const TOKEN = "";

const { senderEmail, senderName, text } = request.body;

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
   

