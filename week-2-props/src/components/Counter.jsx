import React, { useState } from "react";

function Counter(props) {
const [count, setCount] = useState(0);

{console.log(props.myname)}
const fontStyle = { color: "blue", fontSize: "30px" };

return (
<div>
<h2>Count: {count}</h2>
<button className="myBt" style={fontStyle} onClick={() => setCount(count + 1)}>Increase</button>
</div>

);
}

export default Counter;