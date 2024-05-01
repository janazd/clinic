const express = require("express");
const router = express.Router();

const {
    getAllDoctors,
    getDoctorById,
    addDoctor,
    updateDoctor,
    deleteDoctor,
} = require("../controllers/doctorController");

router.route("/").get(getAllDoctors).post(addDoctor);
router.route("/:id").get(getDoctorById).put(updateDoctor).delete(deleteDoctor);

module.exports = router;
