import React from 'react'
import Student from './Student'

function Students (props) {
  const students = props.students.map(student => {
    return <Student student={student} key={student.id} />
  })

  return <ul className='Students'>{students}</ul>
}

export default Students
