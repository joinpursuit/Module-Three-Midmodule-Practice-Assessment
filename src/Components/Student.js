import React from 'react'
import "./Student.css"

export default function Student(props) {
    const {student, handleClick} = {...props}
    const {name, age, image, bio, GPA} = student 
    return (
        <div className = "Student">
            <h3>{name}</h3>
            <p>Age: {age}</p>                
            <img src={image} alt="student"></img>
            <p>Bio: {bio}</p>
            {"\n"}
            <p>GPA: {GPA.toFixed(2)}</p> //toFixed needed for display
            <button onClick={()=> handleClick(student)}>Add To Class</button>
        </div>
    )
}
