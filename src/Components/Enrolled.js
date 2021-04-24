import React from "react";

class Enrolled extends React.Component {
  render() {
    const { addedStudents, averageGPA } = this.props;

    return (
      <section className="EnrolledList">
        {addedStudents.map((student) => {
          return (
            <li>
              {student.name}: {student.GPA.toFixed(2)}
            </li>
          );
        })}
        <h3>Total Student Count: {addedStudents.length}</h3>
        <h3>Average GPA: {averageGPA.toFixed(2)}</h3>
        {/* the line above and when i pass average gpa on app.js should be interchangeable; will ask about this later */}
      </section>
    );
  }
}

export default Enrolled;
