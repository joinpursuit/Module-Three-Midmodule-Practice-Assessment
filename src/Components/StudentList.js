import React from "react";
import studentData from "../data/studentData";
import StudentCard from "./StudentCard";

const StudentList = () => {
    return (
        <div>
          {studentData.map((student) => {
              return <StudentCard enrolledStudent={this.props.enrolledStudent} name={student.name} age={student.age} image={student.image} bio={student.bio} gpa={student.gpa} />
          })})
        
      </div>
    );
  
}
export default StudentList;

