// backend/routes/contactRouter.js
const express = require("express");
const { addContact } = require("../controllers/contactController");
const router = express.Router();

router.post("/contact", addContact);

module.exports = router;
