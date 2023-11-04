"use strict";
/* ----------------------------------------
    NODEJS EXPRESS | FLİGHT RESERVATİON API
------------------------------------------- */
const { mongoose } = require("../configs/dbConnection");
/* --------------------------------------------------------------- */

/* --------------------------------------------------------------- */
// User Model:
const passwordEncrypt = require("../helpers/passwordEncrypt");

const UserSchema = new mongoose.Schema(
  {
    username: {
      type: String,
      trim: true,
      required: true,
      unique: true,
    },

    password: {
      type: String,
      trim: true,
      required: true,
      //   select: false,
      set: (password = passwordEncrypt(password)),
    },

    email: {
      type: String,
      trim: true,
      required: [true, "Email field must be required."],
      uniqu: [true, "There is this email. Email field must be unique."],
    },
  },
  {}
);

/* --------------------------------------------------------------- */
module.exports = mongoose.model("User", UserSchema);
