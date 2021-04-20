import AppCSS from './AppCSS.css'
import React from 'react'
import Students from './components/Students'
import TeacherEnrollment from './components/TeacherEnrollment'
import Enrolled from './components/Enrolled'
import studentData from './data/studentData'

const students = studentData

class App extends React.Component {
  constructor (props) {
    super(props)

    this.state = {}
  }
  render () {
    return (
      <div className='App'>
        <div>
          <h1>Build a Class</h1>
          <Students students={students} className='Students' />
        </div>
        <div className='RightSide'>
          <Enrolled />
          <TeacherEnrollment />
        </div>
      </div>
    )
  }
}

export default App
