import React from 'react'

function StudentCard(props) {
    return (
        <div>
            <h4>{props.name}</h4>
            <p>Age: {props.age}</p>
            <img src={props.image} alt={props.name}/>
            <p>Bio: {props.bio}</p>
            <p>GPA: {props.gpa}</p>
            <button>Add To Class</button>
        </div>
    )
}

export default StudentCard
