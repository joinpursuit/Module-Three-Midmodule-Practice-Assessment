import React, { Component } from 'react'

export class TeacherEnrollment extends Component {
  render () {
    return (
      <form className='FormContainer'>
        <h2>Teacher Enrollment</h2>
        <br />
        <label htmlFor='name'>Name</label>
        <input id='name' name='name' value />
        <br />
        <label htmlFor='subject'>Subject</label>
        <input id='subject' name='subject' value />
        <br />
        <label htmlFor='email'>Email</label>
        <input id='email' name='email' value />
        <br />
        <label htmlFor='zipcode'>Zip Code</label>
        <input id='zipcode' name='zipcode' value />
        <br />
        <label htmlFor='phoneNumber'>Phone Number</label>
        <input id='phoneNumber' name='phoneNumber' value />
        <br />
        <button type='submit'>Teach Class</button>
      </form>
    )
  }
}

export default TeacherEnrollment
