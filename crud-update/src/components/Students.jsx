import { Link } from 'react-router-dom';

function Students() {

    // Get the JSON string from localStorage
    const storedStudents = localStorage.getItem("students");

    // Parse it back into a JS object/array
    const students = storedStudents ? JSON.parse(storedStudents) : [];

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
                </li>
            )}
        </>
    )
}

export default Students
