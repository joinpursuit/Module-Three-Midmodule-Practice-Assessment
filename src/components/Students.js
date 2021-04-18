import React from "react";

import "./styles/Students.css";
import studentData from "./../data/studentData";

const students = studentData;

const Students = ({ addStudent }) => {
  const display = () => {
    console.log(students);
  };

  return (
    <div>
      <h1 className="build-header">Build a Class</h1>
      <ul className="students">
        {students.map((student) => (
          <li key={student.id} onClick={display} className="stuDivs">
            <h1> {student.name}</h1>
            <p>Age: {student.age}</p>
            <img className="images" src={student.image} alt="image" />
            <p className="bio">Bio: {student.bio}</p>
            GPA: {student.GPA}
            <br/>
            <button onClick={() => addStudent(student.name, student.GPA)}>
              Add Student
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Students;
