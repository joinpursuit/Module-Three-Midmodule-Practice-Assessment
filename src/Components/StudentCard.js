import React from "react";

import "./studentCard.css";

const StudentCard = (props) => {
  const { student, enrolledStudent } = props;

  return (
    <div>
      <h3>{student.name}</h3>
      <p>Age: {student.age}</p>
      <img
        src={student.image}
        className="studentImage"
        alt="Profile pics"
      ></img>
      <p>Bio: {student.bio}</p>
      <p>GPA: {student.GPA.toFixed(2)}</p>
      <button onClick={() => enrolledStudent({ student })}>Add To Class</button>
    </div>
  );
};

export default StudentCard;
