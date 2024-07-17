const express = require("express");
const router = express.Router();

const { auth } = require("../middlewares/authMiddleware");

const {
    getAllPatients,
    getPatientById,
    updatePatient,
    deletePatient,
    addPatient,
    createPatient,
} = require("../controllers/patientController");

//! TODO: DON'T FORGET THE AUTHORIZATION

router.route("/").get(getAllPatients).post(addPatient);
router
    .route("/:id")
    .get(auth, getPatientById)
    .put(updatePatient)
    .delete(deletePatient);

module.exports = router;
