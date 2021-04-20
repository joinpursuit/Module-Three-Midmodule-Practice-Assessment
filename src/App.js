import React from "react";
import studentData from "./data/studentData"
import Students from "./components/Students"
import Roster from "./components/Roster"
import TeacherEnrollment from "./components/TeacherEnrollment"


class App extends React.Component {
  render() {
    return (
      <div class="App">
        <div class="BuildClass"> 
          <h1 >Build a Class</h1>
          <Students class="Students" studentData = {studentData}/>
        </div>
        <div className="ClassStats">
          <div>
            <Roster/>
            <TeacherEnrollment/>
          </div>
        </div>
      </div>
    );
  }
}

export default App;


//components
//students
  //studentcard
    //student name
    //student age
    //student bio
    //add to class button
      //information calculated to populate the enrolled section 
//Enrolled
  //count of total student 
  //average GPA
// Teacher Enrollment Form
  //5 input(name,subject,email,zipcode,phonenumber)
  //submit button (Teach Class)
    // onSubmit 
      //alert message with average gpa and total number of students
        //infor from enrolled?
      // alert message "data is not valid"