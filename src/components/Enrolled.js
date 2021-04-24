import React from "react";
import "../styles/Enrolled.css";

const Enrolled = ({ roster, averageGPA }) => {

  // let sum = 0;
  return (
    <section>
      <h2>Enrolled</h2>
      {/* {console.log(roster)} */}
      {roster.map((rosterInfo) => {
        // sum += rosterInfo.GPA;
        return (
          <li className="EnrolledList" key={rosterInfo.id}>
            {rosterInfo.name}: {rosterInfo.GPA} 
          </li>
        );
      })}
      <h3>Total Student Count: {roster.length}</h3>
      <h3>Average GPA: {averageGPA}</h3> {/* class average GPA here*/}
    </section>
  );
};

export default Enrolled;
