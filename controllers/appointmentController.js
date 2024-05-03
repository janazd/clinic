const Appointment = require("../models/Appointment");

<<<<<<< HEAD
=======
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

>>>>>>> d8160451446265840ae152573a8c04cf724cd968
exports.getAllAppointments = async (req, res) => {
    try {
        const appointments = await Appointment.find()
            .populate("pid")
            .populate("doc_id");
        res.json(appointments);
    } catch (err) {
        console.error(err);
        res.status(500).json({ message: "Server Error" });
    }
};

exports.getAppointmentById = async (req, res) => {
    try {
        const appointment = await Appointment.findById(req.params.id)
            .populate("pid")
            .populate("doc_id");
        if (!appointment) {
            return res.status(404).json({ message: "Appointment not found" });
        }
        res.json(appointment);
    } catch (err) {
        console.error(err);
        res.status(500).json({ message: "Server Error" });
    }
};

exports.getAppointmentsByDoctor = async (req, res) => {
    const doctorId = req.params.doctorId;

    try {
        const appointments = await Appointment.find({ doc_id: doctorId })
            .populate("pid")
            .populate("doc_id");
        if (!appointments.length) {
            return res
                .status(404)
                .json({ message: "No appointments found for this doctor" });
        }
        res.json(appointments);
    } catch (err) {
        console.error(err);
        res.status(500).json({ message: "Server Error" });
    }
};

exports.getAppointmentsByPatient = async (req, res) => {
    const patientId = req.params.patientId;

    try {
        const appointments = await Appointment.find({ pid: patientId })
            .populate("pid")
            .populate("doc_id");
        if (!appointments.length) {
            return res
                .status(404)
                .json({ message: "No appointments found for this patient" });
        }
        res.json(appointments);
    } catch (err) {
        console.error(err);
        res.status(500).json({ message: "Server Error" });
    }
};

exports.createAppointment = async (req, res) => {
<<<<<<< HEAD
  if (!req.body.pid || !req.body.doc_id || !req.body.date) {
    return res.status(400).json({ message: "Missing required fields" });
  }

  try {
    const existingAppointment = await Appointment.findOne({ date });

    if (existingAppointment) {
      return res.status(400).json({ message: "Appointment already exists" });
    }

    const newAppointment = new Appointment(req.body);
    const savedAppointment = await newAppointment.save();
    res.status(201).json(savedAppointment);
  } catch (err) {
    console.error(err);
    if (err.name === "MongoError" && err.kind === "ObjectId") {
      return res
        .status(400)
        .json({ message: "Invalid patient or doctor reference" });
=======
    if (!req.body.pid || !req.body.doc_id || !req.body.date) {
        return res.status(400).json({ message: "Missing required fields" });
    }

    try {
        const newAppointment = new Appointment(req.body);
        const savedAppointment = await newAppointment.save();
        res.status(201).json(savedAppointment);
    } catch (err) {
        console.error(err);
        if (err.name === "MongoError" && err.kind === "ObjectId") {
            return res
                .status(400)
                .json({ message: "Invalid patient or doctor reference" });
        }
        res.status(500).json({ message: "Server Error" });
>>>>>>> d8160451446265840ae152573a8c04cf724cd968
    }
};

exports.updateAppointment = async (req, res) => {
    const updates = Object.keys(req.body);
    const allowedUpdates = ["pid", "doc_id", "date", "reason", "status"];
    const isValidUpdate = updates.every((update) =>
        allowedUpdates.includes(update)
    );

    if (!isValidUpdate) {
        return res.status(400).json({ message: "Invalid update fields" });
    }

    try {
        const appointment = await Appointment.findByIdAndUpdate(
            req.params.id,
            req.body,
            { new: true }
        );
        if (!appointment) {
            return res.status(404).json({ message: "Appointment not found" });
        }
        res.json(appointment);
    } catch (err) {
        console.error(err);
        if (err.name === "MongoError" && err.kind === "ObjectId") {
            return res
                .status(400)
                .json({ message: "Invalid patient or doctor reference" });
        }
        res.status(500).json({ message: "Server Error" });
    }
};

exports.deleteAppointment = async (req, res) => {
    try {
        const appointment = await Appointment.findByIdAndDelete(req.params.id);
        if (!appointment) {
            return res.status(404).json({ message: "Appointment not found" });
        }
        res.json({ message: "Appointment deleted successfully" });
    } catch (err) {
        console.error(err);
        res.status(500).json({ message: "Server Error" });
    }
};
