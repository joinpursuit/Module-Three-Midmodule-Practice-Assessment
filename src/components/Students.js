import React from "react";
// import AddStudent from './AddStudent'
import StudentListItem from './StudentListItem'
import './Students.css'



const Students = ({studentData, addStudent}) => {
  // const { studentData } = props;

 const students = studentData.map(student=>{
        return <StudentListItem key={student.id} student={student} addStudent={addStudent} />
        })
  return(
      <section className="Students">
        <h1>Build a Class</h1>
        <ul>
        {students}
        </ul>
  </section>
)
  }
export default Students;
