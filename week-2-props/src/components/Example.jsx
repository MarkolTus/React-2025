import { useEffect, useState } from "react";

function Example() {
const [count, setCount] = useState(0);
const [note, setNote] = useState("Hello");

//runs every time there is a re-render 
useEffect(() => {
 console.log("Runs every time the component is re-rendered");
});

useEffect(() => {
console.log(note);
}, [note]);

return (
 <div>
 <button onClick={() => setCount(count + 1)}>increment</button>
 <button onClick={() => setNote(note + "o")}>Add o</button>
 </div>
);

}



export default Example;