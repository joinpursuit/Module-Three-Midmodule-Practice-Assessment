import React from "react";
import studentData from "./data/studentData.js";
//import Students from "./components/Students.js"
import Roster from "./components/Roster.js";
// import TeacherEnrollment from "./components/TeacherEnrollment.js";

const students = studentData;

class App extends React.Component {
  render() {
    return (
      <div className="App">
        {/* <EnrolledList students={students}/> */}
        {/* <Students students={students}/> */}
        <Roster students={students} />
        {/* <TeacherEnrollment/> */}
      </div>
    );
  }
}

export default App;
