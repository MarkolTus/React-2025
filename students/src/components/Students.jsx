import { useNavigate } from 'react-router-dom'
import { useState, useEffect } from 'react'

function Students({ deleteStudentV }) {

  let students = localStorage.getItem("students") ? JSON.parse(localStorage.getItem("students")) : [];

  const params = new URLSearchParams(window.location.search)
  const [isEdited, setIsEdited] = useState(params.get('edited') ? params.get('edited') : false)

  const [count, setCount] = useState(isEdited ? 1 : 0)

  useEffect(() => {
    isEdited ? setCount(count + 1) : 0
    console.log(isEdited, count)
  }, [isEdited])

  const navigate = useNavigate();

  const goToEditLink = (e) => {
    console.log(e.target.value)
    navigate(`/edit?id=${e.target.value}`)
  }

  return (
    <>
      <h1>Students</h1>
      <table><tbody>
        {
          students.map(
            student => (
              <tr key={student.id}>
                <td>{student.studentId}</td>
                <td>{student.name}</td>
                <td>{student.email}</td>
                <td>
                  <button onClick={goToEditLink} value={student.id}>Edit</button>
                </td>
                <td>
                  <button onClick={deleteStudentV} value={student.id}>Delete</button>
                </td>
              </tr>
            )
          )
        }
      </tbody>
      </table>
    </>
  )
}

export default Students