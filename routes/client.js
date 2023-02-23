const router = require("express").Router();
const clientController = require("../controllers/clientController");
const {
    verifyToken
} = require("../controllers/verifyToken");

router.post("/", verifyToken, clientController.createNewClient);
router.put("/:id", verifyToken, clientController.updateClient);
router.get("/", clientController.getAllClient);
router.get("/:id", clientController.getClientById);
router.delete("/:id", verifyToken, clientController.deleteClient);

module.exports = router;
