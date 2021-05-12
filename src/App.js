// import React from "react";
// import studentData from './data/studentData'
// import  Student from './data/Students'

// //

// class App extends React.Component {
 
//     constructor(props) {
//       super(props);
//       this.state = {
//         enrolledStudents: [],
//       };
//     }
  
//     addStudent = (whatever) => {
//       console.log("adding student id " + whatever + " to the class");
//       this.setState = {
//         enrolledStudents : []
//       }
//     };
//   render() {
//     return (
//       <div className="App">
//         <div className="leftSide">
//           <h1>Build a Class</h1>
//      <Student studentData={studentData} addStudent={addStudent}/>
//         </div>
//         <div className="rightSide">
//     {/* <Enrollment />
//     <Teacher /> */}
//         </div>
//       </div>
//     );
//   }
// }

// export default App;


import React from "react";
import "./App.css"
import Students from "./data/Students"
import studentData from "./data/studentData"
import Roster from "./data/Roster"
import Enrollment from "./data/Enrollment"


class App extends React.Component {
  constructor(){
    super()
    this.state = {
      enrolled: [] ,

    }
    this.data = studentData
    
  }

  enroll = (student) => {
    let enrolled = this.state.enrolled
    this.setState({enrolled: enrolled.concat(student)})
  }  

  render() {
   let enrolled = this.state.enrolled
   let average = enrolled.reduce((a,b) =>  a + b.GPA, 0) / this.state.enrolled.length
   let studentCount = enrolled.length
    return (
      <div className ="App">
      
        <div> 
        <h1>Build a Class</h1>
        <Students 
        students = {this.data}
        handleClick = {this.enroll}
        />
        </div>
        <div> 
        <Roster
        enrolled = {this.state.enrolled}
        average = {average || 0}
        studentCount = {studentCount}
        />
        <Enrollment 
        studentCount = {studentCount}
        average = {average || 0}
        />
        </div>
        
      </div>
    );
  }
}

export default App;
