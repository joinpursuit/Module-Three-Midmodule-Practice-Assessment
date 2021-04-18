import React from "react";

class EnrollmentForm extends React.Component {
  state = {
    name: "",
    subject: "",
    email: "",
    zipcode: "",
    phone: "",
    students: [],
  };

  submitForm = (e) => {
    e.preventDefault();
  };

  changeName = (e) => {
    this.setState({ name: e.target.value });
  };
  changeSubject = (e) => {
    this.setState({ subject: e.target.value });
  };
  changeEmail = (e) => {
    this.setState({ email: e.target.value });
  };
  changeZipcode = (e) => {
    this.setState({ zipcode: e.target.value });
  };
  changePhone = (e) => {
    this.setState({ phone: e.target.value });
  };

  // does not add name to array /////////////////////////////////////////
  addStudent = (name) => {
    this.setState((prevState) => ({
      students: [...prevState.students, name]
    }));
    
  };

  render() {
    const { name, subject, email, zipcode, phone, } = this.state;
    return (
      <form onSubmit={this.submitForm}>
        <h2>Teacher Enrollment</h2>
        <label htmlFor="name">Name</label>
        <input onChange={this.changeName} id="name" type="text" value={name} />

        <label htmlFor="subject">Subject</label>
        <input
          onChange={this.changeSubject}
          id="subject"
          type="text"
          value={subject}
        />

        <label htmlFor="email">Email</label>
        <input
          onChange={this.changeEmail}
          id="email"
          type="email"
          value={email}
        />

        <label htmlFor="zipcode">Zip Code</label>
        <input
          onChange={this.changeZipcode}
          id="zipcode"
          type="number"
          value={zipcode}
        />

        <label htmlFor="phone">Phone Number</label>
        <input
          onChange={this.changePhone}
          id="phone"
          type="tel"
          value={phone}
        />

        <button onClick={() => this.addStudent(name)} type="submit" value={name}>
          Teach Class
        </button>
      </form>
    );
  }
}

export default EnrollmentForm;
