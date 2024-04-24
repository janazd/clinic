const Patient = require("../models/Patient");

function addPatient(req, res) {
  try {
    const { firstname, lastname, gender, age, phone, medical_history } =
      req.body;

    //lezem es2al dr shu lezem 7ot bdal l phone
    const existingPatient = Patient.findOne({ phone });
    if (existingPatient) {
      return res.status(400).json({ message: "Patient already exists" });
    }

    const patient = new Patient({
      firstname,
      lastname,
      gender,
      age,
      phone,
      medical_history,
    });
    patient.save();

    return res.status(201).json({ message: "Patient created succesfully" });
  } catch (error) {
    console.error(error);
    return res.status(500).json({ message: "Server Error" });
  }
}

async function getAllPatient(req, res) {
  const patients = await Patient.find({});
  res.json(patients);
}

async function getPatientById(req, res) {
  const user = await Patient.findById(req.params.id);

  if (!Patient) {
    return res.status(404).json({ message: "Patient nt found " });
  }

  return res.json(Patient);
}

async function deletePatient(req, res) {
  const patient = await Patient.findById(req.params.id);

  if (!patient) {
    return res.status(404).json("Patient not found");
  }

  return res.json({ message: "Patient removed" });
}

async function UpdatePatient(req, res) {
  const patient = await Patient.findById(req.params.id);

  if (!patient) {
    return res.status(404).json({ message: "Patient not found" });
  }

  patient.firstname = req.body.firstname || patient.firstname;
  patient.lastname = req.body.lastname || patient.lastname;
  patient.phone = req.body.phone || patient.phone;
  patient.medical_history = req.body.medical_history || patient.medical_history;

  const UpdatePatient = await patient.save();

  res.json({ message: "Patient Updated" });
}
