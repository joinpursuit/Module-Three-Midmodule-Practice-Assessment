import React from "react";
import studentData from "./data/studentData";
// import StudentCard from "./Components/StudentCard";
import StudentList from "./Components/StudentList";
import TeachClass from "./Components/TeachClass";
import EnrolledList from "./Components/EnrolledList";


class App extends React.Component {
  state = { studentInfo: [] }

  enrolledStudent = (enrollee) => {
    this.setState((prevState) => ({studentInfo: [enrollee, ...prevState.studentInfo]}))
  }


  render() {
    return (
      <div class="App">
        <EnrolledList />
        <TeachClass />
        <StudentList studentData={studentData} enrolledStudent={this.enrolledStudent}/> 
      </div>
    );
  }
}

export default App;

//< *will become a child of student list StudentCard pass in naem, age, bio, gpa/>
//map through arry
{/* <StudentCard name={student.name} age={student.age} src={student.image} bio={student.bio} gpa={student.gpa} /> */}