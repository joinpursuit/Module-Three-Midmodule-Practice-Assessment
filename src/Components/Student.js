import React from "react";

class Student extends React.Component {
  render() {

    const {addStudent, studentInfo} = this.props
    const { id, name, age, bio, GPA, image } = this.props.studentInfo;
    return (
      <section className="Students">
        <h4>{name}</h4>
        <div>Age: {age}</div>
        <img src={image} />
        <div>Bio: {bio}</div>
        <div>GPA: {GPA.toFixed(2) }</div>
        <button onClick={()=>addStudent(studentInfo)}>
          Add To Class
        </button>
      </section>
    );
  }
}

export default Student;
