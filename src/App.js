import React from "react";
import studentData from "./data/studentData";
import StudentList from "./Components/StudentList";
import TeachClass from "./Components/TeachClass";
import EnrolledList from "./Components/EnrolledList";

class App extends React.Component {
  state = { studentInfo: [] };

  enrolledStudent = (student) => {
    this.setState((prevState) => ({
      studentInfo: [student, ...prevState.studentInfo],
    }));
  };

  render() {
    const { studentInfo } = this.state;
    let averageGPA = 0;
    studentInfo.forEach((student) => (averageGPA += student.student.GPA));
    averageGPA /= studentInfo.length;

    console.log(studentInfo);
    console.log(averageGPA);
    return (
      <div className="App">
        <EnrolledList
          studentInfo={studentInfo}
          averageGPA={averageGPA || 0}
          studentCount={studentInfo.length}
        />
        <TeachClass
          averageGPA={averageGPA || 0}
          studentCount={studentInfo.length}
        />
        <StudentList
          studentData={studentData}
          enrolledStudent={this.enrolledStudent}
        />
      </div>
    );
  }
}

export default App;
