const emailController = require("../controllers/emailController");
const {
  verifyToken,
  verifyTokenAndAdmin,
  verifyTokenAndUserAuthorization,
} = require("../controllers/verifyToken");

const router = require("express").Router();
//GET ALL USERS
router.get("/", emailController.getAllEmails);


// ADD PROJECT
router.post(
  "/",
  emailController.addEmail
  //   verifyTokenAndUserAuthorization,
);
router.get("/:id", emailController.getId);

//DELETE USER
router.delete("/:id",verifyToken, emailController.deleteEmail);

module.exports = router;
