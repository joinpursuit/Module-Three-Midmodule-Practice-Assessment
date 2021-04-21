import React from "react";
import Roster from "./Components/Roster"
import TeacherEnrollment from "./Components/TeacherEnrollment";
import studentData from "./data/studentData"
import Students from "./Components/Students"
import "./App.css";

class App extends React.Component {

  state = { studentData: studentData, roster: [] }
  // studentData = {studentData}
  addToRoster = (studt) => {
    
    this.setState((prevState) => ({roster: [studt, ...prevState.roster]}))
  }
  render() {
    const { studentData } = this.state
    // console.log({studentData});
    // console.log(studentData[1].name)

    // console.log(this.state.roster)
    return (
      // console.log(students)
      <div className="app">
        <h1>Build A Class</h1>
        {/* <Students /> */}
        <Students students={studentData } addToRoster={this.addToRoster}/>
        <div className="columnTwo">
        <Roster roster={this.state.roster}/>
        <TeacherEnrollment className= "enrollment" roster={this.state.roster}/>
        </div>
      </div>
    );
  }
}

export default App;
