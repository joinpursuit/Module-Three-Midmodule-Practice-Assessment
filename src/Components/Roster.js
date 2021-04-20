import React from 'react'

function Roster({enrolled, average, studentCount}) {

    let enrolledList = enrolled.map((enrollee , i)=> {
        return (
            <li key = {i}>
              {enrollee.name}: {enrollee.GPA.toFixed(2)}
            </li>
        )
    })
    return (
        <div>
            <h2>Enrolled</h2>
            <ul className = "EnrolledList">
            {enrolledList}
            </ul>
            <p>Total Student Count: {studentCount}</p>
            <p>Average GPA: {average.toFixed(2)}</p>
        </div>
    )
}

export default Roster
