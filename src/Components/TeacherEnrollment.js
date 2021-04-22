import React from "react";
import includesLetters from '../helperFunctions/helperFunctions';

class TeacherEnrollment extends React.Component {
  state = { name: "", subject: "", email: "", zipCode: "", phone: "" };

  handleSubmit = (e) => {
    e.preventDefault();
    // debugger
    const { name, subject, email, zipCode, phone } = this.state;
    const { studentInfo, avgGPA } = this.props;
    if (!name || !subject || !email || !zipCode) {
      alert("Input is invalid. Please complete all the fields.");
    } else if (phone.length !== 10 || includesLetters(phone)) {
      alert("Phone number is not valid.");
    } else if (zipCode.length !== 5 || includesLetters(zipCode)) {
      alert("Zip code is not valid.");
    } else {
      alert(`${name}, you are now the teacher! 
                  You have ${studentInfo.length} students.
                  The average GPA is ${avgGPA.toFixed(2)}.`
      );
    }
  };

  handleChange = (e) => {
    const { name, value } = e.target;
    this.setState({ [name]: value });
  };

  render() {
    const { name, subject, email, zipCode, phone } = this.state;
    return (
      <div>
        <form className="FormContainer" onSubmit={this.handleSubmit}>
        <h2>Teacher Enrollment</h2>
          <label htmlFor="name">Name</label>
          <input
            onChange={this.handleChange}
            name="name"
            value={name}
            placeholder="Name"
          />
          <br />
          <label htmlFor="subject">Subject</label>
          <input
            onChange={this.handleChange}
            name="subject"
            value={subject}
            placeholder="Subject"
          />
          <br />
          <label htmlFor="email">Email</label>
          <input
            type="email"
            onChange={this.handleChange}
            name="email"
            value={email}
            placeholder="Email"
          />
          <br />
          <label htmlFor="zip">Zip Code</label>
          <input
            type="number"
            onChange={this.handleChange}
            name="zipCode"
            value={zipCode}
            placeholder="Zip"
          />
          <br />
          <label htmlFor="phone">Phone</label>
          <input
            type="tel"
            onChange={this.handleChange}
            name="phone"
            value={phone}
            placeholder="Phone"
          />
          <br />
          <button type="submit">Teach a Class</button>
        </form>
        </div>
    );
  }
}

export default TeacherEnrollment;
