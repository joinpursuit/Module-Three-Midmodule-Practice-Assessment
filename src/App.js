import React from "react";
import StudentList from "./Components/StudentList"
import TeacherEnrollment from "./Components/TeacherEnrollment"
import Roster from './Components/Roster'


class App extends React.Component {
  state = {roster: []}

  addStudent = (student) => {
    this.setState((prevState) =>{
        return {roster: [student, ...prevState.roster]}
    })
  } 
  render() {
    const { roster } = this.state
    let averageGPA = 0;
    this.state.roster.forEach(student => averageGPA+= student.GPA)
    averageGPA /= roster.length;

    return (
      <div className="App">
        <StudentList addStudent={this.addStudent} />
        <TeacherEnrollment averageGPA={averageGPA || 0}  studentCount={roster.length}/>
        <Roster roster={this.state.roster} averageGPA={averageGPA || 0} />
      </div>
    );
  }
}

export default App;
