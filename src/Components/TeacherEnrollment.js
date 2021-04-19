import React from "react";
import "./Students.css";

class TeacherEnrollment extends React.Component {
  state = { name: "", subject: "", email: "", zip: "", phone: "" };

  handleChange = (e) => {
    const { name, value } = e.target;
    this.setState({ [name]: value });
  };

  handleSubmit = (e) => {
    e.preventDefault();
    const { enrolled, averageGPA } = this.props;
    if (
      this.state.name.length === 0 ||
      this.state.subject.length === 0 ||
      this.state.email.length === 0
    ) {
      alert("Input is invalid");
    } else if (this.state.phone.length < 10) {
      alert("Phone number is not valid");
    } else if (this.state.zip.length < 5) {
      alert("Zip code is not valid");
    } else {
      alert(
        `You are now the teacher. \nYou have ${enrolled.length} students. \nThe average GPA is ${averageGPA}`
      );
    }
  };

  render() {
    const { name, subject, email, zip, phone } = this.state;
    console.log(this.state);
    const { enrolled, averageGPA } = this.props;
    console.log(this.props);
    return (
      <div>
        <h2>Teacher Enrollment</h2>
        <form onSubmit={this.handleSubmit} className="teacherEnrollment">
          <label>
            Name
            <input
              type="text"
              name="name"
              value={name}
              onChange={this.handleChange}
            ></input>
          </label>
          <label>
            Subject
            <input
              type="text"
              name="subject"
              value={subject}
              onChange={this.handleChange}
            ></input>
          </label>
          <label>
            Email
            <input
              type="text"
              name="email"
              value={email}
              onChange={this.handleChange}
            ></input>
          </label>
          <label>
            Zip Code
            <input
              type="text"
              name="zip"
              min="5"
              max="5"
              value={zip}
              onChange={this.handleChange}
            ></input>
          </label>
          <label>
            Phone Number
            <input
              type="text"
              name="phone"
              min="10"
              max="10"
              value={phone}
              onChange={this.handleChange}
            ></input>
          </label>
          <button>Teach Class</button>
        </form>
      </div>
    );
  }
}

export default TeacherEnrollment;
