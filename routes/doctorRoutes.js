const express = require("express");
const {
  getAllDoctors,
  getDoctorById,
} = require("../controllers/doctorController");
const router = express.Router();

router.route("/").get(getAllDoctors);
router.route("/").get(getDoctorById);

module.exports = router;
