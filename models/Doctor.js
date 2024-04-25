const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const DoctorSchema = new Schema(
  {
    firstname: {
      type: String,
      required: true,
    },
    lastname: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      unique: true,
      required: true,
      match: [/^\w+([\.-]?\w+)@\w+([\.-]?\w+)(\.\w{2,3})+$/, "Invalid email"],
    },
    password: {
      type: String,
      required: true,
    },
    schedule: {
      type: Date,
    },
  },
  { timestamps: true }
);

const Doctor = mongoose.model("Doctor", DoctorSchema);

module.exports = Doctor;
