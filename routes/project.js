const projectController = require("../controllers/projectController");
const {
  verifyToken,
  verifyTokenAndAdmin,
  verifyTokenAndUserAuthorization,
} = require("../controllers/verifyToken");

const router = require("express").Router();
//GET ALL USERS
router.get("/", projectController.getAllProjects);
router.get("/selected", projectController.getSelectedProjects);


// ADD PROJECT
router.post(
  "/",verifyToken,
  projectController.createProject
  //   verifyTokenAndUserAuthorization,
);
router.get("/:id", projectController.getId);
router.put("/:id",verifyToken, projectController.updateProject);

//DELETE USER
router.delete("/:id",verifyToken, projectController.deleteProject);

module.exports = router;
