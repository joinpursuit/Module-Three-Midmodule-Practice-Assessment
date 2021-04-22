import React from "react";
import studentData from "../data/studentData";
import StudentCard from "./StudentCard";

const StudentList = ({enrolledStudent}) => {
    return (
        <div>
          {studentData.map((student) => {
              return <StudentCard enrolledStudent={enrolledStudent} student={student} />
          })})
        
      </div>
    );
  
}
export default StudentList;

