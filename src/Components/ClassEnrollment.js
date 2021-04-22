import React from "react";

const ClassEnrollment = ({ studentInfo, avgGPA }) => {
  return (
    <div>
      <h2 key={studentInfo.id}>Enrolled</h2>
      <ul className="EnrolledList">
        {studentInfo.map((student) => {
          const { name, GPA, id } = student;
          return (
            <li key={id}>
              {name}: {GPA.toFixed(2)}
            </li>
          );
        })}
      </ul>
      <h3>Total Student Count: {studentInfo.length}</h3>
      <h3>Average GPA: {avgGPA.toFixed(2)}</h3>
    </div>
  );
};

export default ClassEnrollment;
