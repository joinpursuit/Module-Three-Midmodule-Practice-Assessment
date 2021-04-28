import React from "react";
import StudentList from "./Components/StudentList.js"
import TeacherEnrollment from "./Components/TeacherEnrollment.js"
import Roster from "./Components/Roster"
import "./App.css"

class App extends React.Component {
  state = {roster: []}

  addStudent = (student) => {
    this.setState ((prevState) => {
      return {roster: [student, ...prevState.roster]}
    })
  }

  calculateAverage = () => {
    const {roster} = this.state;
    let averageGPA = 0;
    roster.forEach(student => averageGPA += student.GPA)
    averageGPA /= roster.length;
    return averageGPA
  }

  render() {
    const {roster} = this.state;
    const averageGPA = this.calculateAverage();
    
    //Another method:
    //const averageGPA = roster.reduce((sum,student) => sum + student.GPA, 0) /roster.lenght

    return (
      <div className="App">
        <div>
          <StudentList addStudent={this.addStudent}/>
        </div>
        <div className="rightSide">
          <Roster roster={this.state.roster} averageGPA={averageGPA || 0}/>
          <TeacherEnrollment averageGPA={averageGPA || 0} studentCount={roster.length}/>
        </div>
      </div>
    );
  }
}

export default App;





// import React from "react";
// import "./App.css"
// import Students from "./Components/Students.js"
// import studentData from "./data/studentData"
// import TeacherEnrollment from "./Components/TeacherEnrollment.js"
// import Roster from "./Components/Roster.js"

// class App extends React.Component {
//   constructor() {
//     super ();

//     this.state = {
//       enrolledStudents: [],
//       avg: "",
//     }
//   }
//   studentAvg = (id) => {
//     const {students} = this.props
//     const enrolledStudent = students.map((student)=>{
//       if(student.id === id) {
//         this.state.enrolledStudents.push(`${student.name}: ${student.GPA}`)
//       }
//     })
//     this.setState({
//       enrolledStudents: enrolledStudent
//     })
//   }
  
//   render() {

//     return (
//       <div className="app">
//         <div className="leftside">
//           <Students studentData ={studentData}
//           averageOfStudents={this.studentAvg}/>
//         </div>
//         <div className="rightside">
//           <Roster studentData ={studentData} />
//           <TeacherEnrollment />
//         </div>
//       </div>
//     );
//   }
// }

// export default App;
