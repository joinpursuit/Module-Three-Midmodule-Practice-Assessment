import React from "react";
import studentData from "./data/studentData"
import Students from "./Components/Students"
import Roster from "./Components/Roster"
import TeacherEnrollment from "./Components/TeacherEnrollment"
import "./App.css"


class App extends React.Component {
state = {enrolled: [], averageGPA: 0}

addStudent = (name,GPA) => {
this.setState((prevState)=>({enrolled: [{name: name, GPA:GPA}, ...prevState.enrolled]}))
}

aveGPA = () => {
  let sum = 0;
  let ave = 0;
  // const { enrolled } = this.props;
  if (this.state.enrolled.length === 0) {
    return ave.toFixed(2);
  } else {
    this.state.enrolled.forEach((student) => {
      sum += student.GPA;
    });
    ave = (sum / this.state.enrolled.length).toFixed(2);
    return ave
    // console.log(ave)
  }
  // this.setState({averageGPA: ave})
};


  render() {
    // console.log(this.state.enrolled)
    return (
      <div class="App">
       
       
        <Students studentData={studentData} addStudent={this.addStudent} />
        
        <Roster enrolled={this.state.enrolled} averageGPA={this.aveGPA} />
        <TeacherEnrollment enrolled={this.state.enrolled} averageGPA={this.state.averageGPA}/>
      </div>
    );
  }
}

export default App;
