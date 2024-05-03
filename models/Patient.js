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

    date_of_birth: {
      type: Date,
    },

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
