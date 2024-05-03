const mongoose = require("mongoose");
require("dotenv").config();

async function dbConnect() {
  mongoose
    .connect(process.env.MONGODB_URI)
    .then(() => {
      console.log("mongodb connected");
    })
    .catch((error) => {
      console.log("unable to connect");
      console.error(error);
    });
}

module.exports = dbConnect;
