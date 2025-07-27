 import React, { useState } from "react";
import { useAuthStore } from "../store/useAuthStore";

const TaskForm = () => {
 const { Task } = useAuthStore();
  const [task, setTask] = useState({ title: "", lead: "", due_date: "", completed: false });

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await Task(task);
      setTask({ title: "", lead: "", due_date: "", completed: false });
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <div className="max-w-md mx-auto mt-20 bg-white p-6 rounded-xl shadow-2xl ring-1 ring-gray-800 border">
      <h2 className="text-xl font-semibold mb-2">Create Task</h2>
      <form onSubmit={handleSubmit} className="space-y-4">
      <input className="w-full px-3 py-2 border rounded-md" placeholder="Title" value={task.title} onChange={(e) => setTask({ ...task, title: e.target.value })} />
      <input className="w-full px-3 py-2 border rounded-md" placeholder="Lead ID" value={task.lead} onChange={(e) => setTask({ ...task, lead: e.target.value })} />
      <input className="w-full px-3 py-2 border rounded-md" type="date" value={task.due_date} onChange={(e) => setTask({ ...task, due_date: e.target.value })} />
      <label className="flex items-center mt-2">
        <input type="checkbox" checked={task.completed} onChange={(e) => setTask({ ...task, completed: e.target.checked })} />
        <span className="ml-2">Completed</span>
      </label>
      <button className="w-full bg-blue-600 text-white py-2 rounded-md hover:bg-blue-700" onClick={handleSubmit}>
        Save Task
      </button>
      </form>
    </div>
  );
};

export default TaskForm;
