import React from "react"
import Students from "./Students"
import TeacherEnrollment from "./TeacherEnrollment.js";
import "./styles/Roster.css"
import Average from "./Average"


let count = 0; 


class Roster extends React.Component {
    state = { roster: []}

    addStudent = (name,GPA) => {
        // console.log(e.target)
        const newStudent = {stuCount:count++, stuName: name, stuGPA: GPA, gpaSum:0}
        this.setState((prevState) => ({roster: [newStudent,...prevState.roster]}))
        console.log(this.gpaSum)
      }
      
   
  
 


    render() {
    let sumOf = 0
 
        const { roster } = this.state; 
        return(
            <div className="mainRosterDiv">
                  <Students roster={roster} addStudent={this.addStudent}/>
            <section className="rightRoster">
                <h1>Enrolled</h1>
                <ul className="EnrolledList">
                 
          {roster.map((student) => (
            <li
              key={student.id}   total={sumOf += student.stuGPA}
            >
              {/* total={sumOf += student.stuGPA} average={sumOf += student.stuGPA} */}
       {student.stuName}: {student.stuGPA.toFixed(2)}
    
            </li>
          ))}
        </ul>   
<br/>
<div>
  {sumOf}
  <Average average={sumOf/(count)} totalClass={count}/>
</div>
{/* <p id="total">Total Student Count: {count-1}</p> */}
{/* <p id="sumGPA">Average GPA: {sumOf/(count-1)}</p> */}
        <TeacherEnrollment roster={roster} averageGPA={sumOf/(count)} allClass={count}/>    
          </section>
      
 
          </div>

        )
    }
}
    export default Roster