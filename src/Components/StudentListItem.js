import React from 'react'

// student is pulled as a props from StudentList.js
const StudentListItem = ({student, addStudent}) => {
    //student is an object, so we need to destructure it
    const {name,age,bio,GPA,image} = student;
    return (
        <li>
            <h3>{name}</h3>
            <p>Age: {age}</p>
            <img src={image} alt="Pic of student"/>
            <p>Bio: {bio}</p>
            <p>GPA: {GPA.toFixed(2)}</p>
            <button onClick={() => addStudent(student)}>Add To Class</button>
            {/* If you dont want to pass the event, will have to wrap the function inside another function*/}
        </li>
    )
}

export default StudentListItem;
