const Email = require("../models/Email");

const emailController = {
  //GET ALL PROJECT
  getAllEmails: async (req, res) => {
    try {
      const search = req.query.search ||"";
      let genre = req.query.genre||"all";
      const genreOptions = ["contact","apply","newsletter"]
      genre === "all" ? (genre = [...genreOptions]):(genre=req.query.genre.split(","))
      
      const email = await Email.find({email:{$regex:search,$options:"i"}})
      .where("genres")
      .in([...genre])
      return res.status(200).json(email);
    } catch (err) {
      return res.status(500).json(err);
    }
  },
  
  getId: async (req, res) => {
    try {
      let result = await Email.findOne({ _id: req.params.id });
      if (result) {
        return res.status(200).json(result);
      } else {
        return res.status(200).json("no email");
      }
    } catch (error) {
      return res.status(500).json(error);
    }
  },
  
  //ADD PROJECT
  addEmail: async (req, res) => {
    // res.status(200).json(req.body);
    try {
      const newEmail = new Email(req.body);
      const savedEmail = await newEmail.save();
      return res.status(200).json(savedEmail);
    } catch (error) {
      return res.status(500).json(error);
    }
    // try {
    //   const newProject = new Project(req.body);
    //   console.log(newProject);
    //   //   const savedProject = await newProject.save();
    //   return res.status(200).json(req.body);
    // } catch (err) {
    //   res.status(500).json(err);
    // }
  },

  //DELETE A Project
  deleteEmail: async (req, res) => {
    try {
      await Email.findByIdAndDelete(req.params.id);
      return res.status(200).json("Email deleted");
    } catch (err) {
      return res.status(500).json(err);
    }
  },
};

module.exports = emailController;
