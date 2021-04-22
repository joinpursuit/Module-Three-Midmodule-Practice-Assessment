import React from 'react'

export default function Classlist(props) {
    const { students, GPA } = { ...props }
    const classSize = student.length
    let enrolledClass = students.map((student , i)=> {
        return (
            <li key = {i}>
              {student.name}: {student.GPA.toFixed(2)}
            </li>
        )
    })
    return (
    <div>
        <h2>Enrolled</h2>
        <ul className='EnrolledList'>
            {enrolledClass}
        </ul>
        <h3>Total Student Count: {classSize}</h3>
        <h3>Average GPA: {GPA}</h3>
    </div>
    )
}
