import React from 'react'
import Student from "./Student"
import "./StudentList.css"

function StudentList(props) {


    return (
        <div className="Students">
            {props.listOfstudents.map(student => {
                return (
                    <div className="studentcard" key={student.id}>
                        <Student 
                        student={student}/>
                        <button onClick={() => props.addToList(student)}>Add To Class</button>
                    </div>
                )
            })}

        </div>
    )
//     let allStudents = props.listOfstudents.map(student => {
// return (
   
//     <Student 
//     // id={student.id}
//     // name={student.name}
//     // age={student.age}
//     // bio={student.bio}
//     // image={student.image}
//     // GPA={student.GPA}
//     student = {student}
//     // addtolist={props.addToList}
//     enrolled={props.enrolled}/>
  
// )
//     })
//     return (
//         <div>
//             <h1>Build A Class</h1>
//             <ul>{allStudents}</ul>
           
//         </div>
    //)
}

export default StudentList
