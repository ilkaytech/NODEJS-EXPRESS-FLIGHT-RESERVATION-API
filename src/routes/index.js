"use strict";
/* ----------------------------------------
    NODEJS EXPRESS | FLİGHT RESERVATİON API
------------------------------------------- */
const router = require("express").Router();
/* ------------------------------------------------------- */
// routes/:

// URL: /

// auth:
router.use("/auth", require("./src/routes/auth"));

// user:
router.use("/users", require("./src/routes/user"));

// flight:
router.use("/flights", require("./src/routes/flight"));

// pessenger:
router.use("/pessengers", require("./src/routes/pessenger"));

// reservation:
router.use("/reservations", require("./src/routes/reservation"));

// document:
router.use("/documents", require("./src/routes/document"));

/* ------------------------------------------------------- */
module.exports = router;
