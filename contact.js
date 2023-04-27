const express = require("express");
const nodemailer = require('nodemailer');
const config = require("./config.json");

const contactMiddleware = express.Router();

// Parse request body for form data
contactMiddleware.use(express.urlencoded({ extended: true }));
contactMiddleware.use(express.json());

contactMiddleware.post('/contact', (req, res) => {
  const transporter = nodemailer.createTransport({
    service: 'Zoho',
    auth: {
      user: config.contact.email,
      pass: config.contact.password
    }
  });

  const mailOptions = {
    from: config.contact.email,
    to: 'info@macrepairman.ca',
    subject: 'New message from your website!',
    text: `You have received a new message from your website contact form.\n\nName: ${req.body.name}\nEmail: ${req.body.email}\nMessage: ${req.body.message}`,
    html: `<h1>You have received a new message from your website contact form.</h1><p>Name: ${req.body.name}</p><p>Email: ${req.body.email}</p><p>Message: ${req.body.message}</p>`
  };

  transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
      console.error(error);
      res.status(500).json({ success: false, message: 'An error occurred while sending the email.' });
    } else {
      console.log('Email sent successfully:', info.response);
      res.json({ success: true, message: 'Thank you for your message!' });
    }
  });
});

module.exports = contactMiddleware;
