const sgMail = require('@sendgrid/mail')

sgMail.setApiKey(process.env.SENDGRID_API_KEY);

const sendWelcomeEmail = (email, name) => {
  sgMail.send({
    to: email,
    from: 'miketheb3ar@yahoo.com',
    subject: 'Thanks for joining in',
    text: `Welcome to the app, ${name}. Let me know how you get along with the app.`
  })
}

const sendCancelationEmail = (to, name) => {
  sgMail.send({
    to,
    from: 'miketheb3ar@yahoo.com',
    subject: 'Sorry to see you go',
    text: `Sorry to see you go, ${name}. Is there anything we could have done better?`
  })
}

module.exports = {
  sendWelcomeEmail,
  sendCancelationEmail
}
