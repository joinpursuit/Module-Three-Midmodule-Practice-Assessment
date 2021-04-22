import React, { Component } from "react";
import Student from "./Student.js";

export class Students extends Component {
  render() {
    const { data } = this.props;
    let studentArr = data.map((elem) => {
      return (
        <div>
          <Student
            name={elem.name}
            age={elem.age}
            img={elem.image}
            bio={elem.bio}
            gpa={elem.GPA.toFixed(2)}
          />
        </div>
      );
    });
    return studentArr;
  }
}

export default Students;
