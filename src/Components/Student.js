import React from 'react'
import './Students.css'
const Student =(props)=>{
    const { name, age, image, GPA, bio, addStudent}= props;
    const submitStudent =(event)=>{
        addStudent(name, GPA)
    }
    return (
        <li className ="student">
            <h3>{name}</h3>
            <p>Age: {age}</p>
            <img src ={image} />
            <p>{bio}</p>
            <p> GPA: {GPA.toFixed(2)}</p>
            <button onClick ={submitStudent}>Add To Class</button>
        </li>
    )
}

export default Student;