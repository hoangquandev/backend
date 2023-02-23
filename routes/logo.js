const router = require("express").Router();
const logoController = require("../controllers/logoController");
const {
    verifyToken
} = require("../controllers/verifyToken");

router.post("/", verifyToken, logoController.createNewLogo);
router.put("/:id", verifyToken, logoController.updateLogo);
router.get("/", logoController.getAllLogo);
router.get("/:id", logoController.getLogoById);
router.delete("/:id", verifyToken, logoController.deleteLogo);

module.exports = router;
