const mongoose = require("mongoose");

const historySchema = new mongoose.Schema(
    {
        logo: {
            type: String,
        },
        location: {
            type: String,
        },
        vilocation: {
            type: String,
        },
        description: {
            type: String,
        },
        videscription: {
            type: String,
        },
        year: {
            type: String,
        },


    },
    { timestamps: true }
);

module.exports = mongoose.model("History", historySchema);
