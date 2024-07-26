const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const DoctorSchema = new Schema(
    {
        user: {
            type: Schema.Types.ObjectId,
            ref: "User",
        },
        specialization: {
            type: String,
            required: true,
        },
        schedule: {
            type: String,
        },
    },
    { timestamps: true }
);

const Doctor = mongoose.model("Doctor", DoctorSchema);

module.exports = Doctor;
