import React from "react";
import StudentList from "./Components/StudentList";
import TeacherEnrollment from "./Components/TeacherEnrollment";
import Roster from "./Components/Roster";

class App extends React.Component {
  state = { roster: [] };

  addStudent = (student) => {
    this.setState((prevState) => {
      return { roster: [student, ...prevState.roster] };
    });
  };

  calculateAverage = () => {
    const { roster } = this.state;
    let averageGPA = 0;
    roster.forEach((student) => (averageGPA += student.GPA));
    averageGPA /= roster.length;
    return averageGPA || 0;
  };

  render() {
    const { roster } = this.state;
    const averageGPA = this.calculateAverage();

    // const averageGPA = roster.reduce((sum, student) => sum + student.GPA, 0) / roster.length

    return (
      <div className="App">
        <StudentList addStudent={this.addStudent} />
        <TeacherEnrollment
          averageGPA={averageGPA}
          studentCount={roster.length}
        />
        <Roster roster={this.state.roster} averageGPA={averageGPA} />
      </div>
    );
  }
}

export default App;
