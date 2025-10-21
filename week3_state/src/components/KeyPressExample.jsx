import { useState, useEffect } from "react";

export default function KeyPressExample() {
  const [lastKey, setLastKey] = useState("");
  const [count, setCount] = useState(5);
  const [inputval, setInputval] = useState("");
  const [randChar, setRandChar] = useState("e");
  const [wins, setWins] = useState(0);
  const [losses, setLosses] = useState(0);

 useEffect(() => {
    setRandChar(randomLetter)
  }, []);

  function handleKeyDown(e) {
    let winningKey = randChar;
    setLastKey(e.key);
    setInputval(e.key)

    setCount(count - 1)

    if(e.key == winningKey){
        alert("CORRECT - YOU WIN")
        setWins(wins + 1)
        resetGame()
    }else if(count == 1){
        alert("GAME OVER")
        setLosses(losses + 1)
        setCount(0)
        resetGame()
    }

  }

  function resetGame(){
    setCount(5)
    setInputval("")
    setRandChar(randomLetter)
  }

  function randomLetter(){
    const Numtostr = Math.floor(Math.random() * 26) + 97;
    const randLetter = String.fromCharCode(Numtostr);
    return randLetter;
  }

  return (
    <div>
      <input
        type="text"
        placeholder="Type something..."
        onKeyDown={handleKeyDown}
        value={inputval}
      />

      <button onClick={resetGame}>Reset</button>

      <p>Last key pressed: {lastKey}</p>
      <p>You have {count} remaining tries</p>
      <p>Wins: {wins} Losses: {losses}</p>
      <p>{randChar}</p> {/* For testing purposes only */} 
    </div>
  );
}