import { useState } from "react";

function ToggleMessage({ value }) {
  const [isVisible, setIsVisible] = useState(false);    //initial value of the state variable is false

  return (
    <div>
      <p>The parent says: {value}</p>;
      <button onClick={() => setIsVisible(!isVisible)}> 
        {isVisible ? "Hide" : "Show"} 
      </button>
      {isVisible && <p>Hello, React world!</p>}  
      {isVisible ? <p>Hello, React world!</p> : <p></p>}  
    </div>
  );
}

export default ToggleMessage