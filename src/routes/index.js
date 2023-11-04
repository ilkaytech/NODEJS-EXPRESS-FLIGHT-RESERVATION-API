"use strict";
/* ----------------------------------------
    NODEJS EXPRESS | FLİGHT RESERVATİON API
------------------------------------------- */
const router = require("express").Router();
/* ------------------------------------------------------- */
// routes/:

// URL: /

// auth:
router.use("/auth", require("./auth"));

// user:
router.use("/users", require("./user"));

// flight:
router.use("/flights", require("./flight"));

// pessenger:
router.use("/pessengers", require("./pessenger"));

// reservation:
router.use("/reservations", require("./reservation"));

// document:
router.use("/documents", require("./document"));

/* ------------------------------------------------------- */
module.exports = router;
