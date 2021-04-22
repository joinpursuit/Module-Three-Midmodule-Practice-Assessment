import React from "react";
import "./TeacherEnrollment.css";
import includesLetters from "../helperFunctions/helperFunctions";

class TeacherEnrollment extends React.Component {
  state = { name: "", subject: "", email: "", zipCode: "", phoneNumber: "" };

  handleSubmit = (e) => {
    e.preventDefault();
    // debugger
    const { name, subject, email, zipCode, phoneNumber } = this.state;
    const { studentInfo, avgGPA } = this.props;
    if (!name || !subject || !email || !zipCode) {
      alert("Input is invalid. Please complete all the fields.");
    } else if (phoneNumber.length !== 10 || includesLetters(phoneNumber)) {
      alert("Phone number is not valid.");
    } else if (zipCode.length !== 5 || includesLetters(zipCode)) {
      alert("Zip code is not valid.");
    } else {
      alert(`You are now the teacher, ${name}! 
                  You have ${studentInfo.length} students.
                  The average GPA is ${avgGPA.toFixed(2)}.`);
    }
  };

  handleChange = (e) => {
    const { name, value } = e.target;
    this.setState({ [name]: value });
  };

  render() {
    const { name, subject, email, zipCode, phoneNumber } = this.state;
    return (
      <div>
        <form className="FormContainer" onSubmit={this.handleSubmit}>
          <h2>Teacher Enrollment</h2>
          <label htmlFor="name">Name</label>
          <input
            id="name"
            onChange={this.handleChange}
            name="name"
            value={name}
            placeholder="Name"
          />
          <br />
          <label htmlFor="subject">Subject</label>
          <input
            id="subject"
            onChange={this.handleChange}
            name="subject"
            value={subject}
            placeholder="Subject"
          />
          <br />
          <label htmlFor="email">Email</label>
          <input
            id="email"
            type="email"
            onChange={this.handleChange}
            name="email"
            value={email}
            placeholder="Email"
          />
          <br />
          <label htmlFor="zipCode">Zip Code</label>
          <input
            id="zipCode"
            type="number"
            onChange={this.handleChange}
            name="zipCode"
            value={zipCode}
            placeholder="Zip Code"
          />
          <br />
          <label htmlFor="phoneNumber">Phone Number</label>
          <input
            id="phoneNumber"
            type="tel"
            onChange={this.handleChange}
            name="phoneNumber"
            value={phoneNumber}
            placeholder="Phone Number"
          />
          <br />
          <button type="submit">Teach Class</button>
        </form>
      </div>
    );
  }
}

export default TeacherEnrollment;
