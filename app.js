"use strict";

const express = require("express");
const ejs = require("ejs");
const bodyParser = require('body-parser');
const config = require("./config.json");
const router = require('./router');
const contact = require('./contact');
const moment = require("moment");
const chalk = require('chalk');
const compression = require("compression");
const cookieParser = require('cookie-parser');
const morgan = require('morgan');

const app = express();

const log = console.log;

log();
log();
log(chalk.green(" --- PROCESS INITIALIZATION ---"));
log("Time:", getTimeFormatted());

global.__base = __dirname + "/";
log("__base:", __base);

// Middleware
app.use(compression());
app.use(require('prerender-node'));
app.use(express.static("static"));
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cookieParser());
app.use(morgan('dev'));

// View engine setup
app.set("views", __dirname + "/views");
app.set("view engine", "ejs");

// Environment setup
app.set("env", "development");

app.use('/', router);
app.use('/', contact);

// Server Functions
function getTimeFormatted() {
    return moment().format("MMMM Do YYYY, h:mm:ss a") + " (" + Date.now() + ")";
}

function logRequests(req, res, next) {
    const ip = req.headers["x-forwarded-for"] || req.connection.remoteAddress;
    console.log();
    console.log();
    console.log(chalk.green(" --- NEW REQUEST ---"));
    console.log(chalk.yellow("Time:", getTimeFormatted()));
    console.log(chalk.blue("IP: ", ip));
    console.log(chalk.blue("Request:", req.originalUrl));
    next();
}

// Start server
const port = config.server.port || 5000;
const server = app.listen(port, () => {
    log();
    log(chalk.green("--- WEBSERVER ON ---"));
    log(chalk.yellow("Listening at http://" + config.server.domain + ":" + port));
    log();
});

// Handle server errors
server.on("error", (err) => {
    log(chalk.red("Connection error:", err));
});

// Clear cookies on shutdown
app.use(function (req, res, next) {
    for (var cookie in req.cookies) {
        res.clearCookie(cookie);
    }
    next();
});

// Handle server shutdown
process.on("SIGINT", () => {
    log(chalk.yellow("--- WEBSERVER OFF ---"));
    server.close(() => {
        process.exit(0);
    });
});

// Add middleware
app.use(logRequests);