const express = require('express');
const bodyParser = require('body-parser');
const nodemailer = require('nodemailer');
const cors = require('cors');
const app = express();
const port = 3000;

// Use CORS middleware to allow requests from your front-end domain
app.use(cors());

app.use(bodyParser.json());

// Configure Nodemailer
const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
        user: 'keanedwards1@gmail.com',
        pass: 'StarryNightHaze*2'
    }
});

app.post('/send-email', (req, res) => {
    const { email } = req.body;

    const mailOptions = {
        from: 'keanedwards1@gmail.com',
        to: email,
        subject: 'Hello',
        text: 'Let\'s get those gutters cleaned'
    };

    transporter.sendMail(mailOptions, (error, info) => {
        if (error) {
            console.log(error);
            res.status(500).send('Error sending email');
        } else {
            console.log('Email sent: ' + info.response);
            res.status(200).send('Email sent successfully');
        }
    });
});

app.listen(port, () => {
    console.log(`Server running on port ${port}`);
});
