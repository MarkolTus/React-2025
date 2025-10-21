import { useState } from "react";

function Example() {
  const [count, setCount] = useState(0); // [value, updater function]
  const [msg, setMsg] = useState('Hello');

  return (
    <div>
      <p>You clicked {count} time{ count==1 ? '' : 's' }</p>
      <button onClick={() => setCount(count + 1)}>Click me</button>
      <button onClick={() => alert(msg)}>Say Hello</button>
    </div>
  );
}

export default Example;