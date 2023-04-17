const express = require("express");
const nodemailer = require('nodemailer');
const config = require("./config.json");

const contactMiddleware = express.Router();

// Parse request body for form data
contactMiddleware.use(express.urlencoded({ extended: true }));
contactMiddleware.use(express.json());

contactMiddleware.post('/contact', (req, res) => {
    const transporter = nodemailer.createTransport({
        host: config.contact.host,
        port: config.contact.port || 465,
        secure: config.contact.secure || true,
        auth: {
            user: config.contact.user,
            pass: config.contact.pass
        }
    });

    const mailOptions = {
        from: 'info@macrepairman.ca',
        to: 'info@macrepairman.ca',
        subject: 'New message from your website!',
        text: 'You have received a new message from your website contact form.\n\nName: ' + req.body.name + '\nEmail: ' + req.body.email + '\nMessage: ' + req.body.message
    };

    transporter.sendMail(mailOptions, (error, info) => {
        if (error) {
            console.log(error);
            res.status(500).json({ success: false, message: 'An error occurred while sending the email.' });
        } else {
            console.log('Email sent: ' + info.response);
            res.json({ success: true, message: 'Thank you for your message!' });
        }
    });
});

module.exports = contactMiddleware;
