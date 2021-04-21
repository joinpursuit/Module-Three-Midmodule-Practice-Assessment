import Student from "./Student"
import React from 'react'

export default function Students({students, addToRoster}) {
    
    return (
        <div className="Students">
        {students.map(student => {
          return (
              <div className={"studentBox"} key={student.id}>
            <Student student={student} />
            <button onClick={() => addToRoster(student)}>Add To Class</button> 
            </div>
            )
          })}
      </div>
    )
}

