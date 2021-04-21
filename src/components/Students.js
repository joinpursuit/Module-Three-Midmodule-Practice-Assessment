import Student from "./Student"
import React from 'react'


function Students({students, handleClick}) {
    return (
        <div className = "Students">
            {students.map((student, i) => {
              return (
                <Student 
                key = {i}
                student = {student}
                handleClick= {handleClick}
                />
              )
            })}

        </div>
    )
}

export default Students