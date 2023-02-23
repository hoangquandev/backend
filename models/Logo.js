const mongoose = require("mongoose");

const logoSchema = new mongoose.Schema(
    {
        logoHeader: {
            type: String,
        },
        logoFooter: {
            type: String,
        },
        logoFooterWhite: {
            type: String,
        },
        slogan: {
            type: String,
        },
        address: {
            type: String,
        },
        viAddress: {
            type: String,
        },
        email: {
            type: String,
        },
        tel: {
            type: String,
        },
    },
    { timestamps: true }
);

module.exports = mongoose.model("Logo", logoSchema);
