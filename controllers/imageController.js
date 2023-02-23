const Image = require("../models/Image");

const imageController = {
  //   GET ALL USER
  getAllImages: async (req, res) => {
    try {
      const image = await Image.find();
      return res.status(200).json(image);
    } catch (err) {
      return res.status(500).json(err);
    }
  },
  //DELETE A USER
  //   deleteUser: async (req, res) => {
  //     try {
  //       await User.findByIdAndDelete(req.params.id);
  //       return res.status(200).json("User deleted");
  //     } catch (err) {
  //       return res.status(500).json(err);
  //     }
  //   },
  createNewImage: async (req, res) => {
    try {
      const fileData = req.file;
      //   const newData = req.body;
      const newImage = new Image({ url: fileData?.path });
      const savedProject = await newImage.save();
      //   return res.status(200).json(savedProject);

      //   console.log(fileData.path);
      return res.status(200).json(savedProject);
    } catch (error) {
      console.log(error);
    }
  },
  uploadMultiImages: async (req, res) => {
   
     
        try {
     const urls = [];
        const files = req.files;
        for (const file of files) {
          const { path } = file;
          
          urls.push(path);
        }
        const newImage = new Image({ url: urls });
      const savedImages = await newImage.save();
      //   return res.status(200).json(savedProject);

      //   console.log(fileData.path);
      return res.status(200).json(savedImages);
    } catch (error) {
      console.log(error);
    }
  },
  deleteImage: async (req, res) => {
    try {
      await Image.findByIdAndDelete(req.params.id);
      return res.status(200).json("Image deleted successfully");
    } catch (err) {
      return res.status(500).json(err);
    }
  },
};

module.exports = imageController;
