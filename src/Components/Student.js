import React from 'react'
import "./Students.css"

const Student = (props) => {
    const {name, age, image, bio, GPA, addStudent} = props


    return (
        <li className="student"> 
            {/* onSubmit={this.addToClass} */}
            <h3>{name}</h3>
            <p>Age: {age}</p>
            <img src={image} />
            <p>{bio}</p>
            <p>GPA: {GPA.toFixed(2)}</p>
            <button onClick={()=>addStudent(name, GPA)}>Add To Class</button>

        </li>
    )
}

export default Student