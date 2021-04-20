import React from "react";
import Student from "./Student";
import "./Students.css";

const Students = ({ studentData, addStudent }) => {
  return (
    <div>
      <h1>Build a Class</h1>

      <ul className="Students">
        {studentData.map((student) => {
          return (
            <Student
              name={student.name}
              age={student.age}
              image={student.image}
              GPA={student.GPA}
              bio={student.bio}
              key={student.id}
              addStudent={addStudent}
            />
          );
        })}
      </ul>
    </div>
  );
};
export default Students;
