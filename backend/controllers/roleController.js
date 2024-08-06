const Role = require("../models/Role");

exports.addRole = async (req, res) => {
    const { role } = req.body;

    try {
        const newRole = new Role({
            role,
        });

        await newRole.save();

        res.status(201).json({ message: "New Role Created" });
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: "Server Error" });
    }
};

exports.getAllRoles = async (req, res) => {
    try {
        const roles = await Role.find();
        res.json(roles);
    } catch (err) {
        console.error(err);
        res.status(500).json({ message: "Server Error" });
    }
};

exports.getRoleById = async (req, res) => {
    try {
        const role = await Role.findById(req.params.id);
        if (!role) {
            return res.status(404).json({ message: "Role not found" });
        }
        res.json(role);
    } catch (err) {
        console.error(err);
        res.status(500).json({ message: "Server Error" });
    }
};

exports.updateRole = async (req, res) => {
    try {
        const role = await Role.findByIdAndUpdate(req.params.id, {
            role: req.body.role,
        });

        if (!role) {
            return res.status(404).json({ message: "Role not found" });
        }

        res.json({ message: "Role Updated" });
    } catch (err) {
        console.error(err);
        res.status(500).json({ message: "Server Error" });
    }
};

exports.deleteRole = async (req, res) => {
    try {
        const role = await Role.findByIdAndDelete(req.params.id);
        if (!role) {
            return res.status(404).json({ message: "Role not found" });
        }
        res.json({ message: "Role deleted successfully" });
    } catch (err) {
        console.error(err);
        res.status(500).json({ message: "Server Error" });
    }
};
