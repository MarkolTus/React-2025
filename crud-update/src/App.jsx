import './App.css'
import Home from './components/Home'
import About from './components/About'
import Students from './components/Students'
import Student from './components/Student'
import Navbar from './components/Navbar'
import EditStudent from './components/EditStudent'
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import {useState, useEffect} from 'react';

function App() {

  useEffect(() => {
    fetch("http://localhost:5173/students.json")
    .then(response => response.json())
    .then(
      data => { 
        if(!localStorage.getItem("students")){
        localStorage.setItem("students", JSON.stringify(data));
        }
      }
    )
  }, []);

  //localStorage.setItem('students', JSON.stringify(students));


  return (
    <>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/students" element={<Students />} />
          <Route path="/students/:studentId" element={<Student />} />
          <Route path="/edit/:studentId" element={<EditStudent
/>} />
        </Routes>
      </BrowserRouter>
    </>
  )
}


export default App
