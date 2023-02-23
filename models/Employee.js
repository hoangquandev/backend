const mongoose = require("mongoose");

const employeeSchema = new mongoose.Schema(
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
        viname: {
            type: String,
        },
        vijob: {
            type: String,
        },

    },
    { timestamps: true }
);

module.exports = mongoose.model("Employee", employeeSchema);
