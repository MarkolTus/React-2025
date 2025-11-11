import { Link } from 'react-router-dom';
import {useState} from 'react';

function Students() {

    // Get the JSON string from localStorage
    const storedStudents = localStorage.getItem("students");

    // Parse it back into a JS object/array
    const [students, setStudents] = useState(storedStudents ? JSON.parse(storedStudents) : []);

    function deleteStudent(sid){
        const updatedStudents = students.filter(s => s.studentid !== sid);

        setStudents(updatedStudents)

        localStorage.setItem("students", JSON.stringify(updatedStudents));

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
                </li>
            )}
        </>
    )
}

export default Students
