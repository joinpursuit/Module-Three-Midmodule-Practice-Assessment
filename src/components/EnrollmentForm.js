import React from "react";

class EnrollmentForm extends React.Component {
  state = {
    username: "",
    subject: "",
    email: "",
    zipcode: "",
    phone: "",
  };

  
  submitForm = (e) => {
    const { roster, averageGPA } = this.props;
    e.preventDefault();
    alert(`You are now the teacher.
                  You have ${roster.length} students.
                  The average GPA is ${averageGPA}`);
  };

  changeName = (e) => {
    const { name, value } = e.target;
    this.setState({ [name]: value });
  };

  // does not add name to array /////////////////////////////////////////
  addStudent = (name) => {
    this.setState((prevState) => ({
      students: [...prevState.students, name],
    }));
  };

  render() {
    const { username, subject, email, zipcode, phone } = this.state;
    // console.log(this.state);
    return (
      <form onSubmit={this.submitForm}>
        <h2>Teacher Enrollment</h2>
        <label htmlFor="name">Name</label>
        <input
          name="username"
          onChange={this.changeName}
          id="name"
          type="text"
          value={username}
        />

        <label htmlFor="subject">Subject</label>
        <input
          name="subject"
          onChange={this.changeName}
          id="subject"
          type="text"
          value={subject}
        />

        <label htmlFor="email">Email</label>
        <input
          name="email"
          onChange={this.changeName}
          id="email"
          type="email"
          value={email}
        />

        <label htmlFor="zipcode">Zip Code</label>
        <input
          name="zipcode"
          onChange={this.changeName}
          id="zipcode"
          type="text"
          value={zipcode}
        />

        <label htmlFor="phone">Phone Number</label>
        <input
          name="phone"
          onChange={this.changeName}
          id="phone"
          type="tel"
          value={phone}
        />

        <button
          // onClick={() => this.addStudent(name)}
          // type="submit"
          // value={name}
        >
          Teach Class
        </button>
      </form>
    );
  }
}

export default EnrollmentForm;

// combine all the event listeners into one method ///// 
// changeName = (e) => {
//   const { name, value } = e.target;
//   this.setState({ [name]: value });
// };

// each event listener separately /////////
// changeName = (e) => {
//   this.setState({ name: e.target.value });
// };
// changeSubject = (e) => {
//   this.setState({ subject: e.target.value });
// };
// changeEmail = (e) => {
//   this.setState({ email: e.target.value });
// };
// changeZipcode = (e) => {
//   this.setState({ zipcode: e.target.value });
// };
// changePhone = (e) => {
//   this.setState({ phone: e.target.value });
// };