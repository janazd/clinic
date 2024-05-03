const bcrypt = require("bcrypt");
const Doctor = require("../models/Doctor");
const jwt = require("jsonwebtoken");

exports.loginDoctor = async (req, res) => {
    try {
        const { email, password } = req.body;
        const doctor = await Doctor.findOne({ email });

        if (!doctor) {
            return res.status(400).json({ message: "Invalid credentials" });
        }

        const isPasswordMatch = await bcrypt.compare(password, doctor.password);

        if (!isPasswordMatch) {
            return res.status(400).json({ message: "Invalid credentials" });
        }

        const payload = { _id: doctor._id };
        const token = jwt.sign(payload, process.env.JWT_SECRET, {
            expiresIn: "1h",
        });

        res.status(200).json({ token });
    } catch (error) {}
};

exports.addDoctor = async (req, res) => {
<<<<<<< HEAD
  console.log(req.body);
  const { firstname, lastname, email, password, schedule } = req.body;
=======
    const { firstname, lastname, email, password, schedule } = req.body;
>>>>>>> d8160451446265840ae152573a8c04cf724cd968

    try {
        const existingDoctor = await Doctor.findOne({ email });

        if (existingDoctor) {
            return res.status(400).json({ message: "Doctor already exists" });
        }

        const salt = await bcrypt.genSalt(10);

<<<<<<< HEAD
  const newDoctor = await doctor.save();

  return res.status(201).json(newDoctor);
=======
        const doctor = new Doctor({
            firstname,
            lastname,
            email,
            password: await bcrypt.hash(password, salt),
            schedule,
        });

        const newDoctor = await doctor.save();

        res.status(201).json({ newDoctor });
    } catch (error) {
        console.error(err);
        res.status(500).json({ message: "Server Error" });
    }
>>>>>>> d8160451446265840ae152573a8c04cf724cd968
};
exports.getAllDoctors = async (req, res) => {
    try {
        const doctors = await Doctor.find();
        res.json(doctors);
    } catch (err) {
        console.error(err);
        res.status(500).json({ message: "Server Error" });
    }
};

exports.getDoctorById = async (req, res) => {
    try {
        const doctor = await Doctor.findById(req.params.id).select("-password");
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
        const doctor = await Doctor.findById(req.params.id);

        if (!doctor) {
            return res.status(404).json({ message: "Doctor not found" });
        }

        doctor.firstname = req.body.firstname || doctor.firstname;
        doctor.lastname = req.body.lastname || doctor.lastname;

        if (req.body.password) {
            const salt = await bcrypt.genSalt(10);
            doctor.password = await bcrypt.hash(req.body.password, salt);
        }

        const updatedDoctor = await doctor.save();

        res.json(updatedDoctor);
    } catch (err) {
        console.error(err);
        res.status(500).json({ message: "Server Error" });
    }
};

exports.deleteDoctor = async (req, res) => {
    try {
        const doctor = await Doctor.findByIdAndDelete(req.params.id);
        if (!doctor) {
            return res.status(404).json({ message: "Doctor not found" });
        }
        res.json({ message: "Doctor deleted successfully" });
    } catch (err) {
        console.error(err);
        res.status(500).json({ message: "Server Error" });
    }
};
