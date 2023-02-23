const mongoose = require("mongoose");

const serviceSchema = new mongoose.Schema(
    {
        title: String,
        viTitle: String,
        description: String,
        viDescription: String,
        src: String,
    },
    { timestamps: true }
);

module.exports = mongoose.model("Service", serviceSchema);
