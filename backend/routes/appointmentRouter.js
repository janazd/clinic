const express = require("express");
const router = express.Router();

const { auth } = require("../middlewares/authMiddleware");

const {
    getAllAppointments,
    getAppointmentById,
    getAppointmentsByDoctor,
    getAppointmentsByPatient,
    createAppointment,
    updateAppointment,
    deleteAppointment,
} = require("../controllers/appointmentController");

router.route("/").get(auth, getAllAppointments).post(createAppointment);
router
    .route("/:id")
    .get(auth, getAppointmentById)
    .put(auth, updateAppointment)
    .delete(auth, deleteAppointment);

router.route("/doctor/:doctorId").get(auth, getAppointmentsByDoctor);

router.route("/patient/:patientId").get(auth, getAppointmentsByPatient);

module.exports = router;
