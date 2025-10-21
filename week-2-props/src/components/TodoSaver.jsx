import React, { useState } from "react";

function TodoSaver() {
    const [name, setName] = useState(JSON.parse(localStorage.getItem("name")) || "");
    const [education, setEducation] = useState(JSON.parse(localStorage.getItem("education")) || "");

  const handleAdd = () => {
    localStorage.setItem("name", JSON.stringify(name));
    localStorage.setItem("education", JSON.stringify(education));
    setCV("");
  };

  return (
    <div>
      <h2>LocalStorage CV</h2>

      <input
        value={name}
        onChange={(e) => setName(e.target.value)}
        placeholder="Name"
      />
      <input
        value={education}
        onChange={(e) => setEducation(e.target.value)}
        placeholder="Education"
      />
      <button onClick={handleAdd}>Save</button>

      
    </div>
  );
}

export default TodoSaver;