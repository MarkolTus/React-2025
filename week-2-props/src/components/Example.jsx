import { useState } from "react";

function Example() {
  const [count, setCount] = useState(0); // [value, updater function]

  return (
    <div>
      <p>You clicked {count} time{ count==1 ? '' : 's' }</p>
      <button onClick={() => setCount(count + 1)}>Click me</button>
    </div>
  );
}

export default Example;