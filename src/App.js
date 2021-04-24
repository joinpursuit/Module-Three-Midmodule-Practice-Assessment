import React from "react";
import studentData from "./data/studentData";
import Students from "./components/Students";
import AddStudent from "./components/AddStudent";
import TeacherEnrolment from "./components/TeacherEnrollment";

class App extends React.Component {
  state = { data: [] };
  // state = {data: [], averageGPA: 0}

  addStudent = (student) => {
    this.setState((prevState) => {
      return { data: [student, ...prevState.data] };
    });
  };
  calculateAverage = () => {
    const { data } = this.state;
    // const { data, averageGPA } = this.state;
    let averageGPA = 0;
    data.forEach((student) => (averageGPA += student.GPA));
    averageGPA /= data.length;
    return averageGPA || 0;
  };

  render() {
    const { data } = this.state;
    const averageGPA  = this.calculateAverage();
    return (
      <div className="App">
        <Students studentData={studentData} addStudent={this.addStudent} />
        <AddStudent data={data} averageGPA={averageGPA} />
        <TeacherEnrolment averageGPA={averageGPA} studentCount={data.length} />
      </div>
    );
  }
}

export default App;
