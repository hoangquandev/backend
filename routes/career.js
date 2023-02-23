const router = require("express").Router();
const careerController = require("../controllers/careerController");
const {
  verifyToken,
  verifyTokenAndAdmin,
  verifyTokenAndUserAuthorization,
} = require("../controllers/verifyToken");

router.post("/",verifyToken, careerController.createNewCareer);
router.put("/:id",verifyToken,careerController.updateCareer);
router.get("/", careerController.getAllCareer);
router.get("/:id", careerController.getCareerById);
router.delete("/:id",verifyToken, careerController.deleteCareer);

module.exports = router;
