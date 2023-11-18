"use strict";
/* ----------------------------------------
    NODEJS EXPRESS | FLİGHT RESERVATİON API
------------------------------------------- */
// dateToLocaleString(date:Date):

module.exports = function (dateData) {
  return dateData.toLocaleString("tr-tr", {
    dateStyle: "full",
    timeStyle: "medium",
  });
};
