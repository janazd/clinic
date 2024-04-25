const express = require("express");
const cors = require("core");
require("dotenv").config();
const dbConnect = require("./config/db");
const doctorRoutes = require("./routes/doctorRoutes");

const app = express();
dbConnect();

const PORT = process.env.PORT || 5000;

app.use(cors());

app.use("/doctor", doctorRoutes);

app.listen(PORT, () => {
  console.log("server listing on port " + PORT);
});
