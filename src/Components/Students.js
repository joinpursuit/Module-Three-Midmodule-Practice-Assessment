
import React from "react"
import "./Students.css"

const Students = (props) => {
    const {studentData} = props 

    const helperFunction = studentData.map((elem, i) => {
        return (
            <li key={i}>
                <h3>{elem.name}</h3>
                <p>Age: {elem.age}</p>
                <img src={elem.image} alt="Pic Student"/>
                <p>Bio: {elem.bio}</p>
                <p>GPA: {elem.GPA.toFixed(2)}</p>
                <button>Add To Class</button>
            </li>
        )
    })

    return (
        <ul>
            <h1>Build a Class</h1>
            {helperFunction}
        </ul>
    )
}

export default Students;

