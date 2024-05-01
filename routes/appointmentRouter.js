const express = require("express");
const router = express.Router();

const {
    getAllAppointments,
    getAppointmentById,
    getAppointmentsByDoctor,
    getAppointmentsByPatient,
    createAppointment,
    updateAppointment,
    deleteAppointment,
} = require("../controllers/appointmentController");

router.route("/").get(getAllAppointments).post(createAppointment);
router
    .route("/:id")
    .get(getAppointmentById)
    .put(updateAppointment)
    .delete(deleteAppointment);

router.route("/doctor/:doctorId").get(getAppointmentsByDoctor);

router.route("/patient/:patientId").get(getAppointmentsByPatient);

module.exports = router;
