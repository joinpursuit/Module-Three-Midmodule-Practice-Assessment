import React from "react";
import StudentListItem from "./StudentItem";
import "./StudentList.css";

const StudentList = ({ students, enrollRickMorty }) => {
  return (
    <ul className="Students">
      {students.map((student) => {
        return (
          <StudentListItem
            key={student.id}
            student={student}
            enrollRickMorty={enrollRickMorty}
          />
        );
      })}
    </ul>
  );
};

export default StudentList;
