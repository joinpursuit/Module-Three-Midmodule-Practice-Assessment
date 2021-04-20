import React from "react";
import "../styles/Enrolled.css";

const Enrolled = ({ roster }) => {
  //   debugger
  return (
    <section>
      <h2>Enrolled</h2>
      {/* {console.log(roster)} */}
      {roster.map((rosterInfo) => {
        // debugger;
        return (
          <li key={rosterInfo}>
            {rosterInfo[0]}: {rosterInfo[1]}
          </li>
        );
      })}
      <h3>Total Student Count: {roster.length}</h3>
      <h3>Average GPA: </h3> {/* class average GPA here*/}
    </section>
  );
};

export default Enrolled;
