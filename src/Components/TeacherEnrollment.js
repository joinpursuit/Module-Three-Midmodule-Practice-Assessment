import React from "react";

class TeacherEnrollment extends React.Component {
  // here we are declaring the state objects and inti to empty strings
  state = { name: "", subject: "", email: "", zipCode: "", phoneNumber: "" };
  handleSubmit = (e) => {
    e.preventDefault();
    window.alert(
      `You are now the teacher \n You have ${this.props.numStudent} students. \n The average GPA is ${this.props.averageGPA}`
    );
  };
  handleInput = (e) => {
    this.setState({
      // [e.target.id] is the id in each input tag example name .... to the value /input
      [e.target.id]: e.target.value,
    });
    console.log(this.state);
  };
  render() {
    return (
      <>
        <h2 className="Teacher Enrollment">Teacher Enrollment</h2>
        <form onSubmit={this.handleSubmit}>
          <label htmlFor="name">Name</label>
          <input id="name" onChange={this.handleInput}></input>
          <label htmlFor="subject">Subject</label>
          <input id="subject" onChange={this.handleInput}></input>
          <label htmlFor="email"> Email</label>
          <input id="email" onChange={this.handleInput}></input>
          <label htmlFor="zip-code">Zip Code</label>
          <input id="zipCode" onChange={this.handleInput}></input>
          <label htmlFor="phone-number">Phone Number</label>
          <input id="phoneNumber" onChange={this.handleInput}></input>
          <button type="submit">Teach Class</button>
        </form>
      </>
    );
  }
}
export default TeacherEnrollment;
