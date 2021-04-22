import React from "react";
import studentData from "../data/studentData";
import Students from "./Students"
import "./BuildAClass.css";

class BuildAClass extends React.Component {
    
    
    render() {
      const studentInfo = 
          studentData.map(student => <Students name={student.name} age={student.age} bio={student.bio}
          image={student.image} gpa={student.GPA}/>)
      return (
          <div>
            {studentInfo}

            
            
        
        </div>
    )
  }
}
export default BuildAClass;
