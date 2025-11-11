import { useEffect, useState } from "react";

function Example() {
const [count, setCount] = useState(0);
const [didLoad, setDidLoad] = useState(false); // local state flag

useEffect(() => {
    setCount(Number(localStorage.getItem("count")))
    console.log(count);
 }, []);

useEffect(() => {
  if(didLoad){
    console.log(count);
    localStorage.setItem("count", count)
  }else{
    setDidLoad(true)
  }
 }, [count]);

return (
    <div>
        <button onClick={() => setCount((c) => c + 1)}>increment</button>
    </div>
);

}

export default Example;