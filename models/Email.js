const mongoose = require("mongoose");

const emailSchema = new mongoose.Schema(
  {
    name: {
      type: String,
    },
    email: {
      type: String,
      required: true,
    },
    message: {
      type: String,
    },
    phone: {
      type: String,
    },
    resumeLink: {
      type: String,
    },
    job: {
      type: String,
    },
    genres: {
      type: String,
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model("Email", emailSchema);
