"use strict";
/* ----------------------------------------
    NODEJS EXPRESS | FLİGHT RESERVATİON API
------------------------------------------- */

const express = require("express");
const app = express();

/* ------------------------------------------------------- */
// Required Modules:

// envVariables to process.env:
require("dotenv").config();
const PORT = process.env?.PORT || 8000;

// asyncErrors to errorHandler:
require("express-async-errors");

/* ------------------------------------------------------- */
// Configrations:

// Connect to DB:
const { dbConnection } = require("./src/configs/dbConnection");
dbConnection();

/* ------------------------------------------------------- */
// Middlewares:

// Accept JSON:
app.use(express.json());

// Check Authentication:
app.use(require("./src/middlewares/authentication"));

// Run Logger:
app.use(require("./src/middlewares/logger"));

// res.getModelList():
app.use(require("./src/middlewares/findSearchSortPage"));

/* ------------------------------------------------------- */
// Routes:

// HomePath:
app.all("/", (req, res) => {
  res.send({
    error: false,
    message: "Welcome to FLIGHT RESERVATION API",
    documents: "/documents",
    user: req.user,
  });
});

//? Move to routes/index.js:
// // auth:
// app.use('/auth', require('./src/routes/auth'))
// // user:
// app.use('/users', require('./src/routes/user'))
// // flight:
// app.use('/flights', require('./src/routes/flight'))
// // passenger:
// app.use('/passengers', require('./src/routes/passenger'))
// // reservation:
// app.use('/reservations', require('./src/routes/reservation'))
// // document:
// app.use('/documents', require('./src/routes/document'))

// Routes:
// app.use('/', require('./src/routes/index.js'))
// app.use('/', require('./src/routes/index'))
// app.use('/', require('./src/routes/'))
app.use(require("./src/routes/"));

/* ------------------------------------------------------- */

// errorHandler:
app.use(require("./src/middlewares/errorHandler"));

// RUN SERVER:
app.listen(PORT, () => console.log("http://127.0.0.1:" + PORT));

/* ------------------------------------------------------- */
// Syncronization (must be in commentLine):
// require('./src/helpers/sync')()
