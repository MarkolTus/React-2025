import { useParams } from "react-router-dom"

function Student() {

    // Get the JSON string from localStorage
    const storedStudents = localStorage.getItem("students");

    // Parse it back into a JS object/array
    const students = storedStudents ? JSON.parse(storedStudents) : [];


    const studentid = useParams().studentId
    const student = students.find(n => n.studentid === studentid)

    return (
        <>
            <h1>Student Details</h1>
            <h2>{student.name}</h2>
            <div>{student.studentid}</div>

        </>
    )
}

export default Student
