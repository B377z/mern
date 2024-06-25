require('dotenv').config();
const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
const nodemailer = require('nodemailer');

const db = process.env.MONGODB_URI;

mongoose.connect(db)
  .then(() => {
    console.log('Connected to MongoDB');
  })
  .catch((err) => {
    console.error('Error connecting to MongoDB:', err);
  });

const app = express();
app.use(cors());
app.use(express.json()); // This allows us to parse JSON in the body of POST request

app.get('/welcome', (req, res) => {
    res.send('Take your shoes off!');
});

let transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
        user: 'unwanamartinudo@gmail.com', // your email
        pass: 'vksi azal xkfs zmzx'         // your email password
    }
});

app.post('/subscribe', async (req, res) => {
    const { email } = req.body;
    if (!email) {
        return res.status(400).send('Email is required');
    }

    let mailOptions = {
        from: 'unwanamartinudo@gmail.com',
        to: email,
        subject: 'Subscription Confirmation',
        text: 'Thank you for subscribing!'
    };

    try {
        await transporter.sendMail(mailOptions);
        console.log(`Email sent to ${email}`);
        res.send('Subscription successful');
    } catch (error) {
        console.error('Error sending email:', error);
        res.status(500).send('Failed to send email');
    }
});

const PORT = 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));