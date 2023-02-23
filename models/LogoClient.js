const mongoose = require("mongoose");

const logoClientSchema = new mongoose.Schema(
    {
        src: {
            type: String,
        },
        srcMobile: {
            type: String,
        },



    },
    { timestamps: true }
);

module.exports = mongoose.model("LogoClient", logoClientSchema);
