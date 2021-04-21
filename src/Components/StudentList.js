import React from 'react'
import Student from "./Student"
//Class: needs a state. Presentation purpose, use function;

const StudentList =({studentData, addToClass})=>{
    
    const students = studentData.map(student =>{
        return <Student key={student.id} student={student} addStudent={addToClass}/>
    })


    return(<section className="Students">
        <ul className="EnrolledList">
            {students}
        </ul></section>
    )
}

export default StudentList;