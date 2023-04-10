"use strict";

// Import required packages and modules
const express = require("express"); // Web application framework
const ejs = require("ejs"); // Template engine
const bodyParser = require('body-parser'); // Middleware to parse request bodies
const config = require("./config.json"); // Configuration file
const router = require('./router'); // Route handler
const contact = require('./contact'); // Contact form handler
const moment = require("moment"); // Date and time library
const chalk = require('chalk'); // Colored console logging
const compression = require("compression"); // Middleware to compress responses
const cookieParser = require('cookie-parser'); // Middleware to parse cookies
const morgan = require('morgan'); // HTTP request logger

// Create the Express application
const app = express();

// Set up logging function
const log = console.log;

// Log process initialization
log();
log();
log(chalk.green(" --- PROCESS INITIALIZATION ---"));
log("Time:", getTimeFormatted());

// Set up global variable for root directory
global.__base = __dirname + "/";
log("__base:", __base);

// Middleware
app.use(compression());
app.use(require('prerender-node').set('prerenderToken', config.prerender.token));
app.use(express.static("static"));
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cookieParser());
app.use(morgan('tiny'));
app.use(logRequests);

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

// Git pull request
app.post('/deploy', (req, res) => {
    exec('git pull origin main', (err, stdout, stderr) => {
        if (err) {
            console.error(err);
            return res.status(500).send('Error while updating repository');
        }

        console.log(`stdout: ${stdout}`);
        console.log(`stderr: ${stderr}`);

        res.status(200).send('Repository updated successfully');
        process.exit(0);
    });
});

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