import { useState } from 'react'
import './App.css'
import Example from './components/Example.jsx'
import LoginForm from './components/LoginForm.jsx'
import TodoSaver from './components/TodoSaver.jsx'
import Revision from './components/Revision.jsx'

function App() {

  return (
    <>
      <Revision p_name="Pat" p_age="25" p_role="CEO" />
    </>
  )
}

export default App
