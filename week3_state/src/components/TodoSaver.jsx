import React, { useState } from "react";

function TodoSaver() {
  const [task, setTask] = useState("");
  const [tasks, setTasks] = useState(JSON.parse(localStorage.getItem("tasks")) || [] );  // get from localstorage

 const delItem = (e) => {
    const tempTasks = [...tasks] //spread operator
    tempTasks.splice(e.target.value, 1);   //splice to remove 1 item from position e.target.value
    setTasks(tempTasks);
    localStorage.setItem("tasks", JSON.stringify(tempTasks));  //save to localStorage
 }

  const handleAdd = () => {
    if (!task.trim()) return;  //dont add an empty string to the array
    const newTasks = [...tasks, task];  //copy tasks array to a new array
    setTasks(newTasks);
    localStorage.setItem("tasks", JSON.stringify(newTasks));  //save to localStorage
    setTask("");
  };

  return (
    <div>
      <h2>LocalStorage To-Do List</h2>

      <input
        value={task}
        onChange={(e) => setTask(e.target.value)}
        placeholder="Add a task"
      />
      <button onClick={handleAdd}>Add</button>
        {tasks.map((t, i) => (  //map through each item in the array. i is the index
          <li key={i}>{t}
          <button value={i} onClick={delItem}>Delete</button> {/* button to delete each item */}
          </li>
        ))}
    </div>
  );
}

export default TodoSaver;