const LogoClient = require("../models/LogoClient");

const logoClientController = {
    createNewLogoClient: async (req, res) => {
        try {

            const newClient = await LogoClient.create(req.body)
            return res.status(200).json(newClient);
        } catch (error) {
            return res.status(500).json("failed");
        }
    },
    getAllLogoClient: async (req, res) => {
        try {
            const clients = await LogoClient.find();
            return res.status(200).json(clients);
        } catch (error) {
            return res.status(500).json(error);
        }
    },
    updateLogoClient: async (req, res) => {
        try {

            let result = await LogoClient.updateOne(
                { _id: req.params.id },
                { $set: req.body }
            );
            return res.status(200).json(result);
        } catch (error) {
            return res.status(500).json(error);
        }
    },
    getLogoClientById: async (req, res) => {
        try {
            const { id } = req.params;
            const client = await LogoClient.findById(id);
            return res.status(200).json(client);
        } catch (error) {
            return res.status(500).json(error);
        }
    },
    deleteLogoClient: async (req, res) => {
        try {
            await LogoClient.findByIdAndDelete(req.params.id);
            return res.status(200).json("Client deleted successfully");
        } catch (err) {
            return res.status(500).json(err);
        }
    },
};

module.exports = logoClientController;
