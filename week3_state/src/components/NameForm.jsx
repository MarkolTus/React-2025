import { useState } from "react";

function NameForm() {
  const [name, setName] = useState("");

  return (
    <div>
      <input
        type="text"
        placeholder="Enter your name"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <p>Hello, {name || "stranger"}!</p>
      <p>Hello, {name ? name : "stranger"}!</p>
    </div>
  );
}

export default NameForm