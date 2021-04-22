import React from "react";

// Form Requires:
// Name: Subject: Email: Zip Code: Phone Number:
//  Teacher Class:
//  Results in Alert (if no input: input is invalid)
//                   (if input: You are now the teacher, you have {number of students} students
//                   the Average GPA is {Average of Class.}
class TeacherEnrollment extends React.Component {
  state = {
    name: "",
    subject: "",
    email: "",
    zipCode: "",
    phoneNumber: "",
  };
  handleSubmit = (e) => {
    e.preventDefault();
    console.log(this.state);
    const { name, subject, email, zipCode, phoneNumber } = this.state;

    if (name === "" || subject === "" || zipCode === "")  {
      alert("Input is invalid");
    } else if (phoneNumber.length !== 10) {
      alert("Phone Number is not valid");
    } else {
      // number and average are underfined currently
      alert(
        `You are now the teacher. You have (number) students. The Average GPA is (average)}`
      );
    }
  };
  handleChange = (e) => {
    const { name, value } = e.target;
    this.setState({ [name]: value });
  };

  render() {
    const { name, subject, email, zipCode, phoneNumber } = this.state;
    // console.log(this.state);
    return (
      <div>
        <h1>Teacher Enrollment</h1>
        <form onSubmit={this.handleSubmit}>
          <label>
            Name
            <input name="name" onChange={this.handleChange} value={name} />
          </label>
          <label>
            Subject
            <input
              name="subject"
              onChange={this.handleChange}
              value={subject}
            />
          </label>
          <label>
            Email
            <input
              name="email"
              type="email"
              onChange={this.handleChange}
              value={email}
            />
          </label>
          <label>
            Zip Code
            <input
              name="zipCode"
              onChange={this.handleChange}
              value={zipCode}
            />
          </label>
          <label>
            Phone Number
            <input
              name="phoneNumber"
              type="tel"
              onChange={this.handleChange}
              value={phoneNumber}
            />
          </label>
          <button>Teach Class</button>
        </form>
      </div>
    );
  }
}

export default TeacherEnrollment;
