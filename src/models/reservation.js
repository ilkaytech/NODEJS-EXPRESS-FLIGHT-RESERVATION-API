"use strict";
/* ----------------------------------------
    NODEJS EXPRESS | FLİGHT RESERVATİON API
------------------------------------------- */
const { mongoose } = require("../configs/dbConnection");
/* ------------------------------------------------------- *
{
	"flightId": "652cebb3bae9cde5e8a9753b",
	"passengers": [
	  "652cf408b63b905ad13d9a87",
	  "652cf408b63b905ad13d9a89",
	  {
		"firstName": "Test 11",
		"lastName": "Test 11",
		"email": "test11@site.com"
	  },
	  {
		"firstName": "Test 12",
		"lastName": "Test 12",
		"email": "test12@site.com"
	  },
	],
	"createdId": "652ceaa1bae9cde5e8a97522"
  }
/* ------------------------------------------------------- */
// Reservation Model:

const ReservationSchema = new mongoose.Schema(
  {
    flightId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Flight",
      required: true,
    },

    // passengers: [
    // 	{
    // 		type: mongoose.Schema.Types.ObjectId,
    // 		ref: 'User',
    // 		required: true,
    // 	}
    // ],
    passengers: [],

    createdId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      required: true,
    },
  },
  { collection: "reservations", timestamps: true }
);

/* ------------------------------------------------------- */
module.exports = mongoose.model("Reservation", ReservationSchema);
