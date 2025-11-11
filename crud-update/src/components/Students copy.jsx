import { useState } from 'react';
import { Link } from 'react-router-dom';

function Students() {

    const storedStudents = localStorage.getItem("students");
    // Initialize state from localStorage
  const [students, setStudents] = useState(storedStudents ? JSON.parse(storedStudents) : []
  );

  function deleteStudent(studentid) {
    // Filter out the student to delete
    const updatedStudents = students.filter(s => s.studentid !== studentid);

    // Update both state and localStorage
    setStudents(updatedStudents);
    localStorage.setItem("students", JSON.stringify(updatedStudents));
  }

  function callAlert(){
    alert("Tom")
  }

    return (
        <>
            <h1>Students</h1>
            {students.map(student =>
                <li key={student.studentid}>
                    Student ID:{student.studentid}<br />
                    Name: {student.name}<br />
                    <Link key={student.studentid} to={`/students/${student.studentid}`}>All About &nbsp;
                        { student.name}</Link> | &nbsp;
                        <Link to={`/edit/${student.studentid}`}>Edit &nbsp;{student.name}</Link>
                        <button onClick={() => deleteStudent(student.studentid)}>
                Delete {student.name}
              </button>
              <button onClick={callAlert}>Alert</button>
                </li>
            )}
        </>
    )
}

export default Students
