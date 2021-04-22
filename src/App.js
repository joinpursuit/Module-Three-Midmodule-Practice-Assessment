import React from "react";
import "./App.css";
import studentData from "./data/studentData";
import TeacherForm from "./TeacherForm";
import Roster from "./Roster";
import StudentList from "./StudentList"

class App extends React.Component {
  constructor() {
    super();
    this.state = {
     
      enrolled: [],
     
    }; 
    
    this.studentList = studentData
  }

  addToList = (student) => {
    // this.setState((prevState) => ({enrolled: [student, ...prevState.enrolled]}))
    this.setState({enrolled: [...this.state.enrolled, student]})

  };


  averageGPA = () => {
    console.log("average gpa function")
  }
  
  render() {
    let average = this.state.enrolled.reduce((a,b) =>  a + b.GPA, 0) / this.state.enrolled.length
    // let average = 3
    // const enrolled = this.state;
    return (
      <div class="App">
        <StudentList 
        listOfstudents={this.studentList} 
        addToList={this.addToList} 
        // enrolled={enrolled}
        />
        {/* <Student addToList={this.addToList} /> */}
        <Roster enrolled={this.state.enrolled} averageGPA={average}/>
        <TeacherForm enrolled={this.state.enrolled} averageGPA={average} count={this.state.enrolled.length}/>
      </div>
    );
  }
}

export default App;
