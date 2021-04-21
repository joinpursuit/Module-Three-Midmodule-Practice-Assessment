import React from 'react'

function studentRoster({student, average, studentCount}) {

    let studentList = student.map((student , i)=> {
        return (
            <li key = {i}>
              {student.name}: {student.GPA.toFixed(2)}
            </li>
        )
    })
    return (
        <div>
            <h2>student</h2>
            <ul className = "studentList">
            {studentList}
            </ul>
            <p>Total Student Count: {studentCount}</p>
            <p>Average GPA: {average.toFixed(2)}</p>
        </div>
    )
}

export default studentRoster