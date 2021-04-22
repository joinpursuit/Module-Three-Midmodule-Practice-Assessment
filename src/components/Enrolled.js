import React from 'react'

function Enrolled (props) {
  const { students, GPA } = { ...props }
  const len = students.length

  return (
    <div>
      <h2>Enrolled</h2>
      <ul className='EnrolledList'>
        {students.map((student, i) => {
          return (
            <li key={i}>
              {student.name}: {student.GPA.toFixed(2)}
            </li>
          )
        })}
      </ul>
      <h3>Total Student Count: {len}</h3>
      <h3>Average GPA: {GPA}</h3>
    </div>
  )
}

export default Enrolled
