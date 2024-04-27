const express = require("express");
const cors = require("cors");
require("dotenv").config();
const dbConnect = require("./config/db");

const doctorRouter = require("./routes/doctorRoutes");
const patientRouter = require("./routes/patientRouter");
const appointmentRouter = require("./routes/appointmentRouter");
const bodyParser = require("body-parser");

const app = express();
dbConnect();

const PORT = process.env.PORT || 5000;

app.use(cors());
bodyParser.json();

app.use("/appointment", appointmentRouter);
app.use("/doctor", doctorRouter);
app.use("/patient", patientRouter);

app.listen(PORT, () => {
  console.log("server listing on port " + PORT);
});
