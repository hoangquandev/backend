const router = require("express").Router();
const postController = require("../controllers/postController");
const uploadCloud = require("../middlewares/uploader");
const {
  verifyToken,
  verifyTokenAndAdmin,
  verifyTokenAndUserAuthorization,
} = require("../controllers/verifyToken");

router.post("/",verifyToken, postController.createNewPost);
router.put("/:id",verifyToken,postController.updatePost);
router.get("/", postController.getAllPost);
router.get("/:id", postController.getPostById);
router.delete("/:id",verifyToken, postController.deletePost);

module.exports = router;
