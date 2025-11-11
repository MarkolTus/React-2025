import React, {useState, useEffect} from 'react';

function Revision({p_name, p_age, p_role}) {
//JavaScript logic goes here
const [name, setName] = useState(localStorage.getItem('name') || p_name || "");
const [age, setAge] = useState(localStorage.getItem('age') || p_age || "");
const [job, setJob] = useState(localStorage.getItem('job') || p_role || "");

const [tempName, setTempName] = useState(name); 
const [tempAge, setTempAge] = useState(age); 
const [tempRole, setTempRole] = useState(job); 

function handleClick(){
    setName(tempName)
    setAge(tempAge)
    setJob(tempRole)
}

function handleInput(e){
    const {name, value} = e.target;
    if(name == "name") { setTempName(value) }
    if(name == "age") { setTempAge(value) }
    if(name == "role") { setTempRole(value) }
}

// function handleName(e){
//     alert(e.target.name)
//     setTempName(e.target.value)
// }

// function handleAge(e){
//     setTempAge(e.target.value)
// } 

// function handleRole(e){
//     setTempRole(e.target.value)
// }

useEffect(
    ()=> {
        localStorage.setItem("name", name)
        localStorage.setItem("age", age)
        localStorage.setItem("job", job)
    }, [name, age, job]
)

    return (
        <>
        Hello {name}, your are {age} years old. You work as a {job}.
            { /* Everything in return will be displayed on screen */}
            <br/><input 
                type="text"
                name="name"
                onChange={handleInput}
                value={tempName}
            />
            <input 
                type="text"
                name="age"
                onChange={handleInput}
                value={tempAge}
            />
            <input 
                type="text"
                name="role"
                onChange={handleInput}
                value={tempRole}
            /><br/>
            <button onClick={handleClick}>Change Role</button>
        </>
    );

}

export default Revision;
