const Service = require("../models/Service");

exports.getAllService = async (req, res) => {
    try {
        const service = await Service.find();
        res.json(service);
    } catch (err) {
        console.error(err);
        res.status(500).json({ message: "Server Error" });
    }
};

exports.getAllCategories = async (req, res) => {
    try {
        const categories = await Service.find({}, "category");
        res.json(categories);
    } catch (err) {
        console.error(err);
        res.status(500).json({ message: "Server Error" });
    }
};

exports.getServicesByCategory = async (req, res) => {
    try {
        const service = await Service.find({ category: req.params.name });
        if (!service) {
            return res.status(404).json({ message: "Service not found" });
        }
        res.json(service);
    } catch (err) {
        console.error(err);
        res.status(500).json({ message: "Server Error" });
    }
};

exports.getServiceById = async (req, res) => {
    try {
        const service = await Service.findById(req.params.id);
        if (!service) {
            return res.status(404).json({ message: "Service not found" });
        }
        res.json(service);
    } catch (err) {
        console.error(err);
        res.status(500).json({ message: "Server Error" });
    }
};

exports.createService = async (req, res) => {
    try {
        const newService = new Service(req.body);
        const savedService = await newService.save();
        res.status(201).json(savedService);
    } catch (err) {
        console.error(err);
        if (err.code && err.code === 11000) {
            const duplicateField = Object.keys(err.keyValue)[0];
            return res
                .status(400)
                .json({ message: `Duplicate ${duplicateField}` });
        }
        res.status(500).json({ message: "Server Error" });
    }
};

exports.updateService = async (req, res) => {
    try {
        const service = await Service.findById(req.params.id);

        if (!service) {
            return res.status(404).json({ message: "Service not found" });
        }

        service.duration = req.body.duration || service.duration;
        service.name = req.body.name || service.name;
        service.price = req.body.price || service.price;

        const updatedService = await Service.save();

        res.json(updatedService);
    } catch (err) {
        console.error(err);
        res.status(500).json({ message: "Server Error" });
    }
};

exports.deleteService = async (req, res) => {
    try {
        const service = await Service.findByIdAndDelete(req.params.id);
        if (!service) {
            return res.status(404).json({ message: "Service not found" });
        }
        res.json({ message: "Service deleted successfully" });
    } catch (err) {
        console.error(err);
        res.status(500).json({ message: "Server Error" });
    }
};
