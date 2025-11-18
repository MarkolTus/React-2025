import { useState } from 'react';
import { useParams, useNavigate } from "react-router-dom"

function EditStudent() {

    const navigate = useNavigate();

    // Get the JSON string from localStorage
    const storedStudents = localStorage.getItem("students");

    // Parse it back into a JS object/array
    const students = storedStudents ? JSON.parse(storedStudents) : [];


    const studentid = useParams().studentId
    const student = students.find(n => n.studentid === studentid)

    const [sName, setSName] = useState(student.name || '');
    const [sId, setSId] = useState(student.studentid || '');

    const handleEdit = (e) => {
        e.preventDefault();

        const updatedStudent = {
            name: sName,
            studentid: sId,
        };

        const updatedStudents = students.map(s =>
            s.studentid === studentid ? updatedStudent : s
        );

        localStorage.setItem("students",
            JSON.stringify(updatedStudents));

        navigate('/students');
    }

    return (
        <>
            <h1>Edit {student.name}</h1>
            <form onSubmit={handleEdit}>
                <label>Name</label>
                <input
                type="text"
                name="name"
                value={sName}
                onChange={(e) => setSName(e.target.value)}
                />

                <label>Student ID</label>

                <input
                type="text"
                name="studentid"
                value={sId}
                onChange={(e) => setSId(e.target.value)}
                />
                <input type="submit" value="Save" />
            </form>
        </>
    )
}

export default EditStudent
