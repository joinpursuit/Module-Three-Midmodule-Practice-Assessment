import React from "react";
import studentData from "./data/studentData.js";
import Students from "./Students.js";
import "./App.css";
import Enrollment from "./Enrollment.js";
import TeacherForm from "./Teacher Form.js";

class App extends React.Component {
  constructor() {
    super();
  }

  render() {
    const { count } = this.props;
    return (
      <div>
        <h1>Build a Class</h1>
        <div class="App">
          <div className="col-1">
            <div className="Students">
              <Students data={studentData} />
            </div>
          </div>
          <div className="col-2">
            <div className="Enrollment">
              <Enrollment data={studentData} count={count} />
            </div>
            <div className="Teacher-form">
              <TeacherForm />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
