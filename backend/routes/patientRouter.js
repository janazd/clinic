const express = require("express");
const router = express.Router();

const { auth } = require("../middlewares/authMiddleware");

const {
    getAllPatients,
    getPatientById,
    updatePatient,
    deletePatient,
    createPatient,
} = require("../controllers/patientController");

router.route("/").get(auth, getAllPatients).post(auth, createPatient);
router
    .route("/:id")
    .get(auth, getPatientById)
    .put(auth, updatePatient)
    .delete(auth, deletePatient);

module.exports = router;