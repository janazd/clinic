const jwt = require("jsonwebtoken");
const Doctor = require("../models/Doctor");

exports.auth = async (req, res, next) => {
    let token;

    if (req.headers.authorization?.startsWith("Bearer")) {
        try {
            token = req.headers.authorization.split(" ")[1];

            const decoded = jwt.verify(token, process.env.JWT_SECRET);

            req.user = await Doctor.findById(decoded._id).select("-password");

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
