import React, {useState, useEffect} from 'react';

function Revision({p_name, p_age, p_role}) {
//JavaScript logic goes here
const yourName = "Tom";

const [tempName, setTempName] = useState(localStorage.getItem('name') || ""); 
const [tempAge, setTempAge] = useState(localStorage.getItem('age') || ""); 
const [tempRole, setTempRole] = useState(localStorage.getItem('job') || ""); 

const [name, setName] = useState(localStorage.getItem('name') || p_name || "");
const [age, setAge] = useState(localStorage.getItem('age') || p_age || "");
const [job, setJob] = useState(localStorage.getItem('job') || p_role || "");


function handleClick(){
    setName(tempName)
    setAge(tempAge)
    setJob(tempRole)
}

function handleName(e){
    setTempName(e.target.value)
}

function handleAge(e){
    setTempAge(e.target.value)
}

function handleRole(e){
    setTempRole(e.target.value)
}

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
                onChange={handleName}
                value={tempName}
            />
            <input 
                type="text"
                name="age"
                onChange={handleAge}
                value={tempAge}
            />
            <input 
                type="text"
                name="role"
                onChange={handleRole}
                value={tempRole}
            /><br/>
            <button onClick={handleClick}>Change Role</button>
        </>
    );

}

export default Revision;
