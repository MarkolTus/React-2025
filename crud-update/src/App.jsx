import './App.css'
import Home from './components/Home'
import About from './components/About'
import Students from './components/Students'
import Student from './components/Student'
import Navbar from './components/Navbar'
import EditStudent from './components/EditStudent'
import { BrowserRouter, Routes, Route } from 'react-router-dom';

function App() {

  const students = [
    {
      name: "Tom",
      studentid: "k000324242"
    },
    {
      name: "Ann",
      studentid: "k00325624234"
    }
  ]

  const storedStudents = localStorage.getItem("students");
 if(!storedStudents){
    localStorage.setItem('students', JSON.stringify(students));
 }


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
