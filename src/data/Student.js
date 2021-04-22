import React from 'react'
import "./Students"

function Student({student, handleClick}) {
    const {name, age, image, bio, GPA} = student 
    return (
        <div className = "Student">
            <h3>{name}</h3>
            <p>Age: {age}</p>                
            <img src={image} alt="student"></img>
            <p>Bio: {bio}</p>
            {"\n"}
            <p>GPA: {GPA.toFixed(2)}</p>
            <button onClick={()=> handleClick(student)}>Add To Class</button>
        </div>
    )
}

export default Student