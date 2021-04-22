import React from 'react'
import Student from './Student'

function Students (props) {
  const students = props.students.map(student => {
    return (
      <Student
        student={student}
        addStudent={props.addStudent}
        averageGpa={props.averageGpa}
        key={student.id}
      />
    )
  })

  return <ul className='Students'>{students}</ul>
}

export default Students
