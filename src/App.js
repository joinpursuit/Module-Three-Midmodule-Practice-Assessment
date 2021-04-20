import React from "react";
import studentData from "./data/studentData";
import Students from "./components/Students";
import Roster from "./components/Roster";
import TeacherEnrollment from "./components/TeacherEnrollment";
import "./App.css";

class App extends React.Component {
  state = { enrolled: [], averageGPA: 0 };

  addStudent = (name, GPA) => {
    this.setState((prevState) => ({
      enrolled: [{ name: name, GPA: GPA }, ...prevState.enrolled],
    }));
  };

  aveGPA = () => {
    let sum = 0;
    let ave = 0;
    const { enrolled } = this.state;

    if (enrolled.length === 0) {
      return ave.toFixed(2);
    } else {
      enrolled.forEach((student) => {
        sum += student.GPA;
      });
      ave = (sum / enrolled.length).toFixed(2);
      return ave;
    }
  };

  render() {
    return (
      <div class="App">
        <Students studentData={studentData} addStudent={this.addStudent} />

        <Roster enrolled={this.state.enrolled} averageGPA={this.aveGPA()} />
        <TeacherEnrollment
          enrolled={this.state.enrolled}
          averageGPA={this.aveGPA()}
        />
      </div>
    );
  }
}

export default App;
