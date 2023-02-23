const router = require("express").Router();
const quoteController = require("../controllers/quoteController");
const {
    verifyToken
} = require("../controllers/verifyToken");

router.post("/", verifyToken, quoteController.createNewQuote);
router.put("/:id", verifyToken, quoteController.updateQuote);
router.get("/", quoteController.getAllQuote);
router.get("/:id", quoteController.getQuoteById);
router.delete("/:id", verifyToken, quoteController.deleteQuote);

module.exports = router;
