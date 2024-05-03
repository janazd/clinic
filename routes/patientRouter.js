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

<<<<<<< HEAD
router.route("/").get(getAllPatients).post(createPatient);
=======
router.route("/").get(auth, getAllPatients).post(auth, createPatient);
>>>>>>> d8160451446265840ae152573a8c04cf724cd968
router
    .route("/:id")
    .get(auth, getPatientById)
    .put(auth, updatePatient)
    .delete(auth, deletePatient);

module.exports = router;
