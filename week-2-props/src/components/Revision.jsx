import React, {useState} from 'react';

function Revision({name, age}) {
//JavaScript logic goes here
const yourName = "Tom";

const [tempRole, setTempRole] = useState(""); //will be for form input value
const [job, setJob] = useState("Manager");

function handleClick(){
    setJob(tempRole)
}

function handleInput(e){
    const theRole = e.target.value;
    setTempRole(theRole)
}

    return (
        <>
        Hello {name}, your are {age} years old. You work as a {job}.
            { /* Everything in return will be displayed on screen */}
            <input 
                type="text"
                name="role"
                onChange={handleInput}
            />
            <button onClick={handleClick}>Change Role</button>
        </>
    );

}

export default Revision;
