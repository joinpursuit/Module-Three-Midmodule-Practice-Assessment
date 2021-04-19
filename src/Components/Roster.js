import React from "react";
import "./../App.css"

class Roster extends React.Component {
  //   state = { countStudents: 0, averageGPA: this.props.averageGPA }

  aveGPA = () => {
    let sum = 0;
    let ave = 0;
    const { enrolled } = this.props;
    if (enrolled.length === 0) {
      return ave.toFixed(2);
    } else {
      enrolled.forEach((student) => {
        sum += student.GPA;
      });
      ave = (sum / enrolled.length).toFixed(2);
      return ave;
      // console.log(ave)
    }
  };
  render() {
    const { enrolled } = this.props;
    return (
      <div className="roster">
        <h2>Enrolled</h2>
        <ul className="EnrolledList">
          {enrolled.map((student, i) => {
            return (
              <li>
                {student.name}: {student.GPA.toFixed(2)}
              </li>
            );
          })}
        </ul>
        <h3>Total Student Count: {enrolled.length}</h3>
        <h3>Average GPA: {this.aveGPA()}</h3>
      </div>
    );
  }
}

export default Roster;
