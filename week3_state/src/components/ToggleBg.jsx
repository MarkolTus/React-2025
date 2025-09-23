import { useState } from "react";

function ToggleBg({ value }) {
  const [colour, setColour] = useState('white');    //initial value of the state variable is false
const styles = {
       backgroundColor: colour
}

  return (
    <div style={styles}>
      <button onClick={() => 
      colour=='white'
      ? setColour('black') : setColour('white') }> Toggle
      </button>
    </div>
  );
}

export default ToggleBg