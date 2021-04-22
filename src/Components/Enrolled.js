import React from "react";

class Enrolled extends React.Component {
  render() {
    return (
      <section>
        <h2>Enrolled</h2>
        <ul className="EnrolledList">
          {roster.map((student) => {
            const { name, gpa, id } = student;
            return (
              <li key={id}>
                {name}: {gpa.tofixed(2)}:
              </li>
            );
          })}
        </ul>
        <h3>Total Student Count: {roster.length}</h3>
        <h3>Average GPA: {averageGPA.tofixed(2)}</h3>
      </section>
    );
  }
}

export default Enrolled;
