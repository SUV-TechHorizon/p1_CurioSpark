const emailService = require('../services/emailService');

exports.subscribe = async (req, res) => {
    const email = req.body.email;
    console.log(`Subscribing email: ${email}`);

    try {
        const emailRegex = /\S+@\S+\.\S+/;
        if (!emailRegex.test(email)) {
            return res.status(400).send('Invalid email');
        }
        const emailServiceResponse = await emailService.sendSubscriptionEmail(email);
        // console.log({ emailServiceResponse })
        if (emailServiceResponse) {
            return res.send(`Subscribed email: ${email}`);
        } else {
            return res.status(500).send('Error subscribing');
        }
    } catch (error) {
        // console.log(error)
        console.error('Error subscribing:', error);
        return res.status(500).send('Error subscribing');

    }
};
