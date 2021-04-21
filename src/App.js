import React from "react";

import "./App.css"
import Students from "./Components/Students.js"
import studentData from "./data/studentData"
import TeacherEnrollment from "./Components/TeacherEnrollment.js"

class App extends React.Component {
  // constructor() {
  //   super ();

  //   this.state = {
  //     studentData : studentData
  //   }
  // }
  render() {
    return (
      <div className="app">
        <Students studentData ={studentData}/>
        <TeacherEnrollment />
      </div>
    );
  }
}

export default App;
