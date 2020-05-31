const sgMail = require('@sendgrid/mail');


sgMail.setApiKey(process.env.SENDGRID_API_KEY);

const sendWelcomeEmail = (email, name) =>
{
    sgMail.send(
    {
        to: email,
        from: 'joshpedrys@gmail.com',
        subject: 'Welcome to the app!',
        text: `Welcome to the app, ${name}. Let me know how you feel about the app.`
    });
}

const sendDeleteEmail = (email, name) =>
{
    sgMail.send(
    {
        to: email,
        from: 'joshpedrys@gmail.com',
        subject: 'Account Deleted!',
        text: `Sorry to hear you're deleting your account, ${name}. Please feel free to let us know why you no longer wanted an account with us.`
    });
}

module.exports = {
    sendWelcomeEmail,
    sendDeleteEmail
}