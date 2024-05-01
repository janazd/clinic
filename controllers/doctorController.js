const Doctor = require("../models/Doctor")

exports.addDoctor = async (req, res) => {
    console.log(req)
    const { firstname, lastname, email, password, schedule } = req.body

    const existingDoctor = await Doctor.findOne({ email })

    if (existingDoctor) {
        return res.status(400).json({ message: "Doctor already exists" })
    }

    const doctor = new Doctor({
        firstname,
        lastname,
        email,
        password,
        schedule,
    })

    await doctor.save()
}
exports.getAllDoctors = async (req, res) => {
    try {
        const doctors = await Doctor.find()
        res.json(doctors)
    } catch (err) {
        console.error(err)
        res.status(500).json({ message: "Server Error" })
    }
}

exports.getDoctorById = async (req, res) => {
    try {
        const doctor = await Doctor.findById(req.params.id)
        if (!doctor) {
            return res.status(404).json({ message: "Doctor not found" })
        }
        res.json(doctor)
    } catch (err) {
        console.error(err)
        res.status(500).json({ message: "Server Error" })
    }
}

exports.updateDoctor = async (req, res) => {
    const updates = Object.keys(req.body)
    const allowedUpdates = ["firstname", "lastname", "email", "password"]
    const isValidUpdate = updates.every((update) =>
        allowedUpdates.includes(update)
    )

    if (!isValidUpdate) {
        return res.status(400).json({ message: "Invalid update fields" })
    }

    try {
        const doctor = await Doctor.findByIdAndUpdate(req.params.id, req.body, {
            new: true,
        })
        if (!doctor) {
            return res.status(404).json({ message: "Doctor not found" })
        }
        res.json(doctor)
    } catch (err) {
        console.error(err)
        res.status(500).json({ message: "Server Error" })
    }
}

exports.deleteDoctor = async (req, res) => {
    try {
        const doctor = await Doctor.findByIdAndDelete(req.params.id)
        if (!doctor) {
            return res.status(404).json({ message: "Doctor not found" })
        }
        res.json({ message: "Doctor deleted successfully" })
    } catch (err) {
        console.error(err)
        res.status(500).json({ message: "Server Error" })
    }
}
