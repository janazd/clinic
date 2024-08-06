const bcrypt = require("bcrypt");
const Doctor = require("../models/Doctor");
const User = require("../models/User");
const Role = require("../models/Role");

exports.addDoctor = async (req, res) => {
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
        const {
            firstname,
            lastname,
            gender,
            yob,
            phone,
            email,
            password,
            schedule,
            specialization,
        } = req.body;

        const existingDoctor = await Doctor.findOne({ email });

        if (existingDoctor) {
            return res.status(400).json({ message: "Doctor already exists" });
        }

        const salt = await bcrypt.genSalt(10);
        const doctorRole = await Role.findOne({ role: "Doctor" });

        const user = new User({
            firstname,
            lastname,
            gender,
            yob,
            phone,
            email,
            password: await bcrypt.hash(password, salt),
            role: doctorRole._id,
        });

        const newUser = await user.save();

        const doctor = new Doctor({
            user: newUser._id,
            schedule,
            specialization,
        });

        const newDoctor = await doctor.save();

        res.status(201).json({
            _id: newDoctor._id,
            firstname,
            lastname,
            email,
            schedule,
            specialization,
            createdAt: newDoctor.createdAt,
        });
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: "Server Error" });
    }
};

exports.getAllDoctors = async (req, res) => {
    try {
        const doctors = await Doctor.find().populate({
            path: "user role",
            select: "-password",
        });
        res.json(doctors);
    } catch (err) {
        console.error(err);
        res.status(500).json({ message: "Server Error" });
    }
};

exports.getDoctorById = async (req, res) => {
    try {
        const doctor = await Doctor.findById(req.params.id).populate({
            path: "user",
            select: "-password",
        });
        if (!doctor) {
            return res.status(404).json({ message: "Doctor not found" });
        }
        res.json(doctor);
    } catch (err) {
        console.error(err);
        res.status(500).json({ message: "Server Error" });
    }
};

exports.updateDoctor = async (req, res) => {
    try {
        const { firstname, lastname, phone, specialization, schedule } =
            req.body;

        const doctor = await Doctor.findById(req.params.id);
        const user = await User.findById(doctor.user._id);

        if (!doctor) {
            return res.status(404).json({ message: "Doctor not found" });
        }

        if (!user) {
            return res.status(404).json({ message: "User not found" });
        }

        await User.findByIdAndUpdate(doctor.user._id, {
            firstname: firstname || user.firstname,
            lastname: lastname || user.lastname,
            phone: phone || user.phone,
        });

        await Doctor.findByIdAndUpdate(doctor.user._id, {
            specialization: specialization || doctor.specialization,
            schedule: schedule || doctor.schedule,
        });

        res.json({ message: "Doctor Updated" });
    } catch (err) {
        console.error(err);
        res.status(500).json({ message: "Server Error" });
    }
};

exports.deleteDoctor = async (req, res) => {
    try {
        const doctor = await Doctor.findById(req.params.id);
        if (!doctor) {
            return res.status(404).json({ message: "Doctor not found" });
        }

        const user_id = doctor.user._id;

        await Doctor.findByIdAndDelete(req.params.id);
        await User.findByIdAndDelete(user_id);

        res.json({ message: "Doctor deleted successfully" });
    } catch (err) {
        console.error(err);
        res.status(500).json({ message: "Server Error" });
    }
};
