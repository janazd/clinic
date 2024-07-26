const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const PatientSchema = new Schema(
    {
        user: {
            type: Schema.Types.ObjectId,
            ref: "User",
        },

        medical_history: {
            type: String,
        },
    },
    { timestamps: true }
);

const Patient = mongoose.model("Patient", PatientSchema);

module.exports = Patient;
