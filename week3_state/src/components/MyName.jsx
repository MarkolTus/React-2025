import React, { useState } from "react";

function MyName() {
  const [name, setName] = useState( localStorage.getItem("MyName") || ""  );

  const handleSave = () => {
    localStorage.setItem("MyName", name);
  };

  return (
    <div>
      <h2>Save Your Name</h2>
      <input
        value={name}
        onChange={(e) => setName(e.target.value)}
        placeholder="Type your name"
      />
      <button onClick={handleSave}>Save</button>

      {name && <p>Current name: {name}</p>}
    </div>
  );
}

export default MyName;