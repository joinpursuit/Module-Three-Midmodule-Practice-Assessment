// const Student = (props) => {
//     const {name, age, image, bio, GPA, addStudent} = props


//     return (
//         <li > 
//             {/* onSubmit={this.addToClass} */}
//             <h3>{name}</h3>
//             <p>{age}</p>
//             <img src={image} />
//             <p>{bio}</p>
//             <p>GPA: {GPA.toFixed(2)}</p>
//             <button onClick={()=>addStudent(name, GPA)}>Add To Class</button>

//         </li>
//     )
// }


import React from 'react'
import studentData from "../data/studentData"
import "./Student.css"
import StudentListItem from "./StudentsListItem"

const StudentList = ({addStudent}) => {
    
    const students = studentData.map(student => {
        return <StudentListItem key={student.id} student={student} addStudent={addStudent}/>
    })
    
    return (
        <section className="Students">
            <h2>Build A Class</h2>
            <ul>
                {students}
            </ul>
        </section>
    )
}


export default StudentList