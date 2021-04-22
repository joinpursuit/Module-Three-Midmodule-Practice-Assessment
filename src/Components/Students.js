import React from "react";
import studentData from "../data/studentData";
import "./Students.css";


class Students extends React.Component {
// state = { name: "", GPA: ""}




  render() {
    // console.log(this.state)
    // console.log(studentInfo)
    const { enrollStudent } = this.props
    return (
      <div>
        <h1>Art {"&"} Social Justice</h1>
        <ul className="Students">
        {studentData.map((student) => {
          const { name, age, image, bio, GPA , id } = student
          return (
            <li className="StudentList" key={id}>
              <h3>{name}</h3>
              <p>Age: {age}</p>
              <img src={image} alt="student" />
              <p>Bio: {bio}</p>
              <p>GPA: {GPA.toFixed(2)}</p>
              <button onClick={() => enrollStudent({name, GPA})}>Add To Class</button> 
              {/* add diff func from parent */}
            </li>
          );
        })}
        </ul>
      </div>
    );
  }
}

export default Students;

