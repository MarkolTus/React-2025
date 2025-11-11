import { useState } from "react";

function ToggleBg({ value }) {
  const [colour, setColour] = useState('white');    //initial value of the state variable is false

  return (
    <div>
      <button onClick={() => 
      colour=='white' ? setColour('black') : setColour('white') }
      > 
      Toggle
      </button>
      {document.body.style.backgroundColor = colour}
    </div>
  );
}

export default ToggleBg