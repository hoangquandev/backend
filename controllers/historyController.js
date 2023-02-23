const History = require("../models/History");

const historyController = {
    createNewHistory: async (req, res) => {
        try {

            const newHistory = await History.create(req.body)
            return res.status(200).json(newHistory);
        } catch (error) {
            return res.status(500).json("failed");
        }
    },
    getAllHistory: async (req, res) => {
        try {
            const historys = await History.find();
            return res.status(200).json(historys);
        } catch (error) {
            return res.status(500).json(error);
        }
    },
    updateHistory: async (req, res) => {
        try {

            let result = await History.updateOne(
                { _id: req.params.id },
                { $set: req.body }
            );
            return res.status(200).json(result);
        } catch (error) {
            return res.status(500).json(error);
        }
    },
    getHistoryById: async (req, res) => {
        try {
            const { id } = req.params;
            const history = await History.findById(id);
            return res.status(200).json(history);
        } catch (error) {
            return res.status(500).json(error);
        }
    },
    deleteHistory: async (req, res) => {
        try {
            await History.findByIdAndDelete(req.params.id);
            return res.status(200).json("History deleted successfully");
        } catch (err) {
            return res.status(500).json(err);
        }
    },
};

module.exports = historyController;
