import React, { useState } from "react";
import axios from "axios";

function TaskForm({ refresh }) {
  const user = JSON.parse(localStorage.getItem("user"));
  const [task, setTask] = useState({
    title: "",
    description: "",
    status: "Pending",
    deadline: "",
  });

  const handleChange = (e) =>
    setTask({ ...task, [e.target.name]: e.target.value });

  const handleSubmit = async (e) => {
    e.preventDefault();
    await axios.post("http://localhost:5000/api/tasks/create", {
      ...task,
      userId: user._id,
    });
    setTask({ title: "", description: "", status: "Pending", deadline: "" });
    refresh();
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="bg-white p-6 rounded-lg shadow-md w-full md:w-1/2 lg:w-1/3 mx-auto"
    >
      <h3 className="text-2xl font-bold mb-4 text-blue-600">Add New Task</h3>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <input
          name="title"
          placeholder="Task Title"
          value={task.title}
          onChange={handleChange}
          className="border p-2 rounded-md"
          required
        />
        <input
          type="date"
          name="deadline"
          value={task.deadline}
          onChange={handleChange}
          className="border p-2 rounded-md"
        />
      </div>

      <textarea
        name="description"
        placeholder="Task Description"
        value={task.description}
        onChange={handleChange}
        className="border p-2 rounded-md w-full mt-3"
      />

      <select
        name="status"
        value={task.status}
        onChange={handleChange}
        className="border p-2 rounded-md w-full mt-3"
      >
        <option>Pending</option>
        <option>In Progress</option>
        <option>Completed</option>
      </select>

      <button
        type="submit"
        className="bg-blue-600 text-white px-6 py-2 rounded-md mt-4 hover:bg-blue-700"
      >
        Add Task
      </button>
    </form>
  );
}

export default TaskForm;
