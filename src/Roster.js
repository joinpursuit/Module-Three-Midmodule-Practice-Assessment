import React from 'react'


const Roster = ({enrolled, averageGPA}) => {
    const rosterList = enrolled.map(wannabe => {
    return  (
        <li key={wannabe.id}>{wannabe.name}: {wannabe.GPA.toFixed(2)}</li>
    )
})


return (
    <div className="roster">
                <h3>Enrolled</h3>
            <ul className="EnrolledList" >
{rosterList}
            </ul>
            <h3>Total Student Count: {enrolled.length}</h3>
            <h3>Average GPA: {0 || averageGPA.toFixed(2)}</h3>
          
            </div>
)
}


export default Roster



