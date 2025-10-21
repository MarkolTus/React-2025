import React, { useState } from "react";

function FruitList() {
const [fruits, setFruits] = useState(["Apple", "Banana", "Cherry"]);
const [newFruit, setNewFruit] = useState("");

localStorage.setItem("MyName", "Mark");

const addFruit = () => { //addFruit is a function using the newer ES6 syntax
  if (!newFruit.trim()) return;  //This line prevents adding empty or whitespace-only strings to the fruit list.
  setFruits(fruits.concat(newFruit)); // creates a new array
  setNewFruit("");
};

  return (
    <div>
      <h2>My Fruit List</h2>

      <input
        value={newFruit}
        onChange={(e) => setNewFruit(e.target.value)}
        placeholder="Add a fruit"
      />
      <button onClick={addFruit}>Add</button>
      <ul>
        {fruits.map((fruit, index) => (
          <li key={index}>Fruit {index+1} - {fruit}</li>
        ))}
      </ul>
    </div>
  );
}

export default FruitList;