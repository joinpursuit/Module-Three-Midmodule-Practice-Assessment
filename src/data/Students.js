// import React from 'react'

// function Student(props) {
//     const {studentData} = props;
//     const studentList = studentData.map((student,i) => {
//         return (
//             <li key={i}>
//                 <h3>{student.name}</h3>
//                 <p>Age: {student.age}</p>
//                 <img src="{student.image" alt="img"/>
//                 <p>Bio: {student.bio}</p>
//                 <p>GPA: {student.GPA}</p>
//                 <button>Add To Class</button>
//             </li>
//         )
//     })
//     return (
//         <ul>
//             { studentList }
//         </ul>
//     )
// }

// export default Student
// import "./Students.css"
import React from 'react'

import Student from "./Student"


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