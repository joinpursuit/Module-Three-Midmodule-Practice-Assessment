// class App extends React.Component {
// state = {enrolled: [], averageGPA: 0}

// addStudent = (name,GPA) => {
// this.setState((prevState)=>({enrolled: [{name: name, GPA:GPA}, ...prevState.enrolled]}))
// }

// aveGPA = ()=>{
//   // const { enrolled } = this.props
//   let sum=0
//   let ave=0
//   this.state.enrolled.forEach((student)=>{
//        sum += student.GPA
//        ave=sum/this.state.enrolled.length
//   })
//   this.setState({averageGPA: ave})
//   console.log(ave)
  
// }

//   render() {
//     // console.log(this.state.enrolled)
//     return (
//       <div class="App">
       
       
//         <Students studentData={studentData} addStudent={this.addStudent} />
        
//         <Roster enrolled={this.state.enrolled} aveGPA={this.state.averageGPA} />
//         {/* <TeacherEnrollment /> */}
//       </div>
//     );
//   }
// }

// export default App;


import React from "react";
import StudentList from "./Components/StudentList"
import Roster from "./Components/Roster"
import TeacherEnrollment from "./Components/TeacherEnrollment"


class App extends React.Component {
  state = {roster: []}

  addStudent = (student) => {
    this.setState((prevState) => {
      return {roster: [...prevState.roster, student]}
    })
  }

  render() {
    const {roster} = this.state
    let averageGPA = 0;
    roster.forEach(student => averageGPA += student.GPA)
      averageGPA /= roster.length;
  
    return (
      <div>
        <StudentList addStudent={this.addStudent}/>
        <TeacherEnrollment averageGPA={averageGPA || 0} studentCount={roster.length}/>
        <Roster roster={roster} averageGPA={averageGPA || 0} />
      </div>
    )
  }
}

export default App;