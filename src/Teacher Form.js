import React, { Component } from "react";

export class TeacherForm extends Component {
  constructor() {
    super();
    this.state = {
      Name: "",
      subject: "",
      email: "",
      zipCode: "",
      phoneNumber: "",
    };
  }

  handleSubmit = (e) => {
    e.preventDefault();
  };

  render() {
    const { Name, subject, email, zipCode, phoneNumber } = this.state;
    return (
      <div>
        <form onSubmit={this.handleSubmit} className="form">
          <h2>Teacher Enrollment</h2>
          <div>
            <label htmlFor="name">Name</label>
            <br />
            <input type="text" id="" value={Name} />
          </div>
          <div>
            <label htmlFor="subject">Subject</label>
            <br />
            <input type="text" id="" value={subject} />
          </div>
          <div>
            <label htmlFor="email">Email</label>
            <br />
            <input type="text" id="" value={email} />
          </div>
          <div>
            <label htmlFor="zipCode">Zip Code</label>
            <br />
            <input type="text" id="" value={zipCode} />
          </div>
          <div>
            <label htmlFor="phoneNumber">Phone Number</label>
            <br />
            <input type="text" id="" value={phoneNumber} />
          </div>
          <br />
          <button type="submit">Teach Class</button>
        </form>
      </div>
    );
  }
}

export default TeacherForm;
