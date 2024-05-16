const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

const Doctor = require("../models/Doctor");
const Patient = require("../models/Patient");

exports.login = async (req, res) => {
    try {
        let isDoctor = false;
        let isPatient = false;

        const { email, password } = req.body;

        const doctor = await Doctor.findOne({ email });
        const patient = await Patient.findOne({ email });

        if (!doctor && !patient) {
            return res.status(400).json({ message: "Invalid credentials" });
        }

        if (doctor) {
            isDoctor = true;
            isPatient = false;

            const isPasswordMatch = await bcrypt.compare(
                password,
                doctor.password
            );

            if (!isPasswordMatch) {
                return res.status(400).json({ message: "Invalid credentials" });
            }

            const payload = { _id: doctor._id, d: true };
            const token = jwt.sign(payload, process.env.JWT_SECRET, {
                expiresIn: "24h",
            });

            return res.status(200).json({ token });
        }

        if (patient) {
            isPatient = true;
            isDoctor = false;
            const isPasswordMatch = await bcrypt.compare(
                password,
                patient.password
            );

            if (!isPasswordMatch) {
                return res.status(400).json({ message: "Invalid credentials" });
            }

            const payload = { _id: patient._id, p: true };
            const token = jwt.sign(payload, process.env.JWT_SECRET, {
                expiresIn: "24h",
            });

            return res.status(200).json({ token });
        }
    } catch (error) {
        res.status(500).json({ message: "Server Error", error });
    }
};
