const express = require("express");
const cors = require("cors");
require("dotenv").config();
const dbConnect = require("./config/db");

const doctorRouter = require("./routes/doctorRouter");
const patientRouter = require("./routes/patientRouter");
const appointmentRouter = require("./routes/appointmentRouter");
<<<<<<< HEAD
const paymentRouter = require("./routes/paymentRouter");
=======
>>>>>>> d8160451446265840ae152573a8c04cf724cd968

const app = express();
dbConnect();

const PORT = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());

app.use("/appointment", appointmentRouter);
app.use("/doctor", doctorRouter);
app.use("/patient", patientRouter);
app.use("/payment", paymentRouter);

app.listen(PORT, () => {
    console.log("server listing on port " + PORT);
});
