import React from 'react'
import "./Student.css"

function Student(props) {
    const alt = "photo"
    const { name, age, image, bio, GPA, id } = props.student
    return (
        <li id={id}>
            <h3>{name}</h3>
            <p>{age}</p>
            <img src={image} alt={alt}/>
            <p>{bio}</p>
            <p>GPA: {GPA.toFixed(2)}</p>
            {/* <button onClick={addtolist(props.student)} >Add To Class</button> */}

        </li>
    )
}

export default Student
