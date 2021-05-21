import React from "react";
import studentData from "../data/studentData";
import StudentCard from "./StudentCard";

import "./StudentList.css";

const StudentList = ({ enrolledStudent }) => {
  return (
    <div className="Students">
      {studentData.map((student) => {
        return (
          <StudentCard enrolledStudent={enrolledStudent} student={student} />
        );
      })}
      )
    </div>
  );
};
export default StudentList;
