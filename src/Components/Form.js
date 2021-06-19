import React from "react";
import "./Form.css";
class Form extends React.Component {
  constructor(props) {
    super(props);
    this.state = { name: "", subject: "", email: "", zipCode: "", phone: "" };
    // debugger
  }
  checkSubmit = (e) => {
    e.preventDefault();
    const { name, subject, email, zipCode, phone } = this.state;

    const { averageGPA, addedStudents } = this.props;

    if (name === "" || subject === "" || email === "") {
      alert("Input is invalid");
    } else if (zipCode.length !== 5) {
      alert("Zip code is not valid");
    } else if (phone.length !== 10) {
      alert("Phone number is not valid");
    } else {
      alert(`You are now the teacher.
      You have ${addedStudents.length} students. 
      The average GPA is ${averageGPA}`);
    }
  };

  updateState = (e) => {
    this.setState({ [e.target.name]: e.target.value });
  };

  render() {
    const { name, subject, email, zipCode, phone } = this.state;
    return (
      <form onSubmit={this.checkSubmit}>
        <h3>Teacher Enrollment</h3>
        <label htmlFor="name">Name</label>
        <input
          id={"name"}
          name="name"
          value={name}
          onChange={this.updateState}
        />
        <label htmlFor="subject">Subject</label>
        <input
          id={"subject"}
          name="subject"
          value={subject}
          onChange={this.updateState}
        />
        <label htmlFor="email">Email</label>
        <input
          type="email"
          id={"email"}
          name="email"
          value={email}
          onChange={this.updateState}
        />
        <label htmlFor="zipCode">Zip Code</label>
        <input
          type="zipCode"
          id={"zipCode"}
          name="zipCode"
          value={zipCode}
          onChange={this.updateState}
        />
        <label htmlFor="phone">Phone Number</label>
        <input
          id={"phone"}
          name="phone"
          value={phone}
          onChange={this.updateState}
        />
        <button type="submit">Teach Class</button>
      </form>
    );
  }
}

export default Form;
