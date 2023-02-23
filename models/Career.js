const mongoose = require("mongoose");

const careerSchema = new mongoose.Schema(
  {
    job: String,
    description: String,
    videscription: String,
    requirement:String,
    virequirement:String,
    benefit:String,
    vibenefit:String
  },
  { timestamps: true }
);

module.exports = mongoose.model("Career", careerSchema);
