const express = require("express");
const router = express.Router();

const {
    getAllPatients,
    getPatientById,
    addPatient,
    updatePatient,
    deletePatient,
    createPatient,
} = require("../controllers/patientController");

router.route("/").get(getAllPatients).post(addPatient);
router
    .route("/:id")
    .get(getPatientById)
    .put(updatePatient)
    .delete(deletePatient);

module.exports = router;
