import React, { useState } from "react";

function TodoSaver() {
  const [task, setTask] = useState("");
  const [tasks, setTasks] = useState(JSON.parse(localStorage.getItem("tasks")) || [] );
// let stask = {"1": "one", "2": "two", "3": "three"}

  const handleAdd = () => {
    if (!task.trim()) return;
    const newTasks = [...tasks, task];
    setTasks(newTasks);
    localStorage.setItem("tasks", JSON.stringify(newTasks));
    setTask("");
  };

  const deleteMe = (e) => {
    const filteredTasks = tasks.filter((task, key) => key !== Number(e.target.value));
    localStorage.setItem("tasks", JSON.stringify(filteredTasks));
    setTasks(filteredTasks);
  }

  return (
    <div style={{ padding: "1rem", fontFamily: "sans-serif" }}>
      <h2>LocalStorage To-Do List</h2>

      <input
        value={task}
        onChange={(e) => setTask(e.target.value)}
        placeholder="Add a task"
      />
      <button onClick={handleAdd}>Add</button>

      <ul>
        {tasks.map((t, i) => (
          <li key={i}>{t}<button value={i} onClick={deleteMe}>Delete</button></li>
        ))}
      </ul>
    
    </div>
  );
}

export default TodoSaver;