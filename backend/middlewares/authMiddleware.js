const jwt = require("jsonwebtoken");
const User = require("../models/User");
const Doctor = require("../models/Doctor");
const Patient = require("../models/Patient");
const Admin = require("../models/Admin");

exports.auth = async (req, res, next) => {
    let token;

    if (req.headers.authorization?.startsWith("Bearer")) {
        try {
            token = req.headers.authorization.split(" ")[1];
            const decoded = jwt.verify(token, process.env.JWT_SECRET);

            const user = await User.findById(decoded._id);

            let userType;

            switch (user.role) {
                case "Admin":
                    userType = await Admin.findOne({ user: user._id }).populate(
                        "user"
                    );
                    break;
                case "Patient":
                    userType = await Patient.findOne({
                        user: user._id,
                    }).populate("user");
                    break;
                case "Doctor":
                    userType = await Doctor.findOne({
                        user: user._id,
                    }).populate("user");
                    break;
                default:
                    return res
                        .status(500)
                        .json({ message: "Role not recognized" });
            }

            if (!userType) {
                return res.status(400).json({ message: "User type not found" });
            }

            req.user = userType;
            next();
        } catch (error) {
            res.status(401);
            next(new Error("Not authorized, token failed"));
        }
    }

    if (!token) {
        res.status(401);
        next(new Error("Not authorized, no token"));
    }
};

exports.checkDoctor = async (req, res, next) => {
    try {
        const doctor = Doctor.findById(req.user._id);
        if (req.user.user.role === "Doctor" && doctor) {
            return next();
        }

        res.status(401);
        next(new Error("Not authorized, token failed"));
    } catch (error) {
        res.status(401);
        next(new Error("Not authorized, token failed"));
    }
};

exports.checkAdmin = async (req, res, next) => {
    try {
        const admin = Admin.findById(req.user._id);
        if (req.user.user.role === "Admin" && admin) {
            return next();
        }

        res.status(401);
        next(new Error("Not authorized, token failed"));
    } catch (error) {
        res.status(401);
        next(new Error("Not authorized, token failed"));
    }
};
