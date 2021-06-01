import react from "react";
import { Component } from "react";
import Roster from "./Roster";

import studentData from "./data/studentData.js";

class Students extends Component {
  //   state = { newStudents: [] };
  //   addStudent = (student) => {
  //     this.setState((prevState) => ({
  //       newStudents: [...prevState.newStudents, student],
  //     }));
  //   };

  render() {
    const { addStudent } = this.props;
    // console.log(this.state.\newStudents);
    return (
      <div>
        <ul>
          {studentData.map((student) => {
            // debugger;
            return (
              <li>
                <h3>{student.name}</h3>
                <p>Age: {student.age}</p>
                <img src={student.image} />
                <p>bio: {student.bio}</p>
                <p>GPA: {student.GPA}</p>
                <button onClick={() => addStudent(student)}>
                  Add to Class
                </button>
              </li>
            );
          })}
        </ul>
      </div>
    );
  }
}

export default Students;
