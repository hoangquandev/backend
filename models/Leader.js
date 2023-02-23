const mongoose = require("mongoose");

const leaderSchema = new mongoose.Schema(
    {
        avatar: {
            type: String,
        },
        name: {
            type: String,
        },
        viname: {
            type: String,
        },
        job: {
            type: String,
        },
        vijob: {
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

module.exports = mongoose.model("Leader", leaderSchema);
