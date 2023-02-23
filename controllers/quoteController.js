const Quote = require("../models/Quote");

const quoteController = {
    createNewQuote: async (req, res) => {
        try {

            const newQuote = await Quote.create(req.body)
            return res.status(200).json(newQuote);
        } catch (error) {
            return res.status(500).json("failed");
        }
    },
    getAllQuote: async (req, res) => {
        try {
            const quotes = await Quote.find();
            return res.status(200).json(quotes);
        } catch (error) {
            return res.status(500).json(error);
        }
    },
    updateQuote: async (req, res) => {
        try {

            let result = await Quote.updateOne(
                { _id: req.params.id },
                { $set: req.body }
            );
            return res.status(200).json(result);
        } catch (error) {
            return res.status(500).json(error);
        }
    },
    getQuoteById: async (req, res) => {
        try {
            const { id } = req.params;
            const quote = await Quote.findById(id);
            return res.status(200).json(quote);
        } catch (error) {
            return res.status(500).json(error);
        }
    },
    deleteQuote: async (req, res) => {
        try {
            await Quote.findByIdAndDelete(req.params.id);
            return res.status(200).json("Quote deleted successfully");
        } catch (err) {
            return res.status(500).json(err);
        }
    },
};

module.exports = quoteController;
