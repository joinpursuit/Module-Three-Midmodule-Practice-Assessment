import React from "react";

import "./App.css"
import Students from "./Components/Students.js"
import studentData from "./data/studentData"
import TeacherEnrollment from "./Components/TeacherEnrollment.js"
import Roster from "./Components/Roster.js"

class App extends React.Component {
  // constructor() {
  //   super ();

  //   this.state = {
  //     studentData : studentData
  //   }
  // }
  studentAvg = () => {
    
  }
  
  render() {

    return (
      <div className="app">
        <div className="leftside">
          <Students studentData ={studentData}/>
        </div>
        <div className="rightside">
          <Roster />
          <TeacherEnrollment />
        </div>
      </div>
    );
  }
}

export default App;
