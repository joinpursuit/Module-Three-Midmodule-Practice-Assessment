import React from "react";
const Roster = ({roster}) => {
    const rosterList = roster.map(studt =>{
        return (<li key={studt.id}>{studt.name}: {studt.GPA.toFixed(2)}</li>    
        )
    })
    let total = 0
    roster.forEach(studt => {
        total += studt.GPA
    })
    return( 
<div className="roster">
<h2>
    Enrolled
</h2>
    <ul className="EnrolledList" >
        {rosterList}
    </ul>
    <h3>Total Student Count: {roster.length}</h3>
    <h3>Average GPA: {(total/roster.length).toFixed(2) || 0}</h3>
</div>
    )
}
export default Roster;