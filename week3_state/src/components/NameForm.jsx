import { useState } from "react";


function NameForm() {
  const [name, setName] = useState("");


  function handleAddName(){
    const section = document.querySelector("section");
    section.innerHTML += <p>{name}</p>;

    setName(""); // Clear input
}


  return (
    <div>
      <input
        type="text"
        placeholder="Enter your name"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <button onClick={handleAddName}>Add Name</button>
     
      <section>

      </section>
    </div>
  );
}

export default NameForm