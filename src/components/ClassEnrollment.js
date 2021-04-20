import React, { Component } from 'react'
import StudentsEnrollment from "./StudentsEnrollment"
import TeacherEnrollment from "./TeacherEnrollment"
import studentData from "../data/studentData"
import "./ClassEnrollment.css"

export default class ClassEnrollment extends Component {
    constructor(){
        super()
        this.state = {
            students: [],
            GPA: "0.00"
        }
    }
    addToClass = (e) => {
        const student = e.target.parentNode.childNodes
        const objStudent = {}
        objStudent.name = student[0].innerText
        objStudent.GPA = Number(student[4].innerText.split(" ")[1]).toFixed(2)
        const calculateGPA = () => {
            let { students, GPA } = this.state
            students.push(objStudent)
            const sum = students.reduce((avg, stu) => avg + Number(stu.GPA), 0)
            GPA = (sum / students.length).toFixed(2)
            this.setState({ students, GPA })
        }
        calculateGPA()
    }
    render() {
        return (
            <div className="class-enrollment">
                <StudentsEnrollment
                    studentData={studentData}
                    students={this.state.students}
                    GPA={this.state.GPA}
                    addToClass={this.addToClass}
                />
                <TeacherEnrollment
                    GPA={this.state.GPA}
                    length={this.state.students.length}
                />
            </div>
        )
    }
}
