const Task = require("../models/taskModel");

// Create Task
exports.createTask = async (req, res) => {
  try {
    const { userId, title, description, status, deadline } = req.body;
    const newTask = await Task.create({ userId, title, description, status, deadline });
    res.status(201).json({ message: "Task created successfully", newTask });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Get All Tasks by User
exports.getUserTasks = async (req, res) => {
  try {
    const { userId } = req.params;
    const tasks = await Task.find({ userId });
    res.status(200).json(tasks);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Update Task
exports.updateTask = async (req, res) => {
  try {
    const { id } = req.params;
    const updated = await Task.findByIdAndUpdate(id, req.body, { new: true });
    res.status(200).json({ message: "Task updated successfully", updated });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Delete Task
exports.deleteTask = async (req, res) => {
  try {
    const { id } = req.params;
    await Task.findByIdAndDelete(id);
    res.status(200).json({ message: "Task deleted successfully" });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
