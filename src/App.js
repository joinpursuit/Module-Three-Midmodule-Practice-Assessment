import React from "react";
import Classlist from './Components/Classlist'
import './App.css'
import Enrolled from './Components/Enrolled'
import Students from './Components/Students'
import studentData from "./data/studentData";




class App extends React.Component {
  constructor() {
    super()
    this.state = {
      chosenStudents: [],
      averageGPA: []
    }

    this.enrollStudent = this.enrollStudent.bind(this) //calls state variables outside constructor and lets munipulate state from another component
  }
  enrollStudent = (student, GPA) => {
    this.setState({
      chosenStudents: [...this.state.chosenStudents, student],
      averageGPA: [...this.state.averageGPA, GPA]
    })

  }
  render() {

    const studentList = studentData
    const classNumber = studentList.length
    const chosenOnes = this.state.chosenStudents

    const average = chosenStudent.reduce((a,b) =>  a + b.GPA, 0) / chosenStudent.length

    return (
      <div className ="App">
        <div> 
          <h1>Build a Class</h1>
          <Students className='students' studentData={this.studentData} handleClick={this.enrollStudent}/>
        </div>
        <div> 
          <Classlist students={chosenOnes} GPA={average}/>
          <Enrolled students={chosenOnes} GPA={average} />
        </div>
      </div>
    );  
  }
}

export default App;
