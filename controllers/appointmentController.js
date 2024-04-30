const Appointment = require("../models/Appointment")

async function addAppointment(req, res) {
    const { pid, doc_id, date, reason, status } = req.body

    const existingAppointment = await Appointment.findOne({ date })
}
