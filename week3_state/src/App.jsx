import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Counter from './components/Counter'
import ToggleBg from './components/ToggleBg'
import NameForm from './components/NameForm'

function App() {
  const [count, setCount] = useState(0)
  const [message, setMessage] = useState("Initial message");

  return (
    <>
      <Counter />
      <ToggleBg />
    </>
  )
}

export default App
