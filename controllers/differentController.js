const Different = require("../models/Different");

const differentController = {
    createNewDifferent: async (req, res) => {
        try {

            const newDifferent = await Different.create(req.body)
            return res.status(200).json(newDifferent);
        } catch (error) {
            return res.status(500).json("failed");
        }
    },
    getAllDifferent: async (req, res) => {
        try {
            const differents = await Different.find();
            return res.status(200).json(differents);
        } catch (error) {
            return res.status(500).json(error);
        }
    },
    updateDifferent: async (req, res) => {
        try {

            let result = await Different.updateOne(
                { _id: req.params.id },
                { $set: req.body }
            );
            return res.status(200).json(result);
        } catch (error) {
            return res.status(500).json(error);
        }
    },
    getDifferentById: async (req, res) => {
        try {
            const { id } = req.params;
            const different = await Different.findById(id);
            return res.status(200).json(different);
        } catch (error) {
            return res.status(500).json(error);
        }
    },
    deleteDifferent: async (req, res) => {
        try {
            await Different.findByIdAndDelete(req.params.id);
            return res.status(200).json("Career deleted successfully");
        } catch (err) {
            return res.status(500).json(err);
        }
    },
};

module.exports = differentController;
