const Employee = require("../models/Employee");

const employeeController = {
    createNewEmployee: async (req, res) => {
        try {

            const newEmployee = await Employee.create(req.body)
            return res.status(200).json(newEmployee);
        } catch (error) {
            return res.status(500).json("failed");
        }
    },
    getAllEmployee: async (req, res) => {
        try {
            const clients = await Employee.find();
            return res.status(200).json(clients);
        } catch (error) {
            return res.status(500).json(error);
        }
    },
    updateEmployee: async (req, res) => {
        try {

            let result = await Employee.updateOne(
                { _id: req.params.id },
                { $set: req.body }
            );
            return res.status(200).json(result);
        } catch (error) {
            return res.status(500).json(error);
        }
    },
    getEmployeeById: async (req, res) => {
        try {
            const { id } = req.params;
            const client = await Employee.findById(id);
            return res.status(200).json(client);
        } catch (error) {
            return res.status(500).json(error);
        }
    },
    deleteEmployee: async (req, res) => {
        try {
            await Employee.findByIdAndDelete(req.params.id);
            return res.status(200).json("Employee deleted successfully");
        } catch (err) {
            return res.status(500).json(err);
        }
    },
};

module.exports = employeeController;
