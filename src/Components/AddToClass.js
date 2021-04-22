import React from "react";
import StudentID from "./StudentID";

export default function AddToClass({ studentData }) {
  return (
    
    <div>
      <h1>Add to Class</h1>
      <div>
        {studentData.map((student, i) => {
          return (
            <StudentID
              key={student.id}
              name={student.name}
              age={student.age}
              bio={student.bio}
              image={student.image}
              gpa={student.GPA}
            />
          );
        })}
      </div>
    </div>
  );
}
