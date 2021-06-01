import react from "react";
import { Component } from "react";
import Students from "./Students";

const Roster = ({ newStudents }) => {
 let gpaTotal = 0;   
  return (
    <div>
        <h1>Enrolled</h1>
      <ul>
        {newStudents.map((newStudent) => {
          gpaTotal+=newStudent.GPA;
        //   debugger;
          return (
            <li>
              <p>
                {newStudent.name}: {newStudent.GPA}
              </p>
            </li>
          );
        })}
      </ul>
    <section>
        <h3>Average GPA:{(gpaTotal/newStudents.length)}</h3>
    </section>
    </div>
  );
};

export default Roster;
