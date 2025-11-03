const express = require("express");
const { createTask, getUserTasks, updateTask, deleteTask } = require("../controller/taskController");
const router = express.Router();

router.post("/create", createTask);
router.get("/:userId", getUserTasks);
router.put("/update/:id", updateTask);
router.delete("/delete/:id", deleteTask);

module.exports = router;
