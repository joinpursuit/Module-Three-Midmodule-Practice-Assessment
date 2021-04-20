// import { render } from "@testing-library/react";
import React from "react";
import Profile from "./profile";
import "../styles/layout.css";
import Enrolled from "./Enrolled";
import EnrollmentForm from "./EnrollmentForm";
import studentData from "../data/studentData";

// 1. I can see sections with students,
// class enrollment, and enroll as teacher form.
// I can see a section with students laid out in a grid.
// Use the class name Students with css grid and grid-template-columns
// I can see a Roster section that has TotalStudentCount, and AverageGPA
// I can see a Teacher Enrollment section that has inputs and labels for
// Name, Subject, Email, Phone Number, Zip Code, and a button that says Teach Class
// Don't forget to create <label> elements for your inputs
let count = 0;
class Layout extends React.Component {
  state = { roster: [] };

  addToRoster = () => {
    const addStudent = {
      studentName: "",
      studentCount: count++,
      studentGPA: 0,
    };
    this.setState((prevState) => ({
      roster: [...prevState.roster, addStudent],
    }));
  };
  // pass studentData into profile and then map
  render() {
    const { roster } = this.state;
    return (
      <>
        <ul className="Students">
          <h1>Ms Cooper's Class</h1>
          {/* {studentData.map((profile) => { */}
          {/* return ( */}
          <Profile
            studentData={studentData}
            addToRoster={this.addToRoster} // pass as prop not invoking
            // name={profile.name}
            // age={profile.age}
            // image={profile.image}
            // bio={profile.bio}
            // gpa={profile.GPA}
            // key={profile.id}
          />
          {/* ); */}
          {/* })} */}
        </ul>
        <Enrolled roster={roster} />
        <EnrollmentForm />
      </>
    );
  }
}

export default Layout;
