import React from "react";
import "../styles/Enrolled.css";

const Enrolled = ({ roster }) => {
  return (
    <section>
      {/* {console.log(roster)} */}
      {roster.map((rosterInfo) => {
        return (
          <>
            <h2>{rosterInfo.studentName}</h2>
            <h3>{rosterInfo.count}</h3>
            <h3>{rosterInfo.GPA}</h3>
          </>
        );
      })}
      <h2>Enrolled</h2>
      <h3>Total Student Count: </h3>
      <h3>Average GPA: </h3>
    </section>
  );
};

export default Enrolled;
