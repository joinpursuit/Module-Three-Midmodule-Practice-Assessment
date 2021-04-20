import React from 'react';
import Student from './Student.js'

const RosterBox = (prop) => {
    const studentData = prop.studentData
    console.log(studentData)

    
    return (
        <ul>
            <Student { ...studentData }/>
            <Student {... studentData }/>
        </ul>
    )
}

export default RosterBox;