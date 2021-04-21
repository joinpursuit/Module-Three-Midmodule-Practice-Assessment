import React from 'react'

export default function EnrolledList() {
    const averageGPA = () => {
        let sum = 0
        enrolledStudents.forEach((students) => {
            sum += students.gpa
        })
        return 
    }

    return (
        <div>
            <h2>Enrolled</h2>
            <ul></ul>
            <h3>Total Student Count:</h3>
            <h3>Average GPA: {averageGPA}</h3>
        </div>
    )
}

