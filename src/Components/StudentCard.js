import React from "react";

// StudnetCrad has student and addtoroster passed in and the props of the array are destructured on the other line for each student
const StudentCard = ({ student, addToRoster }) => {
  const { name, age, GPA, bio, image } = student;
  return (
    <div>
      <h2>{name}</h2>
      <h3>Age:{age}</h3>
      <img src={image} alt="student photo" />
      <p>bio:{bio}</p>
      <p>GPA:{GPA}</p>
      {/* the onclikc here calls an anounoumous function that passes in the event and fires the function addToRoster that updates the state and adds a student each time the buttonis clicked.  */}
      <button onClick={() => addToRoster(student)}>Add To Class</button>
    </div>
  );
};
export default StudentCard;
