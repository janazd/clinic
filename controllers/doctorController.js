const Doctor = require("../models/Doctor");

async function addDoctor(req, res) {
  const { firstname, lastname, email, password, schedule, specialisation } =
    req.body;

  const existingDoctor = await Doctor.findOne({ email });

  if (existingDoctor) {
    return res.status(400).json({ message: "Doctor already exists" });
  }

  const doctor = new Doctor({
    firstname,
    lastname,
    email,
    password,
    schedule,
    specialisation,
  });

  await doctor.save();
}

async function getAllDoctors(req, res) {
  const doctors = await Doctor.find({});
  return res.json(doctors);
}

async function getDoctorById(req, res) {
  const doctor = await Doctor.findById(req.params.id);

  if (!doctor) {
    return res.status(404).json({ message: "Doctor not found" });
  }
  return res.json(doctor);
}

async function deleteDoctor(req, res) {
  const doctor = await Doctor.findById(req.params.id);

  if (!doctor) {
    return res.status(404).json("Doctor not found");
  }

  return res.json({ message: "Doctor removed" });
}

async function updateDoctor(req, res) {
  const doctor = await Doctor.findById(req.params.id);

  if (!doctor) {
    return res.status(404).json({ message: "Doctor not found" });
  }

  doctor.firstname = req.body.firstname || doctor.firstname;
  doctor.lastname = req.body.lastname || doctor.lastname;
  doctor.email = req.body.email || doctor.email;
  doctor.password = req.body.password || doctor.password;
  doctor.schedule = req.body.schedule || doctor.schedule;

  const updatedDoctor = await doctor.save();

  res.json({ message: "Doctor updated" });
}

module.exports = {
  addDoctor,
  deleteDoctor,
  getAllDoctors,
  getDoctorById,
  updateDoctor,
};
