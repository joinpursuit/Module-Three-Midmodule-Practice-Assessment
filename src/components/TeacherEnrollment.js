import React from 'react'

function TeacherEnrollment (props) {
  const { students, GPA } = props

  const submitForm = e => {
    e.preventDefault()
    const values = document.querySelectorAll('input')

    let zipcode = 0
    let number = 0
    let idx = -1
    let filter = false

    for (let i = 0; i <= 4; i += 1) {
      if (values[i].value === '') {
        idx = i
        filter = false
      } else {
        filter = true
      }
    }

    zipcode = parseInt(values[3].value)
    number = parseInt(values[4].value)

    switch (idx) {
      case -1:
        if (zipcode >= 10000 && number >= 1000000000) {
          window.alert(
            `You are now the teacher.\n You have ${students.length} students \n The average GPA is ${GPA}`
          )
          break
        } else if (zipcode >= 10000) {
          window.alert('Phone number is not valid')
          break
        } else {
          window.alert('Zip code is not valid')
          break
        }

      case 3:
        window.alert('Zip code is invalid')
        break

      case 4:
        if (filter === true) {
          window.alert('Phone number is invalid')
          break
        } else {
          window.alert('Input is invalid')
          break
        }

      default:
        window.alert('Input is invalid')
        break
    }
  }

  return (
    <form className='FormContainer' onSubmit={submitForm}>
      <h2>Teacher Enrollment</h2>
      <br />
      <label htmlFor='name'>Name</label>
      <input id='name' name='name' defaultValue='' />
      <br />
      <label htmlFor='subject'>Subject</label>
      <input id='subject' name='subject' defaultValue='' />
      <br />
      <label htmlFor='email'>Email</label>
      <input id='email' name='email' defaultValue='' />
      <br />
      <label htmlFor='zipcode'>Zip Code</label>
      <input id='zipcode' name='Zip Code' defaultValue='' />
      <br />
      <label htmlFor='phoneNumber'>Phone Number</label>
      <input id='phoneNumber' name='Phone Number' defaultValue='' />
      <br />
      <button type='submit'>Teach Class</button>
    </form>
  )
}

export default TeacherEnrollment
