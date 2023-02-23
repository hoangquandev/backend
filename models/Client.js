const mongoose = require("mongoose");

const clientSchema = new mongoose.Schema(
    {
        avatar: {
            type: String,
        },
        name: {
            type: String,
        },
        job: {
            type: String,
        },
        comment: {
            type: String,
        },
        viname: {
            type: String,
        },
        vijob: {
            type: String,
        },
        vicomment: {
            type: String,
        },

    },
    { timestamps: true }
);

module.exports = mongoose.model("Client", clientSchema);
