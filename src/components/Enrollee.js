import React from 'react'

function Enrollee(props) {
    console.log("enrollee : ")
    const {students} = props
    console.log(students)
    
    let enrolleeCard = students.map(student =>{
        return (
            <li>
                {student.name}: {student.GPA.toFixed(2)}
            </li>
        )
    })
    console.log(enrolleeCard)
  
    // return (students.length !==0) ? {enrolleeCard} : null ;
    return {enrolleeCard}
      
}

export default Enrollee
