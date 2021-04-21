import React from 'react'
import StudentCard from "./StudentCard"

export default function Students({studentData}) {
    return (
        <div>
            <StudentCard/>
            <StudentCard/>
        </div>
    )
}
// based on array length so a loop for the student display 