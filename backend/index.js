const express = require("express");
const cors = require("cors");
require("dotenv").config();
const dbConnect = require("./config/db");

const doctorRouter = require("./routes/doctorRouter");
const patientRouter = require("./routes/patientRouter");
const appointmentRouter = require("./routes/appointmentRouter");
const userRouter = require("./routes/userRouter");
const serviceRouter = require("./routes/serviceRouter");
const contactRouter = require("./routes/contactRouter");
const roleRouter = require("./routes/roleRouter");

const app = express();
dbConnect();

const PORT = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());

app.use("/appointment", appointmentRouter);
app.use("/doctor", doctorRouter);
app.use("/patient", patientRouter);
app.use("/user", userRouter);
app.use("/service", serviceRouter);
app.use("/api/contact", contactRouter); // Use the new contact router
app.use("/role", roleRouter);

app.listen(PORT, () => {
    console.log("server listing on port " + PORT);
});
