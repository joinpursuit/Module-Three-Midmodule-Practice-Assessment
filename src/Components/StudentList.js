import React from 'react'
import studentData from "../data/studentData"
import "./StudentList.css"
import StudentListItem from "./StudentListItem"

const StudentList = ({addStudent}) => {

    const students = studentData.map(student => {
        return <StudentListItem key={student.id} student ={student} addStudent={addStudent}/>
    })

    return (
        <section className="Students">
            <h2>Build a Class</h2>
            <ul>
                {students}
            </ul>
        </section>
    )
}

export default StudentList;






// import React from "react"
// import "./Students.css"

// const Students = (props) => {
//     const {studentData} = props 

//     const helperFunction = studentData.map((elem, i) => {
//         return (
//             <li key={i}>
//                 <h3>{elem.name}</h3>
//                 <p>Age: {elem.age}</p>
//                 <img src={elem.image} alt="Pic Student"/>
//                 <p>Bio: {elem.bio}</p>
//                 <p>GPA: {elem.GPA.toFixed(2)}</p>
//                 <button onClick={(e)=>elem.averageOfStudents(elem.id)}>Add To Class</button>
//             </li>
//         )
//     })

//     return (
//         <div className="uList">
//             <h1>Build a Class</h1>
//             <div className="studentCards">
//                 {helperFunction}
//             </div>
//         </div>
//     )
// }

// export default Students;

