import React from 'react';
import StudentCard from './StudentCard';

export default function StudentList(props) {
    const listOfStudents = props.students.map((student) => {
        return (
        <StudentCard
            key={student.id}
            name={student.name}
            age={student.age}
            image={student.image}
            bio={student.bio}
            gpa={student.GPA}
        />
        )
    })

    return (
        <div>
            <h1>Build a Class</h1>
           {listOfStudents} 
        </div>
    )
}
