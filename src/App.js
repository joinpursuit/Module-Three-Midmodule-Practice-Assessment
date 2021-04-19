import React from "react";
import "./index.css"
import Form from "./Components/Form"
import Students from "./Components/Students"
import data from "./data/studentData"
import Enrollment from "./Components/Enrollment"


class App extends React.Component {

  state = { enrolled: [] ,average: 0 }



  addToClass = (name, gpa) => {
    this.setState((p)=> ({enrolled: [{name: name, gpa: gpa}, ...p.enrolled]}) )
    console.log(this.state.enrolled)
    this.avg();
  }

  avg=()=>{
    
  }


  render() {
    return (
      <div className="App">
        <h1>Build a Class</h1>
        <Students data={data} addToClass={this.addToClass}/>
        <Enrollment students={this.state.enrolled} />
        <Form />
      </div>
    );
  }
}

export default App;
