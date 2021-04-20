import React, { Component } from "react";

export default class TeacherEnrollment extends Component {
  
    render() {
    return (
          <> 
        <h2>Teacher Enrollment</h2>
        <form>
        <label htmlFor="Name">Name</label>
        <input type="text" name="" id="" />
        <label htmlFor="Subject">Subject</label>
        <input type="text" name="" id="" />
        <label htmlFor="Email">Email</label>
        <input type="email" name="" id=""/>
        <label htmlFor="ZipCode">Zip Code</label>
        <input type="number" name="" id=""/>
        <label htmlFor="PhoneNumber">Phone Number</label>
        <input type="tel" name="Phone" id=""/>
        <button type="submit">Teach Class</button>
      </form>
      </>
    );
  }
}

