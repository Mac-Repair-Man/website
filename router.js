"use strict";

const express = require("express");
const router = express.Router();

// Middleware to set the Strict-Transport-Security header
router.use(function(req, res, next) {
    res.setHeader('Strict-Transport-Security', 'max-age=31536000; includeSubDomains; preload; SameSite=Strict');
    next();
});

// Root route
router.get("/", function (req, res) {
    res.render("pages/index"); // Render the "pages/index" view
});

// Terms route
router.get("/terms", function (req, res) {
    res.render("pages/terms"); // Render the "pages/terms" view
});

// Route for serving robots.txt file
router.get("/robots.txt", function(req, res) {
    res.sendFile(__dirname + "/robots.txt"); // Adjust the path to the robots.txt file if necessary
});

// Route for serving sitemap.xml file
router.get("/sitemap.xml", function(req, res) {
    res.sendFile(__dirname + "/sitemap.xml"); // Adjust the path to the sitemap.xml file if necessary
});

// 404 handler - Redirect all unrecognized routes back to the root route
router.use((req, res) => {
    res.redirect("/");
});

module.exports = router;