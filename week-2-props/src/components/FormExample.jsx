import { useState } from "react";

function FormExample() {
  const [name, setName] = useState("");

  function handleSubmit(e) {
    e.preventDefault(); // prevent page reload
    console.log("Hello, " + name);
  }

  return (
    <form onSubmit={handleSubmit}>
      <label>
        Enter your name:
        <input 
          type="text" 
          value={name} 
          onChange={(e) => setName(e.target.value)} 
        />
      </label>
      <button 
        type="submit" 
      >
        Submit
      </button>

      <p>{name}</p>
    </form>
    
  );
}

export default FormExample;