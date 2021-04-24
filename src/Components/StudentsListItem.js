// const Students = ({ studentData, addStudent }) => {
//   return (
//     <div>
//        <h1>Build a Class</h1>

//     <ul className="EnrolledList">  {studentData.map((student) => {
//         return (
//           <Student
//             name={student.name}
//             age={student.age}
//             image={student.image}
//             GPA={student.GPA}
//             bio={student.bio}
//             key={student.id}
//             addStudent={addStudent}
//           />
//         )
//       })}
//       </ul>
//     </div>
//   );
// };

import React from "react";


const StudentListItem = ({student, addStudent}) => {
  const {name, age, bio, image, GPA} = student
  return (
    <li>
      <h3>{name}</h3>
      <p>{age}</p> 
      <img src={image} alt="Pic"/>
      <p>Bio: {bio}</p>
      <p>GPA: {GPA.toFixed(2)}</p>
      <button onClick={()=>addStudent(student)}>Add to Class</button>
    </li>
  )
}

export default StudentListItem;
