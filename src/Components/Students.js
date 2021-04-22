import React from 'react'
import "./Students.css"
import Student from "./Student"

export default function Students(props) {
    const {studentData, handleClick} = {...props}
    return (
        <div className="Students">
            {studentData.map((student, i) => {
                return(
                    <Student key={i} student={student} handleClick={handleClick} />
                )
            })}
            
        </div>
    )
}

