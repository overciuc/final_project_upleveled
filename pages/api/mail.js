const mail = require('@sendgrid/mail');
mail.setApiKey(process.env.SENDGRID_API_KEY);

// eslint-disable-next-line import/no-anonymous-default-export
export default (req, res) => {
  const body = JSON.parse(req.body);
  console.log('body', body);

  const message = `
  Name: ${body.name}\r\n
  Email: ${body.email}\r\n
  Message: ${body.message}
`;

  mail
    .send({
      to: 'o.verciuc@gmail.com',
      from: 'hello@hoodreview.me',
      subject: 'New Message!',
      text: message,
      html: message.replace(/\r\n/g, '<br>'),
    })
    .then(() => {
      res.status(200).json({ status: 'Ok' });
    });
};
