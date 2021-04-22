import React from 'react'

function Students(props) {

    const { studentData, handleClick } = props



    const StudentList = studentData.map((student, i) =>{

        return(
            <li key={i}>
                <h2>{student.name}</h2>
                <p>Age: {student.age}</p>
                <img src={student.image} alt="student"/>
                <p>Bio: {student.bio}</p>
                <p>GPA: {student.GPA.toFixed(2)}</p>
                <button onClick={handleClick}>Add To Class</button>
            </li>
        )
    })



    return (
        <div>
            <ul>
                {StudentList}
            </ul>
        </div>
    )
}

export default Students
