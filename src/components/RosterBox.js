import React from 'react';
import Student from './Student.js'

const RosterBox = (prop) => {
    const studentData = prop.studentData
    return (
        <ul>
           { studentData.map((student) => {
                return (<Student
                    name={student.name}
                    age={student.age}
                    image={student.image}
                    bio={student.bio}
                    GPA={student.GPA}
                />)
            })}
        </ul>
    )
}

export default RosterBox;