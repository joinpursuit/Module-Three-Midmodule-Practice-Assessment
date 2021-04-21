import React from "react";

const Roster = ({ enrolled, average }) => {
  let enrolledStudents = enrolled.map((rick, i) => {
    return (
      <li key={i}>
        {rick.name}: {rick.GPA.toFixed(2)}
      </li>
    );
  });
  return (
    <div>
      <h2>Enrolled</h2>
      <ul className="EnrolledList">{enrolledStudents}</ul>

      <h4>Total Student Count: {enrolled.length}</h4>
      <h4>Average GPA: {average.toFixed(2)}</h4>
    </div>
  );
};

export default Roster;
