const router = require("express").Router();
const equipmentController = require("../controllers/equipmentController");
const {
    verifyToken
} = require("../controllers/verifyToken");

router.post("/", verifyToken, equipmentController.createNewEquipment);
router.put("/:id", verifyToken, equipmentController.updateEquipment);
router.get("/", equipmentController.getAllEquipment);
router.get("/:id", equipmentController.getEquipmentById);
router.delete("/:id", verifyToken, equipmentController.deleteEquipment);

module.exports = router;
