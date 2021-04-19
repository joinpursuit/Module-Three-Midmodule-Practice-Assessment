import React from "react";
import Students from "./Students"
import Roster from "./Roster"





class App extends React.Component {
  state = { newStudents: []}

  addStudent = (student) => {
    this.setState((prevState) => ({
      newStudents: [...prevState.newStudents, student],
    }));
  };

  render() {
    return (
      <div class="App">
        
      <Students addStudent={this.addStudent}/>
      <Roster newStudents={this.state.newStudents}/>
      </div>
    );
  }
}

export default App;
