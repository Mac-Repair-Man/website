"use strict";

console.log();
console.log();
console.log(" --- PROCESS INITIALIZATION ---");
console.log("Time:", Date.now());

const express = require("express"),
    ejs = require("ejs"),
    app = express(),
    config = require("./config.json");

app.set("view engine", "ejs");
app.set("views", __dirname + "/views");
app.set("env", "development");

// Main home page
app.get("/", function (req, res) {
    res.render("pages/index");
});

// Error 404 Page Not Found
app.get("*", function (req, res, next) {
    res.status(404);
    res.errCode = 404;
    next("URL " + req.originalUrl + " Not Found");
});

// Server Functions
function getTimeFormatted() {
    return moment().format("MMMM Do YYYY, h:mm:ss a") + " (" + Date.now() + ")";
}

const port = config.server.port || 5000;
const server = app
    .listen(port, () => {
        console.log();
        console.log("--- WEBSERVER ON ---");
        console.log("Listening at http://" + config.server.domain + ":" + port);
        console.log();
    })
    .on("error", (err) => {
        console.log("Connection error:", err);
    });