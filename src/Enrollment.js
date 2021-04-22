import React, { Component } from "react";
import Student from "./Student.js";

export class Enrollment extends Component {
  render() {
    const { data, count, avg, name } = this.props;
    let num = 0;
    data.map((elem) => {
      return num++;
    });
    let sum = 0;
    data.map((elem) => {
      return (sum += elem.GPA);
    });
    return (
      <div>
        <h2>Enrolled</h2>
        <ul className="EnrolledList"></ul>
        <h3>Total Student Count: {count}</h3>
        <h3>Average GPA: </h3>
      </div>
    );
  }
}

export default Enrollment;
