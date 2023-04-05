"use strict";

const express = require("express");
const router = express.Router();

// Middleware to set the Strict-Transport-Security header
router.use(function(req, res, next) {
    res.setHeader('Strict-Transport-Security', 'max-age=31536000; includeSubDomains; preload; SameSite=Strict');
    next();
});

// Routes
router.get("/", function (req, res) {
    res.render("pages/index");
});

router.get("/terms", function (req, res) {
    res.render("pages/terms");
});

router.get("/robots.txt", function(req, res) {
    res.sendFile(__dirname + "/robots.txt");
});

router.get("/sitemap.xml", function(req, res) {
    res.sendFile(__dirname + "/sitemap.xml");
});

// 404 handler
router.use((req, res) => {
    res.redirect("/");
});

module.exports = router;