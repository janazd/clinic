const express = require("express");
const router = express.Router();

const {
    addRole,
    getAllRoles,
    getRoleById,
    updateRole,
    deleteRole,
} = require("../controllers/roleController");

router.route("/").get(getAllRoles).post(addRole);
router.route("/:id").get(getRoleById).put(updateRole).delete(deleteRole);

module.exports = router;
