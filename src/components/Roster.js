import React from "react"
import Students from "./Students"
import "./styles/Roster.css"


let count = 1; 
class Roster extends React.Component {
    state = { roster: []}

    addStudent = (name,GPA) => {
        // console.log(e.target)
        const newStudent = {stuCount:count++, stuName: name, stuGPA: GPA}
        this.setState((prevState) => ({roster: [newStudent,...prevState.roster]}))
    }

  
 


    render() {
    
        const { roster } = this.state; 
        return(
            <div className="mainRosterDiv">
                  <Students roster={roster} addStudent={this.addStudent}/>
            <section className="rightRoster">
                <h1>Roster</h1>
                <ul className="EnrolledList">
                    Student Count: {count}
          {roster.map((student) => (
            <li
              key={student.id}
            >
       {student.stuName}: {student.stuGPA}
           
            </li>
          ))}
        </ul>       
          </section>
        
          </div>

        )
    }
}
    export default Roster