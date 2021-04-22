import { Component } from "react";

import includesLetters from "../Helpers/helpers"

// Form Requires:
// Name: Subject: Email: Zip Code: Phone Number:
//  Teacher Class:
//  Results in Alert (if no input: input is invalid)
//                   (if input: You are now the teacher, you have {number of students} students
//                   the Average GPA is {Average of Class.}

class Form extends Component {
  state = {
    name: "",
    subject: "",
    email: "",
    zipCode: "",
    phoneNumber: "",
  };

  handleSubmit = (e) => {
    e.preventDefault();
    const {averageGPA, studentCount}
    const { name, subject, email, zipCode, phoneNumber } = this.state;
    // console.log(this.state);
      if(!name || !subject || !email) {
          window.alert("Input is invalid")
      } else if(phoneNumber.length !== 10 || includesLetters(phoneNumber)) {
        window.alert("Phone number is not valid");
      } else if (zipCode.length !== 5 || includesLetters(zipCode)) {
        window.alert("Zip code is not valid");
      } else {
        window.alert(`You are now the teacher
          You have ${studentCount} students 
          The average GPA is ${averageGPA.toFixed(2)}`);
      }

    // if (name === "" || subject === "" || zipCode === "") {
    //   alert("Input is invalid");
    // } else if (phoneNumber.length !== 10) {
    //   alert("Phone number is not valid");
    // }
  };

  handleChange = (e) => {
    const { name, value } = e.target;
    this.setState({ [name]: value });
  };

  render() {
    const { name, subject, email, zipCode, phoneNumber } = this.state;
    // console.log(this.state);
    return (
      <section>
        <h2>Teacher Enrollment</h2>
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
              onChange={this.handleChange}
              value={phoneNumber}
              type="tel"
            />
          </label>
          <button>Teach Class</button>
        </form>
      </section>
    );
  }
}

export default Form;
