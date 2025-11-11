import { useState, useEffect } from "react";

function UseEffectForm() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [data, setData] = useState([]);

  const [submitted, setSubmitted] = useState(false);

  function handleSubmit(e) {
    e.preventDefault();
    setSubmitted(true);
  }

  function clearForm(e) {
    e.preventDefault();
    localStorage.clear()
    setName("")
    setEmail("")
    setMessage("")
  }

  useEffect(() => {
    if (submitted) {
      const newData = [name, email, message];
      setData(newData);
      localStorage.setItem("data", JSON.stringify(newData));
      console.log(newData);
    }
  }, [submitted]);

  useEffect(() => {
    const storedData = JSON.parse(localStorage.getItem("data") || []);
    setData(storedData);
    console.log(storedData);
    setName(storedData[0] || "")
    setEmail(storedData[1] || "")
    setMessage(storedData[2] || "")
  }, []);

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label>Name:</label>
        <input 
          type="text" 
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
      </div>
      <div>
        <label>Email:</label>
        <input 
          type="email" 
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
      </div>
      <div>
        <label>Message:</label>
        <input 
          type="text" 
          value={message}
          onChange={(e) => setMessage(e.target.value)}
        />
      </div>
      <button type="submit">
        Save
      </button>
      <button type="button" onClick={clearForm}>
        Clear
      </button>
    </form>
  );
}

export default UseEffectForm;
