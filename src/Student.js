import React, { Component } from "react";
import App from "./App.js";

export class Student extends Component {
  constructor() {
    super();
    this.state = {
      Name: "",
      GPA: "",
      Count: 0,
    };
  }

  enroll = () => {
    const { name, gpa } = this.props;
    this.setState(
      {
        Name: name,
        GPA: gpa,
        Count: this.state.Count + 1,
      },
      () => {
        <App count={this.state.Count} />;
      }
    );
  };

  render() {
    const { name, age, img, bio, gpa } = this.props;
    return (
      <div className="Student">
        <h3>{name}</h3>
        <p>{age}</p>
        <img src={img} alt="" />
        <p>Bio: {bio}</p>
        <p>GPA: {gpa}</p>
        <button onClick={this.enroll} type="submit">
          Add To Class
        </button>
      </div>
    );
  }
}

export default Student;
