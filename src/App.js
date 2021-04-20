import React from "react";
import "./App.css"
import Students from "./Components/Students"
import studentData from "./data/studentData"
import Roster from "./Components/Roster"
import Enrollment from "./Components/Enrollment"


class App extends React.Component {
  constructor(){
    super()
    this.state = {
      enrolled: [] ,

    }
    this.data = studentData
    
  }

  enroll = (student) => {
    let enrolled = this.state.enrolled
    this.setState({enrolled: enrolled.concat(student)})
  }  

  render() {
   let enrolled = this.state.enrolled
   let average = enrolled.reduce((a,b) =>  a + b.GPA, 0) / this.state.enrolled.length
   let studentCount = enrolled.length
    return (
      <div className ="App">
      
        <div> 
        <h1>Build a Class</h1>
        <Students 
        students = {this.data}
        handleClick = {this.enroll}
        />
        </div>
        <div> 
        <Roster
        enrolled = {this.state.enrolled}
        average = {average || 0}
        studentCount = {studentCount}
        />
        <Enrollment 
        studentCount = {studentCount}
        average = {average || 0}
        />
        </div>
        
      </div>
    );
  }
}

export default App;
