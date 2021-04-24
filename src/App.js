import React from "react";
import studentData from "./data/studentData";
import StudentPool from "./Components/StudentPool";
import Form from "./Components/Form";
import Enrolled from "./Components/Enrolled";
import "./App.css";

class App extends React.Component {
  state = { addedStudents: [] }; //changefrom all students to only selected ones

  addStudent = (student) => {
    // console.log(student)
    this.setState((prevState) => ({
      addedStudents: [student, ...prevState.addedStudents],
    }));
  };

  render() {
    const { addedStudents } = this.state;
    let averageGPA = 0;
    addedStudents.forEach((student) => {
      return (averageGPA += student.GPA);
    });
    averageGPA = averageGPA / addedStudents.length;
    return (
      <div className="App">
        <h1>Build a Class</h1>
        <StudentPool studentData={studentData} addStudent={this.addStudent} />
        <h4>Enrolled</h4>
        <ul className="EnrolledList">
          <Enrolled
            addedStudents={addedStudents}
            averageGPA={averageGPA ? averageGPA : 0}
          />
        </ul>
        <Form
          averageGPA={averageGPA? averageGPA.toFixed(2): 0}
          addedStudents={addedStudents[0]? addedStudents:0}
        />
      </div>
    );
  }
}

export default App;
