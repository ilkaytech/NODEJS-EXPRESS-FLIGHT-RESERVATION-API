"use strict";
/* ----------------------------------------
    NODEJS EXPRESS | FLİGHT RESERVATİON API
------------------------------------------- */
const { mongoose } = require("../configs/dbConnection");
/* ------------------------------------------------------- *
{
    "firstName": "FirstName 1",
    "lastName": "LastName",
    "gender": "F",
    "email": "test1@site.com",
    "createdId": "65317b1c29b1267920ddf30d"
}
/* ------------------------------------------------------- */
// Passenger Model:

const PassengerSchema = new mongoose.Schema(
  {},
  { collection: "passengers", timestamps: true }
);

/* ------------------------------------------------------- */
module.exports = mongoose.model("Passenger", PassengerSchema);
