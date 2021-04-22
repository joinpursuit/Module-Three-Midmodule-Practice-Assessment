import React from "react";
// import studentData from "../data/studentData";
import "./studentCard.css"

const StudentCard = (props) => {
    const { student, enrolledStudent } = props;
    // const {enrolledStudent} = enrolledStudent;

    // sendData = () => {

    // }

    return (
        <div>
            <h3>{student.name}</h3>
            <p>Age: {student.age}</p>
            <img src={student.image} className="studentImage" alt="Profile pics"></img>
            <p>Bio: {student.bio}</p>
            <p>GPA: {student.GPA.toFixed(2)}</p>
            <button onClick={() => enrolledStudent({student})} >Add to Class</button>
        </div>
    )
}

export default StudentCard; 

//     "id": "36bb1ef5-b3fe-4646-ab48-97716812831d",
//       "name": "Rick Sanchez",
//       "age": 72,
//       "bio": "I am a super genius inventor. Nobody is better than me. I can't believe Jerry married my daughter",
//       "image": "https://rickandmortyapi.com/api/character/avatar/1.jpeg",
//       "GPA": 4.6


// export default class StudentCard extends Component {
//     state = { id, name, age, bio, image, gpa };

//     render() {
//         return (
//             <div>
//                 <h3>{name}</h3>
//             <p>{age}</p>
//             <img src={image}></img>
//             <p>{bio}</p>
//             <p>{gpa}</p>
//             <button></button>
//             </div>
//         )
//     }
// }
