import React from "react";
import BuildAClass from "./Components/BuildAClass";
import Enrolled from "./Components/Enrolled";
import Form from "./Components/Form";

class App extends React.Component {
  state = { roster: [] };

  addStudent = (student) => {
    this.setState((prevState) => {
      return { roster: [student, prevState.roster] };
    });
  };

  calculateAverage = () => {
    const { roster } = this.state;
    let averageGPA = 0;
    roster.forEach((student) => (averageGPA += student.gpa));
    averageGPA /= roster.length;
    return averageGPA || 0;
  };

  render() {
    const { roster } = this.state;
    const averageGPA = this.calculateAverage();
    // let averageGPA = 0;
    // roster.forEach((student) => (averageGPA += student.gpa));
    // averageGPA /= roster.length;

    return (
      <div class="App">
        <BuildAClass addStudent={this.addStudent} />
        <Enrolled roster={this.state.roster} averageGPA={averageGPA} />
        <Form averageGPA={averageGPA} studentCount={roster.length} />
      </div>
    );
  }
}

export default App;
