import React from "react";
import Students from "./Components/Students";
import "./App.css";
import ClassEnrollment from "./Components/ClassEnrollment";
import TeacherEnrollment from "./Components/TeacherEnrollment";

class App extends React.Component {
  state = { studentInfo: [] };

  enrollStudent = (enrolledStudent) => {
    this.setState((prevState) => {
      return {
        studentInfo: [...prevState.studentInfo, enrolledStudent],
      };
    });
  };


  getAvgGPA = () => {
    const { studentInfo } = this.state
    let sum = 0;
    for (let student of studentInfo) {
      // debugger
      sum += student.GPA
    }
    return sum / studentInfo.length;
  };

  render() {
  //  this.getAvgGPA()

    return (
      <div className="App">
        <Students enrollStudent={this.enrollStudent} />
        <div className="RightSide">
        <ClassEnrollment studentInfo={this.state.studentInfo} avgGPA={this.getAvgGPA() || 0} />
        <TeacherEnrollment studentInfo={this.state.studentInfo} avgGPA={this.getAvgGPA() || 0}/>
        </div>
      </div>
    );
  }
}

export default App;
