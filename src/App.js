import React from "react";
import TeacherEnrollment from "./Components/TeacherEnrollment"
import AddToClass from "./Components/AddToClass"
import EnrolledList from "./Components/EnrolledList"
import studentData from "./data/studentData"
import StudentID from "./Components/StudentID";

class App extends React.Component {
 


  render() {
    return (
        <>
        <AddToClass studentData={studentData}/>
        <EnrolledList enrolledStudents={studentData}/>
        <StudentID />
        </>
    );
  }
}

export default App;
