const express = require("express");
const router = express.Router();

const { auth } = require("../middlewares/authMiddleware");

const {
    getAllDoctors,
    getDoctorById,
    addDoctor,
    updateDoctor,
    deleteDoctor,
    loginDoctor,
} = require("../controllers/doctorController");

router.route("/").get(getAllDoctors).post(addDoctor);
router
    .route("/:id")
    .get(getDoctorById)
    .put(auth, updateDoctor)
    .delete(deleteDoctor);

router.route("/login").post(loginDoctor);

module.exports = router;
