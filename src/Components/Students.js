import React from "react";
import studentData from "../data/studentData";
import Student from "./StudentCard";
import "./Students.css";

// this fuction passes in addtoroster method which adds to roster and updates state
// the student is called and the student is updated using addto roster
const Students = ({ addToRoster }) => {
  return (
    <>
      <h1>Build a class</h1>
      <section className="Students">
        {studentData.map((student) => {
          return (
            <Student
              student={student}
              addToRoster={addToRoster}
              key={student.id}
            />
          );
        })}
      </section>
    </>
  );
};

export default Students;

// const renderStudentData = () =>{
//     return ({studentData.map((student) => {
//         return student.name;
//       })})
