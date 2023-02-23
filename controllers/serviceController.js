const Service = require("../models/Service");

const serviceController = {
    createNewService: async (req, res) => {
        try {

            const newService = await Service.create(req.body)
            return res.status(200).json(newService);
        } catch (error) {
            return res.status(500).json("failed");
        }
    },
    getAllService: async (req, res) => {
        try {
            const services = await Service.find();
            return res.status(200).json(services);
        } catch (error) {
            return res.status(500).json(error);
        }
    },
    updateService: async (req, res) => {
        try {

            let result = await Service.updateOne(
                { _id: req.params.id },
                { $set: req.body }
            );
            return res.status(200).json(result);
        } catch (error) {
            return res.status(500).json(error);
        }
    },
    getServiceById: async (req, res) => {
        try {
            const { id } = req.params;
            const service = await Service.findById(id);
            return res.status(200).json(service);
        } catch (error) {
            return res.status(500).json(error);
        }
    },
    deleteService: async (req, res) => {
        try {
            await Service.findByIdAndDelete(req.params.id);
            return res.status(200).json("Career deleted successfully");
        } catch (err) {
            return res.status(500).json(err);
        }
    },
};

module.exports = serviceController;
