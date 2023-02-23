const router = require("express").Router();
const serviceController = require("../controllers/serviceController");
const {
    verifyToken
} = require("../controllers/verifyToken");

router.post("/", verifyToken, serviceController.createNewService);
router.put("/:id", verifyToken, serviceController.updateService);
router.get("/", serviceController.getAllService);
router.get("/:id", serviceController.getServiceById);
router.delete("/:id", verifyToken, serviceController.deleteService);

module.exports = router;
