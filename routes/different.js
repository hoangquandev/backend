const router = require("express").Router();
const differentController = require("../controllers/differentController");
const {
    verifyToken
} = require("../controllers/verifyToken");

router.post("/", verifyToken, differentController.createNewDifferent);
router.put("/:id", verifyToken, differentController.updateDifferent);
router.get("/", differentController.getAllDifferent);
router.get("/:id", differentController.getDifferentById);
router.delete("/:id", verifyToken, differentController.deleteDifferent);

module.exports = router;
