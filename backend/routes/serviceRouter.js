const express = require("express");
const router = express.Router();

const { auth } = require("../middlewares/authMiddleware");

const {
    getAllService,
    getServiceById,
    updateService,
    deleteService,
    createService,
    getAllCategories,
} = require("../controllers/serviceController");

router.route("/").get(getAllService).post(createService);
router.route("/categories").get(getAllCategories);
router
    .route("/:id")
    .get(auth, getServiceById)
    .put(auth, updateService)
    .delete(auth, deleteService);

module.exports = router;
