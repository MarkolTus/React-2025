import { useState } from "react"
import { useNavigate } from 'react-router-dom'

function EditStudent() {

    const params = new URLSearchParams(window.location.search)
    const idToEdit = params.get('id')

    const arrayOfStudents = JSON.parse(localStorage.getItem("students"))
    const studentToEdit = arrayOfStudents.find(
        s => s.id === idToEdit
    )

    const [students, setStudents] = useState(arrayOfStudents)
    const [student, setStudent] = useState(studentToEdit)

    const [refresh, setRefresh] = useState(false);

    const [sid, setSid] = useState(student.studentId)
    const [sname, setSname] = useState(student.name)
    const [semail, setSemail] = useState(student.email)
    const navigate = useNavigate();


    const handleEdit = (e) => {
        e.preventDefault()

        const updatedStudent = {
            ...student,
            studentId: sid,
            name: sname,
            email: semail
        }

        console.log(updatedStudent)

        const updatedArray = students.map(
            s => (
                s.id === idToEdit ? updatedStudent : s
            )
        )

        localStorage.setItem("students", JSON.stringify(updatedArray))
        setRefresh(true)
        navigate('/students?edited=true')
    }

    const editSid = (e) => {
        setSid(e.target.value)
    }

    const editSname = (e) => {
        setSname(e.target.value)
    }

    const editEmail = (e) => {
        setSemail(e.target.value)
    }

    return (
        <>
            <h1>Edit a student</h1>
            <form onSubmit={handleEdit}>
                <label>Student Id</label>
                <input type="text" name="sid" value={sid} onChange={editSid} />
                <label>Name</label>
                <input type="text" name="sname" value={sname} onChange={editSname} />
                <label>Email</label>
                <input type="text" name="email" value={semail} onChange={editEmail} />
                <input type="submit" value="save" />
            </form>
        </>
    )
}

export default EditStudent