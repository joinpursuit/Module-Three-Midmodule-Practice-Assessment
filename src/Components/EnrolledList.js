import React from 'react'

export default function EnrolledList({enrolledStudents}) {
    return (
        <div>
            <h2>Enrolled</h2>
            <h3>Student Count:{enrolledStudents.length}</h3>
            <h3>Average GPA:{avgerageGpa(enrolledStudents)}</h3> 
            <ul></ul>           
        </div>
    )
}

const avgerageGpa = (enrolledStudents) => {
    let sum = 0 

    enrolledStudents.forEach((students)=>{
        sum += students.GPA
    })
    return sum/enrolledStudents.length  
    
}