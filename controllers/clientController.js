const Client = require("../models/Client");

const clientController = {
    createNewClient: async (req, res) => {
        try {

            const newClient = await Client.create(req.body)
            return res.status(200).json(newClient);
        } catch (error) {
            return res.status(500).json("failed");
        }
    },
    getAllClient: async (req, res) => {
        try {
            const clients = await Client.find();
            return res.status(200).json(clients);
        } catch (error) {
            return res.status(500).json(error);
        }
    },
    updateClient: async (req, res) => {
        try {

            let result = await Client.updateOne(
                { _id: req.params.id },
                { $set: req.body }
            );
            return res.status(200).json(result);
        } catch (error) {
            return res.status(500).json(error);
        }
    },
    getClientById: async (req, res) => {
        try {
            const { id } = req.params;
            const client = await Client.findById(id);
            return res.status(200).json(client);
        } catch (error) {
            return res.status(500).json(error);
        }
    },
    deleteClient: async (req, res) => {
        try {
            await Client.findByIdAndDelete(req.params.id);
            return res.status(200).json("Client deleted successfully");
        } catch (err) {
            return res.status(500).json(err);
        }
    },
};

module.exports = clientController;
