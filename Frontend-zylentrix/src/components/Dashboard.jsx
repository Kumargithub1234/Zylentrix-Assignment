import React, { useEffect, useState } from "react";
import axios from "axios";
import TaskForm from "./TaskForm";
import { useNavigate } from "react-router-dom";

function Dashboard() {
  const [tasks, setTasks] = useState([]);
  const [filter, setFilter] = useState("All");
  const [editTask, setEditTask] = useState(null);
  const navigate = useNavigate();
  const user = JSON.parse(localStorage.getItem("user"));

  const fetchTasks = async () => {
    const res = await axios.get(`http://localhost:5000/api/tasks/${user._id}`);
    setTasks(res.data);
  };

  const deleteTask = async (id) => {
    await axios.delete(`http://localhost:5000/api/tasks/delete/${id}`);
    fetchTasks();
  };

  const handleEdit = (task) => {
    setEditTask(task);
  };

  const handleUpdate = async (e) => {
    e.preventDefault();
    await axios.put(
      `http://localhost:5000/api/tasks/update/${editTask._id}`,
      editTask
    );
    setEditTask(null);
    fetchTasks();
  };

  useEffect(() => {
    if (!user) navigate("/login");
    else fetchTasks();
  }, []);

  const filteredTasks =
    filter === "All" ? tasks : tasks.filter((t) => t.status === filter);

  return (
    <div className="p-6 bg-orange-100 min-h-screen">
      {/* Header */}
      <div className="flex justify-between items-center mb-6 bg-green-200 p-4 rounded-lg shadow-sm">
        <h2 className="text-3xl font-bold text-green-700">
          Welcome, {user?.name}
        </h2>
        <button
          onClick={() => {
            localStorage.clear();
            navigate("/");
          }}
          className="bg-red-500 text-white px-5 py-3 rounded-md hover:bg-red-600 cursor-pointer"
        >
          Logout
        </button>
      </div>

      {/* Task Form */}
      <TaskForm refresh={fetchTasks} />

      {/* Filter Section */}
      <div className="flex justify-end mt-8 mb-4">
        <select
          value={filter}
          onChange={(e) => setFilter(e.target.value)}
          className="border border-gray-300 p-2 rounded-md shadow-sm"
        >
          <option value="All">All</option>
          <option value="Pending">Pending</option>
          <option value="In Progress">In Progress</option>
          <option value="Completed">Completed</option>
        </select>
      </div>

      {/* Task Cards */}
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4 mt-4 w-7xl">
        {filteredTasks.map((task) => (
          <div
            key={task._id}
            className="bg-white p-4 rounded-lg shadow hover:shadow-lg transition w-full"
          >
            {editTask && editTask._id === task._id ? (
              <form onSubmit={handleUpdate} className="space-y-2">
                <input
                  name="title"
                  value={editTask.title}
                  onChange={(e) =>
                    setEditTask({ ...editTask, title: e.target.value })
                  }
                  className="border p-2 rounded-md w-full"
                />
                <textarea
                  name="description"
                  value={editTask.description}
                  onChange={(e) =>
                    setEditTask({ ...editTask, description: e.target.value })
                  }
                  className="border p-2 rounded-md w-full"
                />
                <select
                  name="status"
                  value={editTask.status}
                  onChange={(e) =>
                    setEditTask({ ...editTask, status: e.target.value })
                  }
                  className="border p-2 rounded-md w-full"
                >
                  <option>Pending</option>
                  <option>In Progress</option>
                  <option>Completed</option>
                </select>
                <input
                  type="date"
                  name="deadline"
                  value={
                    editTask.deadline
                      ? new Date(editTask.deadline).toISOString().split("T")[0]
                      : ""
                  }
                  onChange={(e) =>
                    setEditTask({ ...editTask, deadline: e.target.value })
                  }
                  className="border p-2 rounded-md w-full"
                />
                <div className="flex justify-end space-x-2 mt-3">
                  <button
                    type="submit"
                    className="bg-blue-600 text-white px-4 py-1 rounded-md hover:bg-blue-700"
                  >
                    Save
                  </button>
                  <button
                    onClick={() => setEditTask(null)}
                    type="button"
                    className="bg-gray-300 text-gray-700 px-4 py-1 rounded-md hover:bg-gray-400"
                  >
                    Cancel
                  </button>
                </div>
              </form>
            ) : (
              <>
                <h3 className="font-bold text-lg text-gray-800">
                  {task.title}
                </h3>
                <p className="text-gray-600 mt-2">{task.description}</p>
                <p className="text-sm mt-1 text-gray-500">
                  Status:{" "}
                  <span className="font-medium text-blue-600">
                    {task.status}
                  </span>
                </p>
                <p className="text-sm text-gray-500">
                  Deadline:{" "}
                  {task.deadline
                    ? new Date(task.deadline).toDateString()
                    : "—"}
                </p>
                <div className="flex justify-between mt-3">
                  <button
                    onClick={() => handleEdit(task)}
                    className="bg-yellow-400 text-white px-3 py-1 rounded-md hover:bg-yellow-500"
                  >
                    Edit
                  </button>
                  <button
                    onClick={() => deleteTask(task._id)}
                    className="bg-red-500 text-white px-3 py-1 rounded-md hover:bg-red-600"
                  >
                    Delete
                  </button>
                </div>
              </>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}

export default Dashboard;
