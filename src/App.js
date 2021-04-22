import AppCSS from './AppCSS.css'
import React from 'react'
import Students from './components/Students'
import TeacherEnrollment from './components/TeacherEnrollment'
import Enrolled from './components/Enrolled'
import studentData from './data/studentData'

// const allStudents = studentData

class App extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      students: [],
      averageGpa: []
    }

    // VERY IMPORTANT: binding the methods to class object
    this.addStudent = this.addStudent.bind(this)
  }

  // addStudent adds a new student object to state
  addStudent (name, GPA) {
    const student = { name, GPA }

    this.setState({
      students: [...this.state.students, student],
      averageGpa: [...this.state.averageGpa, GPA]
    })
  }

  render () {
    const allStudents = studentData
    const enrolledStudents = this.state.students
    const averageEnrolledGPA = meanGPA(enrolledStudents).toFixed(2)

    return (
      <div className='App'>
        <div>
          <h1>Build a Class</h1>
          <Students
            students={allStudents}
            addStudent={this.addStudent}
            className='Students'
          />
        </div>
        <div className='RightSide'>
          <Enrolled students={enrolledStudents} GPA={averageEnrolledGPA} />
          <TeacherEnrollment
            students={enrolledStudents}
            GPA={averageEnrolledGPA}
          />
        </div>
      </div>
    )
  }
}

const meanGPA = enrolled => {
  // Calculate Average GPA
  let sum = enrolled.reduce((acc, student) => {
    acc += student.GPA
    return acc
  }, 0)
  let GPA
  if (sum > 0) {
    GPA = sum / enrolled.length
  } else {
    GPA = 0
  }
  return GPA
}

export default App
