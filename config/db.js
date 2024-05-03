const mongoose = require("mongoose");
require("dotenv").config();

async function dbConnect() {
<<<<<<< HEAD
  mongoose
    .connect(process.env.MONGODB_URI)
    .then(() => {
      console.log("mongodb connected");
    })
    .catch((error) => {
      console.log("unable to connect");
      console.error(error);
    });
=======
    mongoose
        .connect(process.env.MONGODB_URI)
        .then(() => {
            console.log("mongodb connected");
        })
        .catch((error) => {
            console.log("unable to connect");
            console.error(error);
        });
>>>>>>> d8160451446265840ae152573a8c04cf724cd968
}

module.exports = dbConnect;
