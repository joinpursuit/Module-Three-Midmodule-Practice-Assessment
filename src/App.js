import React from "react";
import Students from "./Components/Students";
import TeacherEnrollment from "./Components/TeacherEnrollment";
import Roster from "./Components/Roster";

// the reducer function was created in roster first then moved here to update the state and so that the statecould be shared and lifted for both roster and teacher enrollment because they are siblings and state needed to be passed from parent App.js to childrem
// reduce takes in an accumulator, and the currentValue which is student here
const reducer = (accumulator, student) => {
  // we return the accumulator + to the student.GPA in the array
  return accumulator + student.GPA;
};
// this function was also created in roster and brought to the parent App to lifet state so that the state can be passed from parent to children.
// in getAverageGPA state(roster) is passed in so that it can be updated this fucntion gets the averageGPA TO calculate.
const getAverageGPA = (roster) => {
  console.log(roster);
  // if roster.length===0 then return 0 prints 0 next to GPA on the screen so that NAN wouldnt be printed
  if (roster.length === 0) return 0;
  // this line of code uses reduce to get the average GPA by calling thr fucntion setting current value to 0 and divding by the lenght of tht student names in the roster to get the average.
  return roster.reduce(reducer, 0) / roster.length;
};
class App extends React.Component {
  // declare state
  // method addToRoster is linked to Add to class button to update roster on screen.
  // averageGPA and numStudents are created here to update state and this is printed in the alert linked to the Teach class button
  state = { roster: [], averageGPA: 0, numStudent: 0 };
  // student is passed in to update state in the method addToRoster
  addToRoster = (student) => {
    // to create the new array copy the old arrany(...this.state.roster, and then add student on the end to create the new roster)
    this.setState({
      roster: [...this.state.roster, student],
      // every time we add a student in the addToRoster function we are incresing the count on line 15. To calculate the count in the alert
      numStudent: this.state.numStudent + 1,
      averageGPA: getAverageGPA([...this.state.roster, student]),
    });
    // lines 21 - 24 updates state in roster which is added to eachtime we click aDD TO CLASS.This calculates the average GPA
  };
  render() {
    return (
      <div className="App">
        <Students addToRoster={this.addToRoster} />
        <TeacherEnrollment
          numStudent={this.state.numStudent}
          averageGPA={this.state.averageGPA}
        />
        <Roster
          roster={this.state.roster}
          numStudent={this.state.numStudent}
          averageGPA={this.state.averageGPA}
        />
      </div>
    );
  }
}

export default App;
