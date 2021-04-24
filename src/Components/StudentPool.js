import React from "react";
import Student from "./Student";

class StudentPool extends React.Component {
  render() {
    const { studentData, addStudent } = this.props;

    return (
      <section >
        {studentData.map((student) => {
          return <Student studentInfo={student} addStudent={addStudent} />;
        })}
      </section>
    );
  }
}

export default StudentPool;
