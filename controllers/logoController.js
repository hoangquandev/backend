const Logo = require("../models/Logo");

const logoController = {
    createNewLogo: async (req, res) => {
        try {

            const newLogo = await Logo.create(req.body)
            return res.status(200).json(newLogo);
        } catch (error) {
            return res.status(500).json("failed");
        }
    },
    getAllLogo: async (req, res) => {
        try {
            const logos = await Logo.find();
            return res.status(200).json(logos);
        } catch (error) {
            return res.status(500).json(error);
        }
    },
    updateLogo: async (req, res) => {
        try {

            let result = await Logo.updateOne(
                { _id: req.params.id },
                { $set: req.body }
            );
            return res.status(200).json(result);
        } catch (error) {
            return res.status(500).json(error);
        }
    },
    getLogoById: async (req, res) => {
        try {
            const { id } = req.params;
            const logo = await Logo.findById(id);
            return res.status(200).json(logo);
        } catch (error) {
            return res.status(500).json(error);
        }
    },
    deleteLogo: async (req, res) => {
        try {
            await Logo.findByIdAndDelete(req.params.id);
            return res.status(200).json("Logo deleted successfully");
        } catch (err) {
            return res.status(500).json(err);
        }
    },
};

module.exports = logoController;
