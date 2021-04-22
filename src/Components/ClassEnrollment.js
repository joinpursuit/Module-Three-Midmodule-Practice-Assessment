import React from "react";

class ClassEnrollment extends React.Component {
  // constructor(props) {
  //     super(props)
  // }

  render() {
    //   console.log(this.props)
    const { studentInfo, avgGPA } = this.props;
    return (
      <div>
        <h2 key={studentInfo.id}>Enrolled</h2>
        <ul className="EnrolledList"></ul>
        {studentInfo.map((student) => {
          const { name, GPA, id } = student;

          //   debugger
          return (
            <li key={id}>
              {name}: {GPA.toFixed(2)}
            </li>
          );
        })}
        <h3>Total Student Count: {studentInfo.length}</h3>
        <h3>Average GPA: {avgGPA.toFixed(2)}</h3>
      </div>
    );
  }
}

export default ClassEnrollment;
