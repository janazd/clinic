const bcrypt = require("bcrypt");
const Patient = require("../models/Patient");
const User = require("../models/User");
const Role = require("../models/Role");

exports.addPatient = async (req, res) => {
    try {
        if (
            !req.body.firstname ||
            !req.body.lastname ||
            !req.body.phone ||
            !req.body.email ||
            !req.body.password
        ) {
            return res.status(400).json({ message: "Missing required fields" });
        }
        const { firstname, lastname, gender, yob, phone, email, password } =
            req.body;

        const existingPatient = await Patient.findOne({ email });

        if (existingPatient) {
            return res.status(400).json({ message: "Patient already exists" });
        }

        const salt = await bcrypt.genSalt(10);
        const patientRole = await Role.findOne({ role: "Patient" });

        console.log(patientRole);

        const user = new User({
            firstname,
            lastname,
            gender,
            yob,
            phone,
            email,
            password: await bcrypt.hash(password, salt),
            role: patientRole._id,
        });

        const newUser = await user.save();

        const patient = new Patient({
            user: newUser._id,
        });

        const newPatient = await patient.save();

        return res.status(201).json({
            _id: newPatient._id,
            firstname,
            lastname,
            email,
            createdAt: newPatient.createdAt,
        });
    } catch (error) {
        console.error(error);
        return res.status(500).json({ message: "Server Error" });
    }
};

exports.getAllPatients = async (req, res) => {
    try {
        const patients = await Patient.find().populate({
            path: "user role",
            select: "-password",
        });
        res.json(patients);
    } catch (err) {
        console.error(err);
        res.status(500).json({ message: "Server Error" });
    }
};

exports.getPatientById = async (req, res) => {
    try {
        const patient = await Patient.findById(req.params.id).populate({
            path: "user role",
            select: "-password",
        });
        if (!patient) {
            return res.status(404).json({ message: "Patient not found" });
        }
        res.json(patient);
    } catch (err) {
        console.error(err);
        res.status(500).json({ message: "Server Error" });
    }
};

exports.updatePatient = async (req, res) => {
    try {
        const { firstname, lastname, phone } = req.body;

        const patient = await Patient.findById(req.params.id);
        const user = await User.findById(patient.user._id);

        await User.findByIdAndUpdate(patient.user._id, {
            firstname: firstname || user.firstname,
            lastname: lastname || user.lastname,
            phone: phone || user.phone,
        });

        res.json({ message: "Patient Updated" });
    } catch (err) {
        console.error(err);
        res.status(500).json({ message: "Server Error" });
    }
};

exports.deletePatient = async (req, res) => {
    try {
        const patient = await Patient.findById(req.params.id);
        if (!patient) {
            return res.status(404).json({ message: "Patient not found" });
        }

        const user_id = patient.user._id;

        await Patient.findByIdAndDelete(req.params.id);
        await User.findByIdAndDelete(user_id);

        res.json({ message: "Patient deleted successfully" });
    } catch (err) {
        console.error(err);
        res.status(500).json({ message: "Server Error" });
    }
};
