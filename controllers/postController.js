const Post = require("../models/Post");

const postController = {
  createNewPost: async (req, res) => {
    // console.log(req.file);
    try {
      // const fileData = req.file.path;
      // const { title, summary, content, vicontent, visummary } = req.body;
      // const newPost = await Post.create({
      //   title,
      //   summary,
      //   content,
      //   vicontent,
      //   visummary,
      //   cover: fileData,
      // });
      const newPost = await Post.create(req.body)
      return res.status(200).json(newPost);
    } catch (error) {
      return res.status(500).json("failed");
    }
    // return res.status(200).json(req.file);
  },
  getAllPost: async (req, res) => {
    try {
      const posts = await Post.find();
      return res.status(200).json(posts);
    } catch (error) {
      return res.status(500).json(error);
    }
  },
  updatePost: async (req, res) => {
    try {
      // const fileData = req.file.path;
      // const { title, summary, content, vicontent, visummary } = req.body;
      // if (req.file) {
      //   let result = await Post.updateOne(
      //     { _id: req.params.id },
      //     {
      //       $set: {
      //         title,
      //         summary,
      //         content,
      //         vicontent,
      //         visummary,
      //         cover: fileData,
      //       },
      //     }
      //   );
      //   return res.status(200).json(result);
      // } else {
      //   let result = await Post.updateOne(
      //     { _id: req.params.id },
      //     { $set: req.body }
      //   );
      //   return res.status(200).json(result);
      // }
      let result = await Post.updateOne(
          { _id: req.params.id },
          { $set: req.body }
        );
        return res.status(200).json(result);
    } catch (error) {
      return res.status(500).json(error);
    }
  },
  getPostById: async (req, res) => {
    try {
      const { id } = req.params;
      const post = await Post.findById(id);
      return res.status(200).json(post);
    } catch (error) {
      return res.status(500).json(error);
    }
  },
  deletePost: async (req, res) => {
    try {
      await Post.findByIdAndDelete(req.params.id);
      return res.status(200).json("Post deleted successfully");
    } catch (err) {
      return res.status(500).json(err);
    }
  },
};

module.exports = postController;
