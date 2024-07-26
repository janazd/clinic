const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const AppointmentSchema = new Schema(
    {
        pid: {
            type: Schema.Types.ObjectId,
            ref: "Patient",
        },
        doc_id: {
            type: Schema.Types.ObjectId,
            ref: "Doctor",
        },
        service: {
            type: Schema.Types.ObjectId,
            ref: "Service",
        },
        date: {
            type: Date,
            required: true,
        },
        startTime: {
            type: String,
            required: true,
        },
        endTime: {
            type: String,
            required: true,
        },
        reason: {
            type: String,
        },
        status: {
            type: String,
            enum: ["confirmed", "cancelled", "completed", "pending"],
            default: "pending",
        },
    },
    { timestamps: true }
);

const Appointment = mongoose.model("Appointment", AppointmentSchema);

module.exports = Appointment;
