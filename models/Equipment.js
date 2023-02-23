const mongoose = require("mongoose");

const equipmentSchema = new mongoose.Schema(
    {
        name: String,
        viName: String,
        src: String
    },
    { timestamps: true }
);

module.exports = mongoose.model("Equipment", equipmentSchema);
