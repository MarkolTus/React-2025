import { useState } from "react";

function LoginForm() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [lastKey, setLastKey] = useState("");

  function handleLogin(e) {
    e.preventDefault();
    console.log("Email:", email);
    console.log("Password:", password);
    alert("Login attempted!");
  }

  function handleKeyDown(e) {
    setLastKey(e.key);
    if(e.key == "ArrowUp"){
      console.log("UP");
    }else if(e.key == "ArrowDown"){
      console.log("DOWN");
    }
  }

  return (
    <form onSubmit={handleLogin}>
      <div>
        <label >Email:</label>
        <input 
          type="email" 
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          onKeyDown={handleKeyDown}
        />
      </div>

      <div>
        <label>Password:</label>
        <input 
          type="password" 
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
      </div>

      <button 
        type="submit" 
      >
        Login
      </button>
      <p>Last key pressed: {lastKey}</p>
    </form>
  );
}

export default LoginForm;