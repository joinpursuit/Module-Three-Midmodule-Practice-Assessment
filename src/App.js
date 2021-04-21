import React from "react";
import "./index.css"
import Form from "./Components/Form"
import data from "./data/studentData";
import StudentList from "./Components/StudentList"
import Enrollment from "./Components/Enrollment"


class App extends React.Component {

  state = { enrolled: [] }



  addToClass = (name, gpa) => {
    this.setState((p)=> ({enrolled: [{name: name, gpa: gpa}, ...p.enrolled]}) )
    console.log(this.state.enrolled)
  }


  render() {
    return (
      <div className="App">
        <h1>Build a Class</h1>
        <StudentList studentData={data} addToClass={this.addToClass}/>
        <Enrollment students={this.state.enrolled} />
        <Form students={this.state.enrolled}/>
      </div>
    );
  }
}

export default App;
