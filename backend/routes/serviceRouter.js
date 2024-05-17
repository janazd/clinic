const express = require("express");
const router = express.Router();

const { auth } = require("../middlewares/authMiddleware");

const {
    getAllService,
    getServiceById,
    updateService,
    deleteSerice,
    createService,
} = require("../controllers/serviceController");

router.route("/").get(auth, getAllService).post(createService);
router
    .route("/:id")
    .get(auth, getServiceById)
    .put(auth, updateService)
    .delete(auth, deleteSerice);

module.exports = router;
