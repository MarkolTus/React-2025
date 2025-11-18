import { useState, useEffect } from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { v4 as uuidv4 } from 'uuid'
import NavBar from './components/NavBar'
import Add from './components/Add'
import Students from './components/Students'
import EditStudent from './components/EditStudent'
import './App.css'

function App() {
  //get the array of student objects from local storage if it exists
  //set the students variable = this value or else equal to an empty array
  let students = localStorage.getItem("students") ? JSON.parse(localStorage.getItem("students")) : [];

  const [sid, setSid] = useState("")
  const [sname, setSname] = useState("")
  const [semail, setSemail] = useState("")
  //set the initial value of studentObj = the values saved in local storage
  const [studentObj, setStudentObj] = useState(students)
  /* state to see if this is a load or reload so that the useEffect wont run */
  const [firstLoad, setFirstLoad] = useState(true);

  //handles the form submit for adding students
  const handleSubmit = (e) => {
    e.preventDefault();
    //add the form values to the newStudents object
    const uniqueID = uuidv4()
    const newStudent = { "id": uniqueID, "studentId": sid, "name": sname, "email": semail }
    //spread newStudent onto the existing array of student objects
    setStudentObj([...studentObj, newStudent])
    //clear the form values
    setSid("")
    setSname("")
    setSemail("")
  }

  //run this when studentObj is updated (i.e. a student is added)
  useEffect(() => {
    if (!firstLoad) {
      //dont run on first load as an empty object is created
      //save the updated array of student objects to local storage
      localStorage.setItem("students", JSON.stringify(studentObj));
    }
    setFirstLoad(false);
  }, [studentObj]);

  //function to update the sid variable when the user adds student id
  const handleSid = (e) => {
    setSid(e.target.value)
  }

  //function to update the name variable when the user adds name
  const handleSname = (e) => {
    setSname(e.target.value)
  }

  //function to update the email variable when the user adds email
  const handleEmail = (e) => {
    setSemail(e.target.value)
  }

  //function to delete an object (student) from the array
  const deleteStudent = (e) => {
    const delItem = e.target.value //the id of the button that was clicked (also the id of the object to delete)
    //filter returns an array matching everything except the item we want to delete
    const filteredData = studentObj.filter(
      item => item.id !== delItem
    )
    //state method to update the studentObj variable
    //useEffect will be called in turn when this executes and will update the local storage
    setStudentObj(filteredData)
  }

  return (
    <>
      <BrowserRouter>
        <NavBar />
        <Routes>
          <Route exact path="/" element={<Add sid={sid} sname={sname} semail={semail} handleSubmit={handleSubmit} handleSid={handleSid} handleSname={handleSname} handleEmail={handleEmail} />} />
          <Route path="/students" element={<Students deleteStudentV={deleteStudent} />} />
          <Route path="/edit" element={<EditStudent />} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App