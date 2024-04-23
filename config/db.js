const mongoose = require("mongoose");

const db = mongoose
  .connect(
    "mongodb+srv://janazeindein:Wb82YsG9NhMFaPA9@clinic.c2uvjtv.mongodb.net/"
  )
  .then(function () {
    console.log("mongodb connected");
  });

module.exports = db;
