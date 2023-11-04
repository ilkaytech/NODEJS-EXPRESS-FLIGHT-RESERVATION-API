"use strict";
/* ----------------------------------------
    NODEJS EXPRESS | FLİGHT RESERVATİON API
------------------------------------------- */
const router = require("express").Router();
/* ------------------------------------------------------- */
// routes/flight:

const permissions = require("../middlewares/permissions");
const flight = require("../controllers/flight");

// URL: /flights

// router.route('/')
//     .get(permissions.isStaffOrAdmin, flight.list)
//     .post(permissions.isStaffOrAdmin, flight.create)

// router.route('/:id')
//     .get(permissions.isStaffOrAdmin, flight.read)
//     .put(permissions.isStaffOrAdmin, flight.update)
//     .patch(permissions.isStaffOrAdmin, flight.update)
//     .delete(permissions.isAdmin, flight.delete)

router.use(permissions.isStaffOrAdmin);

router.route("/").get(flight.list).post(flight.create);

router
  .route("/:id")
  .get(flight.read)
  .put(flight.update)
  .patch(flight.update)
  .delete(permissions.isAdmin, flight.delete);

/* ------------------------------------------------------- */
module.exports = router;
