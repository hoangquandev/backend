const router = require("express").Router();
const logoClientController = require("../controllers/logoClientController");
const {
    verifyToken
} = require("../controllers/verifyToken");

router.post("/", verifyToken, logoClientController.createNewLogoClient);
router.put("/:id", verifyToken, logoClientController.updateLogoClient);
router.get("/", logoClientController.getAllLogoClient);
router.get("/:id", logoClientController.getLogoClientById);
router.delete("/:id", verifyToken, logoClientController.deleteLogoClient);

module.exports = router;
