const router = require("express").Router();
const historyController = require("../controllers/historyController");
const {
    verifyToken
} = require("../controllers/verifyToken");

router.post("/", verifyToken, historyController.createNewHistory);
router.put("/:id", verifyToken, historyController.updateHistory);
router.get("/", historyController.getAllHistory);
router.get("/:id", historyController.getHistoryById);
router.delete("/:id", verifyToken, historyController.deleteHistory);

module.exports = router;
