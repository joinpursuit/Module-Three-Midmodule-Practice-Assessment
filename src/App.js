import React from "react";
import StudentList from "./components/StudentList";
import StudentEnrollment from "./components/StudentEnrollment";
import TeacherEnrollment from "./components/TeacherEnrollment";

import "./App.css";



class App extends React.Component {
  render() {

    return (
      <div class="App">
        <div className="left">
          <h1>Build a Class</h1>
          <StudentList />
        </div>
        <div className="right">
          <StudentEnrollment />
          <TeacherEnrollment />
        </div>
      </div>
    );
  }
}

export default App;
