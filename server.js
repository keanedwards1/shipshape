require('dotenv').config(); // Add this at the top for environment variables
const express = require('express');
const nodemailer = require('nodemailer');
const cors = require('cors');

const app = express();
const port = process.env.PORT || 3000;

// CORS Middleware
app.use(cors({
    origin: ['https://www.shipshapegutters.com', 'http://127.0.0.1:5500', /* other allowed origins */],
    methods: ['GET', 'POST', 'OPTIONS']
}));



app.options('*', cors());

// Built-in Express body parser
app.use(express.json());

// Nodemailer Transport Configuration
const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
        user: process.env.EMAIL_USER, // Use environment variables
        pass: process.env.EMAIL_PASS
    }
});

app.post('/send-email', async (req, res) => {
    const { email } = req.body;

    if (!email) {
        res.status(400).send('No email address provided');
        return;
    }

    const mailOptions = {
        from: process.env.EMAIL_USER,
        to: email,
        subject: 'Hello',
        text: 'Let\'s get those gutters cleaned'
    };

    try {
        const info = await transporter.sendMail(mailOptions);
        console.log('Email sent: ' + info.response);
        res.status(200).send('Email sent successfully');
    } catch (error) {
        console.error('Error occurred: ' + error.message);
        res.status(500).send('Error sending email: ' + error.message);
    }
});

app.get('/', (req, res) => {
    res.send('Hello, this is the root of the server!');
});

app.listen(port, () => {
    console.log(`Server running on port ${port}`);
});







/* local version */

/* const express = require('express');
const bodyParser = require('body-parser');
const nodemailer = require('nodemailer');
const cors = require('cors');
const app = express();
const port = process.env.PORT || 3000;

// Use CORS middleware to allow requests from your front-end domain
app.use(cors());

app.use(bodyParser.json());

// Configure Nodemailer
const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
        user: 'keanedwards1@gmail.com',
        pass: 'elfk xuud evtj kizw'
    }
});

app.post('/send-email', (req, res) => {
    const { email } = req.body;

    if (!email) {
        res.status(400).send('No email address provided');
        return;
    }

    const mailOptions = {
        from: 'keanedwards1@gmail.com',
        to: email,
        subject: 'Hello',
        text: 'Let\'s get those gutters cleaned'
    };

    transporter.sendMail(mailOptions, (error, info) => {
        if (error) {
            console.log('Error occurred: ' + error.message);
            res.status(500).send('Error sending email: ' + error.message);
            return;
        } else {
            console.log('Email sent: ' + info.response);
            res.status(200).send('Email sent successfully');
        }
    });
});

app.listen(port, () => {
    console.log(`Server running on port ${port}`);
});

app.get('/', (req, res) => {
    res.send('Hello, this is the root of the server!');
}); */




















