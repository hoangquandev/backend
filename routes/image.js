// const userController = require("../controllers/userController");
// const {
//     verifyToken,
//     verifyTokenAndAdmin,
//     verifyTokenAndUserAuthorization,
// } = require("../controllers/verifyToken");
const imageController = require("../controllers/imageController");

const uploadCloud = require("../middlewares/uploader");

const router = require("express").Router();
router.post("/", uploadCloud.single("url"), imageController.createNewImage);
router.post("/multi", uploadCloud.array("url"), imageController.createNewImage);
router.get("/", imageController.getAllImages);
router.delete("/:id", imageController.deleteImage);
//GET ALL USERS
// router.get("/", imageController.getAllImages);

//DELETE USER
// router.delete("/:id", imageController.deleteImage);

module.exports = router;
