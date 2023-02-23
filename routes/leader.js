const router = require("express").Router();
const leaderController = require("../controllers/leaderController");
const {
    verifyToken
} = require("../controllers/verifyToken");

router.post("/", verifyToken, leaderController.createNewLeader);
router.put("/:id", verifyToken, leaderController.updateLeader);
router.get("/", leaderController.getAllLeader);
router.get("/:id", leaderController.getLeaderById);
router.delete("/:id", verifyToken, leaderController.deleteLeader);

module.exports = router;
