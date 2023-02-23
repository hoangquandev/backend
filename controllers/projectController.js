const Project = require("../models/Project");

const projectController = {
  //GET ALL PROJECT
  getAllProjects: async (req, res) => {
    try {
      const search = req.query.search ||"";
      let genre = req.query.genre||"all";
      const genreOptions = ["1","2","3","4","5"]
      genre === "all" ? (genre = [...genreOptions]):(genre=req.query.genre.split(","))
      
      const project = await Project.find({name:{$regex:search,$options:"i"}})
      .where("genres")
      .in([...genre])
      // const project = await Project.find()
      return res.status(200).json(project);
    } catch (err) {
      return res.status(500).json(err);
    }
  },
  getSelectedProjects: async (req, res) => {
    try {
      
      
      
      const project = await Project.find({isSelected:true})
      
      // const project = await Project.find()
      return res.status(200).json(project);
    } catch (err) {
      return res.status(500).json(err);
    }
  },

  getId: async (req, res) => {
    try {
      let result = await Project.findOne({ _id: req.params.id });
      if (result) {
        return res.status(200).json(result);
      } else {
        return res.status(200).json("no project");
      }
    } catch (error) {
      return res.status(500).json(error);
    }
  },
  updateProject: async (req, res) => {
    try {
      let result = await Project.updateOne(
        { _id: req.params.id },
        { $set: req.body }
      );
      return res.status(200).json(result);
    } catch (err) {
      return res.status(500).json(err);
    }
  },
  //ADD PROJECT
  createProject: async (req, res) => {
    // res.status(200).json(req.body);
    try {
      const newProject = new Project(req.body);
      const savedProject = await newProject.save();
      return res.status(200).json(savedProject);
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
  deleteProject: async (req, res) => {
    try {
      await Project.findByIdAndDelete(req.params.id);
      return res.status(200).json("Project deleted");
    } catch (err) {
      return res.status(500).json(err);
    }
  },
};

module.exports = projectController;
