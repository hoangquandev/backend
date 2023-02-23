const router = require("express").Router();
const employeeController = require("../controllers/employeeController");
const {
    verifyToken
} = require("../controllers/verifyToken");

router.post("/", verifyToken, employeeController.createNewEmployee);
router.put("/:id", verifyToken, employeeController.updateEmployee);
router.get("/", employeeController.getAllEmployee);
router.get("/:id", employeeController.getEmployeeById);
router.delete("/:id", verifyToken, employeeController.deleteEmployee);

module.exports = router;
