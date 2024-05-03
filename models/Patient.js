const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const PatientSchema = new Schema(
    {
        firstname: {
            type: String,
            required: true,
        },

        lastname: {
            type: String,
            required: true,
            match: /[a-z]/,
        },

        gender: {
            type: String,
            enum: ["male", "female"],
        },

<<<<<<< HEAD
    date_of_birth: {
      type: Date,
    },
=======
        age: {
            type: Number,
        },
>>>>>>> d8160451446265840ae152573a8c04cf724cd968

        phone: {
            type: Number,
        },

        medical_history: {
            type: String,
        },
    },
    { timestamps: true }
);

const Patient = mongoose.model("Patient", PatientSchema);

module.exports = Patient;
