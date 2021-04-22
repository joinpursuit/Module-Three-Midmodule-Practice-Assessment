import React from "react";

class Students extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    const { name, image, age, bio, gpa } = this.props;
    return (
      <li>
        <h3>{name}</h3>
        <p>Age: {age}</p>
        <img
          src={image}
          alt={name}
          width="150"
          height="200"
        ></img>
        <p>Bio: {bio}</p>
        <p>GPA: {gpa.toFixed(2)}</p>
        <button onClick={() => addStudent(student)}>Add To Class</button>
      </li>
    );
  }
}
export default Students;
