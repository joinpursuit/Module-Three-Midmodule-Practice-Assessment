import React from "react";
import "./App.css";
import Form from "./Components/Form";
import Roster from "./Components/Roster";
import StudentList from "./Components/StudentList";
import studentData from "./data/studentData";

class App extends React.Component {
  constructor() {
    super();

    this.state = {
      enrolled: [],
    };
    this.data = studentData;
  }

  enroll = (student) => {
    let enrolled = this.state.enrolled;
    this.setState({ enrolled: enrolled.concat(student) });
  };

  render() {
    const { enrolled } = this.state;
    let average = enrolled.reduce((a, b) => a + b.GPA, 0) / enrolled.length;

    return (
      <div className="App">
        <div>
          <h1>Build a Class</h1>
          <StudentList students={this.data} enrollRickMorty={this.enroll} />
        </div>
        <div className="RosterSide">
          <Roster enrolled={this.state.enrolled} average={average || 0} />
          <Form
            enrolledCount={this.state.enrolled.length}
            average={average || 0}
          />
        </div>
      </div>
    );
  }
}

export default App;
