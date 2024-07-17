const bcrypt = require("bcrypt");
const Patient = require("../models/Patient");

exports.addPatient = async (req, res) => {
    try {
        if (!req.body.firstname || !req.body.lastname || !req.body.phone) {
            return res.status(400).json({ message: "Missing required fields" });
        }
        const { firstname, lastname, gender, yob, phone, email, password } =
            req.body;

        const existingPatient = await Patient.findOne({ phone });
        if (existingPatient) {
            return res.status(400).json({ message: "Patient already exists" });
        }

        const salt = await bcrypt.genSalt(10);

        const patient = new Patient({
            firstname,
            lastname,
            gender,
            yob,
            phone,
            email,
            password: await bcrypt.hash(password, salt),
        });
        patient.save();

        return res.status(201).json({
            _id: patient._id,
            firstname,
            lastname,
            gender,
            yob,
            email,
            phone,
            createdAt: patient.createdAt,
        });
    } catch (error) {
        console.error(error);
        return res.status(500).json({ message: "Server Error" });
    }
};

exports.getAllPatients = async (req, res) => {
    try {
        const patients = await Patient.find().select("-password");
        res.json(patients);
    } catch (err) {
        console.error(err);
        res.status(500).json({ message: "Server Error" });
    }
};

exports.getPatientById = async (req, res) => {
    try {
        const patient = await Patient.findById(req.params.id).select(
            "-password"
        );
        if (!patient) {
            return res.status(404).json({ message: "Patient not found" });
        }
        res.json(patient);
    } catch (err) {
        console.error(err);
        res.status(500).json({ message: "Server Error" });
    }
};

// exports.createPatient = async (req, res) => {
//     if (!req.body.firstname || !req.body.lastname || !req.body.phone) {
//         return res.status(400).json({ message: "Missing required fields" });
//     }

//     try {
//         const newPatient = new Patient(req.body);
//         const savedPatient = await newPatient.save();
//         res.status(201).json(savedPatient);
//     } catch (err) {
//         console.error(err);
//         if (err.code && err.code === 11000) {
//             const duplicateField = Object.keys(err.keyValue)[0];
//             return res
//                 .status(400)
//                 .json({ message: `Duplicate ${duplicateField}` });
//         }
//         res.status(500).json({ message: "Server Error" });
//     }
// };

exports.updatePatient = async (req, res) => {
    const updates = Object.keys(req.body);
    const allowedUpdates = ["firstname", "lastname", "phone"];
    const isValidUpdate = updates.every((update) =>
        allowedUpdates.includes(update)
    );

    if (!isValidUpdate) {
        return res.status(400).json({ message: "Invalid update fields" });
    }

    try {
        const patient = await Patient.findByIdAndUpdate(
            req.params.id,
            req.body,
            {
                new: true,
            }
        );
        if (!patient) {
            return res.status(404).json({ message: "Patient not found" });
        }
        res.json(patient);
    } catch (err) {
        console.error(err);
        res.status(500).json({ message: "Server Error" });
    }
};

exports.deletePatient = async (req, res) => {
    try {
        const patient = await Patient.findByIdAndDelete(req.params.id);
        if (!patient) {
            return res.status(404).json({ message: "Patient not found" });
        }
        res.json({ message: "Patient deleted successfully" });
    } catch (err) {
        console.error(err);
        res.status(500).json({ message: "Server Error" });
    }
};
