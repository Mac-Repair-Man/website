import nodemailer from "nodemailer";

export default async function sendEmail(req, res) {
    if (req.method !== 'POST') {
        // Method not allowed
        return req.status(405).end();
    }

    const { name, email, phone, subject, message } = req.body;

    // Create a nodemailer transporter
    const transporter = nodemailer.createTransport({
        service: 'gmail',
        auth: {
            user: process.env.GMAIL_EMAIL,
            pass: process.env.GMAIL_PASSWORD
        },
        logger: true,
        debug: false,
    });

    // Setup email data
    const mailOptions = {
        from: process.env.GMAIL_EMAIL,
        to: 'info@macrepairman.ca',
        subject: 'New Contact Form Submission',
        html: '<p><strong>Name:</strong> ' + req.body.name + '</p>' +
            '<p><strong>Email:</strong> ' + req.body.email + '</p>' +
            '<p><strong>Subject:</strong> ' + req.body.subject + '</p>' +
            '<p><strong>Message:</strong> ' + req.body.message + '</p>'
    };

    // Send the email
    try {
        const info = await transporter.sendEmail(mailOptions);
        res.status(200).json({ message: 'Thank you for your message! We will respond shortly!', info });
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Error while sending email', error: error.message });
    }
}