const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const AppointmentSchema = new Schema({
    pid: {
        type: Schema.Types.ObjectId,
        ref: "Patient",
    },
    doc_id: {
        type: Schema.Types.ObjectId,
        ref: "Doctor",
    },
    date: {
        type: Date,
    },
    timeSlot: {
        type: String,
    },
    reason: {
        type: String,
    },
    status: {
        type: String,
        enum: ["confirmed", "cancelled", "completed", "pending"],
        default: "pending",
    },
});

const Appointment = mongoose.model("Appointment", AppointmentSchema);

module.exports = Appointment;
