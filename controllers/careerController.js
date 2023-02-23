const Career = require("../models/Career");

const careerController = {
  createNewCareer: async (req, res) => {
    try {
     
      const newCareer = await Career.create(req.body)
      return res.status(200).json(newCareer);
    } catch (error) {
      return res.status(500).json("failed");
    }
    // return res.status(200).json(req.file);
  },
  getAllCareer: async (req, res) => {
    try {
      const careers = await Career.find();
      return res.status(200).json(careers);
    } catch (error) {
      return res.status(500).json(error);
    }
  },
  updateCareer: async (req, res) => {
    try {
     
      let result = await Career.updateOne(
          { _id: req.params.id },
          { $set: req.body }
        );
        return res.status(200).json(result);
    } catch (error) {
      return res.status(500).json(error);
    }
  },
  getCareerById: async (req, res) => {
    try {
      const { id } = req.params;
      const career = await Career.findById(id);
      return res.status(200).json(career);
    } catch (error) {
      return res.status(500).json(error);
    }
  },
  deleteCareer: async (req, res) => {
    try {
      await Career.findByIdAndDelete(req.params.id);
      return res.status(200).json("Career deleted successfully");
    } catch (err) {
      return res.status(500).json(err);
    }
  },
};

module.exports = careerController;
