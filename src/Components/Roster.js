import React from 'react'
import "./../App.css"

 class Roster extends React.Component {
    render() {
        const { enrolled, averageGPA} =this.props
        return (
               <div className ="roster">
                   <h2>Enrolled</h2>
                   <ul className ="EnrolledList">
                       {enrolled.map((student, i)=>{
                           return(
                               <li>
                                   {student.name}: {student.GPA.toFixed(2)}
                               </li>
                           )
                       })}
                   </ul>
                   <h3> Total Student Count: {enrolled.length}</h3>
                   <h3>Average GPA: {averageGPA}</h3>
            </div>
        )
    }
}

export default Roster




