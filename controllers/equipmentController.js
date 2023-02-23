const Equipment = require("../models/Equipment");

const equipmentController = {
    createNewEquipment: async (req, res) => {
        try {

            const newEquipment = await Equipment.create(req.body)
            return res.status(200).json(newEquipment);
        } catch (error) {
            return res.status(500).json("failed");
        }
    },
    getAllEquipment: async (req, res) => {
        try {
            const equipments = await Equipment.find();
            return res.status(200).json(equipments);
        } catch (error) {
            return res.status(500).json(error);
        }
    },
    updateEquipment: async (req, res) => {
        try {

            let result = await Equipment.updateOne(
                { _id: req.params.id },
                { $set: req.body }
            );
            return res.status(200).json(result);
        } catch (error) {
            return res.status(500).json(error);
        }
    },
    getEquipmentById: async (req, res) => {
        try {
            const { id } = req.params;
            const equipment = await Equipment.findById(id);
            return res.status(200).json(equipment);
        } catch (error) {
            return res.status(500).json(error);
        }
    },
    deleteEquipment: async (req, res) => {
        try {
            await Equipment.findByIdAndDelete(req.params.id);
            return res.status(200).json("Career deleted successfully");
        } catch (err) {
            return res.status(500).json(err);
        }
    },
};

module.exports = equipmentController;
