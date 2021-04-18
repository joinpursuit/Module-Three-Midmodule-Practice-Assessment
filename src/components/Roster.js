import React from "react";
import Students from "./Students";
import TeacherEnrollment from "./TeacherEnrollment.js";
import "./styles/Roster.css";

let count = 1;

class Roster extends React.Component {
  state = { roster: [] };

  addStudent = (name, GPA) => {
    // console.log(e.target)
    const newStudent = {
      stuCount: count++,
      stuName: name,
      stuGPA: GPA,
      gpaSum: 0,
    };
    this.setState((prevState) => ({
      roster: [newStudent, ...prevState.roster],
    }));
    console.log(this.gpaSum);
  };

  render() {
    let sumOf = 0;
    const { roster } = this.state;
    return (
      <div className="mainRosterDiv">
        <Students roster={roster} addStudent={this.addStudent} />
        <section className="rightRoster">
          <h1>Roster</h1>
          <ul className="EnrolledList">
            {roster.map((student) => (
              <li key={student.id} total={(sumOf += student.stuGPA)}>
                {student.stuName}: {student.stuGPA}
              </li>
            ))}
          </ul>
          <br />
          <p id="total">Total Student Count: {count - 1}</p>
          <p id="sumGPA">Average GPA: {sumOf / (count - 1)}</p>
          <TeacherEnrollment
            roster={roster}
            averageGPA={sumOf / (count - 1)}
            allClass={count - 1}
          />
        </section>
      </div>
    );
  }
}
export default Roster;
