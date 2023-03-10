"use strict";

const express = require("express"),
    ejs = require("ejs"),
    app = express(),
    config = require("./config.json"),
    moment = require("moment"),
    chalk = require('chalk'),
    log = console.log;

log();
log();
log(chalk.green(" --- PROCESS INITIALIZATION ---"));
log("Time:", Date.now());

global.__base = __dirname + "/";
log("__base:", __base);

app.set("view engine", "ejs");
app.set("views", __dirname + "/views");
app.use(express.static("static"));
app.set("env", "development");

app.use(logRequests);


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

function logRequests(req, res, next) {
    const ip = req.headers["x-forwarded-for"] || req.connection.remoteAddress;
    log();
    log(chalk.green("--- NEW REQUEST ---"));
    log(chalk.yellow(
        "Time:",
        moment().format("MMMM Do YYYY, h:mm:ss a"),
        "(" + Date.now() + ")"
    ));
    log(chalk.blue("IP: ", ip));
    log(chalk.blue("Request:", req.originalUrl));
    next();
}

const port = config.server.port || 5000;
const server = app
    .listen(port, () => {
        log();
        log(chalk.green("--- WEBSERVER ON ---"));
        log(chalk.yellow("Listening at http://" + config.server.domain + ":" + port));
        log();
    })
    .on("error", (err) => {
        log(chalk.red("Connection error:", err));
    });