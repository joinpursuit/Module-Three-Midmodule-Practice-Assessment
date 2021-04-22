import React from "react";

const EnrolledList = ({ studentInfo, averageGPA }) => {
  //TRACK THE GPA FROM THE ORIGINAL PROPS FROM STUDENTDATA!!! THERE IS AN ISSUE WITH THE PROPS & THE DECONSTRUCTING!! THA LOGIC IS WORKING, BUT THERE IS A SYNTAX ERROR SOMEWHERE WITH THE PROJECT!!!

  return (
    <div>
      <h2>Enrolled </h2>
      <ul className="EnrolledList">
        {studentInfo.map((student) => {
          return (
            <li key={student.student.id}>
              {student.student.name}: {student.student.GPA.toFixed(2)}{" "}
            </li>
          );
        })}
      </ul>
      <h2>Total Student Count: {studentInfo.length}</h2>
      <h2>Average GPA: {averageGPA.toFixed(2)}</h2>
    </div>
  );
};

export default EnrolledList;
