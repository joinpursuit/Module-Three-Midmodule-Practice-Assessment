import React, { Component } from 'react'
import TeacherEnrollment from "./TeacherEnrollment"
import "./StudentsEnrollment.css"

export default class StudentsEnrollment extends Component {
    render() {
        const studentsList = this.props.studentData.map(stu => {
            return (
                <li key={stu.id} className="student">
                    <h3>{stu.name}</h3>
                    <p>Age: {stu.age}</p>
                    <img className="student-img" src={stu.image} alt="" />
                    <p>Bio: {stu.bio}</p>
                    <p>GPA: {Number(stu.GPA).toFixed(2)}</p>
                    <button onClick={this.props.addToClass}>Add To Class</button>
                </li>
            )
        })
        const studentsEnrolledList = this.props.students.map((stu, i) => {
            return <li key={i}>{stu.name}: {stu.GPA}</li>
        })
        return (
            <>
                <div className="students-list">
                    <h1>Build a Class</h1>
                    <ul className="Students">
                        {studentsList}
                    </ul>
                </div>
                <div className="students-enroll-stats">
                    <h1>Enrolled</h1>
                    <ul className="EnrolledList">
                        {studentsEnrolledList}
                    </ul>
                    <h2>Total Student Count: {this.props.students.length}</h2>
                    <h2>Average GPA: {this.props.GPA}</h2>
                    <TeacherEnrollment
                        GPA={this.props.GPA}
                        length={this.props.students.length}
                    />
                </div>
            </>
        )
    }
}