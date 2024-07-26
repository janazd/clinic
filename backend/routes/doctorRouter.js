const express = require("express");
const router = express.Router();

const { auth, checkDoctor } = require("../middlewares/authMiddleware");

const {
    getAllDoctors,
    getDoctorById,
    addDoctor,
    updateDoctor,
    deleteDoctor,
} = require("../controllers/doctorController");

router.route("/").get(auth, checkDoctor, getAllDoctors).post(addDoctor);
router
    .route("/:id")
    .get(getDoctorById)
    .put(auth, updateDoctor)
    .delete(deleteDoctor);

module.exports = router;
