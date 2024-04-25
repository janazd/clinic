const Appointment = require("../models/Appointment");

async function addAppointment(req, res) {
  const { pid, doc_id, date, reason, status } = req.body;

  const existingAppointment = await Appointment.findOne({ date });

  if (existingAppointment) {
    return res.status(400).json({ message: "Appointment already exists" });
  }

  const appointment = new Appointment({
    pid,
    doc_id,
    date,
    reason,
    status,
  });

  await appointment.save();
}

async function getAllAppointments(req, res) {
  const appointment = await Appointment.find({});
  return res.json(appointments);
}

async function getAppointmentById(req, res) {
  const appointment = await Appointment.findById(req.params.id);

  if (!appointment) {
    return res.status(404).json({ message: "Appointment not found" });
  }

  return res.json(appointment);

  async function deleteAppointment(req, res) {
    const appointment = await Appointment.findById(req.params.id);

    if (!appointment) {
      return res.status(404).json({ message: "Appointment not found" });
    }

    return res.json({ message: "Appointment Removed" });
  }

  async function updateAppointment(req, res) {
    const appointment = await Appointment.findById(req.params.id);
  }

  if (!appointment) {
    return res.status(404).json({ message: "Appointment not found" });
  }

  appointment.firstname = req.body.firstname || appointment.firstname;
  appointment.lastname = req.body.lastname || appointment.lastname;
  appointment.email = req.body.email || appointment.email;
  appointment.password = req.body.password || appointment.password;
  appointment.schedule = req.body.schedule || appointment.schedule;

  const UpdatedAppointment = await appointment.save();

  res.json({ message: "Appointment updated" });
}
