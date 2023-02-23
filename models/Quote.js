const mongoose = require("mongoose");

const quoteSchema = new mongoose.Schema(
    {
        title: {
            type: String,
        },
        vititle: {
            type: String,
        },

        description: {
            type: String,
        },
        videscription: {
            type: String,
        },


    },
    { timestamps: true }
);

module.exports = mongoose.model("Quote", quoteSchema);
