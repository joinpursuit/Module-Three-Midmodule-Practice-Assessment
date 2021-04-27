import React, { useReducer } from "react";

// function destructor roster, numStudent averageGPA. Roster is passed in here to access the state and update the state.
// Numstudent and averageGPA are passed in so it can be defined and updates state also
const Roster = ({ roster, numStudent, averageGPA }) => {
  return (
    <section className="Roster">
      <h2>Enrolled</h2>
      {/* roster.map is the list items (li) wrapped in the ul. This representtst the data for enrolld names */}
      <ul>
        {roster.map((student) => {
          // ensure to return and give unique key to print li to screen
          return (
            // here the unique key is given to to error and stdudent.name and student.GPA is called here to print the inforation in the roster li
            <li key={student.id}>
              {student.name} {student.GPA}
            </li>
          );
        })}
      </ul>
      {/* {numstudent} and {averageGPA} are used to print the information on roster to the screen  */}
      <h2>Total Student Count:{numStudent}</h2>
      <h2>Average GPA:{averageGPA}</h2>
    </section>
  );
};
export default Roster;
