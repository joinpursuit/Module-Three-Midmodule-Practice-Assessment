// import { Component } from "react";


const EnrolledList = ({ studentInfo }) => {
    
    
    //TRACK THE GPA FROM THE ORIGINAL PROPS FROM STUDENTDATA!!! THERE IS AN ISSUE WITH THE PROPS & THE DECONSTRUCTING!! THA LOGIC IS WORKING, BUT THERE IS A SYNTAX ERROR SOMEWHERE WITH THE PROJECT!!!
    
        return(
            <div>
                {/* {studentInfo.map((enrollee) => {
                    let gpaTotal = 0;
                    gpaTotal += enrollee.gpa;    
                    let averageGPA = gpaTotal / studentInfo.length;
                    console.log(averageGPA)
                    return (<div>Average gpa: {averageGPA} </div>);
                })} */}
                <h2>Enrolled </h2>
                <ul className="enrolledList">
                    {studentInfo.map((student) => {
                        return <li key={student.student.id}>{student.student.name}: {student.student.GPA.toFixed(2)} </li>
                    })}
                {/* {studentInfo.map((enrollee) => {
                    const listing = document.createElement("li")
                    listing.textContent = enrollee.name
                    return listing
                })}  */}
                </ul>
                <h2>Total Student Count: {studentInfo.length}</h2>
                {/* <h2>Average GPA: {averageGPA}</h2> */}
            </div>
        )
    
}

export default EnrolledList;