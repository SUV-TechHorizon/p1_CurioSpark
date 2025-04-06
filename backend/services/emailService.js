const nodemailer = require('nodemailer');
require('dotenv').config();

exports.sendSubscriptionEmail = async (email) => {
    const transporter = nodemailer.createTransport({
        service: 'gmail',
        auth: {
            user: process.env.EMAIL_USER,
            pass: process.env.EMAIL_PASSWORD,
        }
    });

    let mailOptions = {
        from: process.env.EMAIL_USER,
        to: email,
        subject: 'Subscription Confirmation',
        text: 'Thank you for subscribing!'
    };

    try {
        let emailRes = await transporter.sendMail(mailOptions);
        console.log(`Email sent to ${email}`);
        return emailRes;
    } catch (error) {
        // console.log(error)
        console.error('Error sending email:', error);
        throw error;
    }
};
