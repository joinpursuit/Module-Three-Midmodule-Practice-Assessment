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
          <ul key={rosterInfo}>
            <li>
              <p>
                {rosterInfo[0]}: {rosterInfo[1]}
              </p>
            </li>
          </ul>
        );
      })}
      <h3>Total Student Count: {roster.length}</h3>
      <h3>Average GPA: {roster[1]}</h3>
    </section>
  );
};

export default Enrolled;
