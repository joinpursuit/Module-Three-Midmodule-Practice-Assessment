import React from "react";
import studentData from "./data/studentData";
// import StudentCard from "./Components/StudentCard";
import StudentList from "./Components/StudentList";
import TeachClass from "./Components/TeachClass";
import EnrolledList from "./Components/EnrolledList";


class App extends React.Component {
  state = { studentInfo: [] }
  

  enrolledStudent = (student) => {
    this.setState((prevState) => ({studentInfo: [student, ...prevState.studentInfo]}))
    // {() => enrolledStudent({name, gpa})}
  }

  // gpaAverage =  () => {
  //   console.log(this.state.GPA)
  // }




  render() {
    const {studentInfo} = this.state
    let averageGPA = 0;
    studentInfo.forEach(student => averageGPA += student.student.GPA);
    averageGPA /= studentInfo.length;
    
    console.log(studentInfo);
    console.log(averageGPA);
    return (
      <div className="App">
        <EnrolledList studentInfo={studentInfo} averageGPA={averageGPA || 0} studentCount={studentInfo.length}/>
        <TeachClass averageGPA={averageGPA || 0} studentCount={studentInfo.length}/>
        <StudentList studentData={studentData} enrolledStudent={this.enrolledStudent}/> 
      </div>
    );
  }
}

export default App;

//< *will become a child of student list StudentCard pass in naem, age, bio, gpa/>
//map through arry
//<StudentCard name={student.name} age={student.age} src={student.image} bio={student.bio} gpa={student.gpa} />