const mongoose = require("mongoose");

const differentSchema = new mongoose.Schema(
    {
        title: String,
        viTitle: String,
        description: String,
        viDescription: String
    },
    { timestamps: true }
);

module.exports = mongoose.model("Different", differentSchema);
