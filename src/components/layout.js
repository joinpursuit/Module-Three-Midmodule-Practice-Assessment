// import { render } from "@testing-library/react";
import React from "react";
import Profile from "./profile";
import "../styles/layout.css";
import Enrolled from "./Enrolled";
import EnrollmentForm from "./EnrollmentForm";
import studentData from "../data/studentData";

class Layout extends React.Component {
  state = { roster: [], averageGPA: 0 };

  displayGPA = () => {
    let total = 0;
    this.state.roster.map((profile) => {
      total += profile.GPA
    })
    let average = total/this.state.roster.length ;
    this.setState({averageGPA: average})
  }

  addToRoster = (person) => {
  console.log(this.state.averageGPA)
    this.setState((prevState) => ({
      roster: [...prevState.roster, person ],
    }));
  };
  // pass studentData into profile and then map
  render() {
    const { roster, averageGPA } = this.state;
    return (
      <>
        <h1>Ms Cooper's Class</h1>
        <ul className="Students">
          <Profile
            studentData={studentData}
            addToRoster={this.addToRoster} // pass as prop not invoking
          />
        </ul>
        <Enrolled roster={roster} averageGPA={averageGPA}/>
        <EnrollmentForm roster={roster} averageGPA={averageGPA}/>
      </>
    );
  }
}

export default Layout;
