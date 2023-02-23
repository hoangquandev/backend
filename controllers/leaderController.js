const Leader = require("../models/Leader");

const leaderController = {
    createNewLeader: async (req, res) => {
        try {

            const newLeader = await Leader.create(req.body)
            return res.status(200).json(newLeader);
        } catch (error) {
            return res.status(500).json("failed");
        }
    },
    getAllLeader: async (req, res) => {
        try {
            const leaders = await Leader.find();
            return res.status(200).json(leaders);
        } catch (error) {
            return res.status(500).json(error);
        }
    },
    updateLeader: async (req, res) => {
        try {

            let result = await Leader.updateOne(
                { _id: req.params.id },
                { $set: req.body }
            );
            return res.status(200).json(result);
        } catch (error) {
            return res.status(500).json(error);
        }
    },
    getLeaderById: async (req, res) => {
        try {
            const { id } = req.params;
            const leader = await Leader.findById(id);
            return res.status(200).json(leader);
        } catch (error) {
            return res.status(500).json(error);
        }
    },
    deleteLeader: async (req, res) => {
        try {
            await Leader.findByIdAndDelete(req.params.id);
            return res.status(200).json("Leader deleted successfully");
        } catch (err) {
            return res.status(500).json(err);
        }
    },
};

module.exports = leaderController;
