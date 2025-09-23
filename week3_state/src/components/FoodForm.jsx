import { useState } from "react";

function FoodForm() {
  const [food, setFood] = useState("");

  return (
    <div>
      <input
        type="text"
        placeholder="Enter your favourite food"
        value={food}
        onChange={(e) => setFood(e.target.value)}
      />
      <p>Hello, your favourite food is {food}!</p>
    </div>
  );
}

export default FoodForm