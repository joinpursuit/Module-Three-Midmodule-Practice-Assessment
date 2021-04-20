import React, { Component } from 'react'
import "./TeacherEnrollment.css"

export default class TeacherEnrollment extends Component {
    onSubmit = (e) => {
        e.preventDefault()
        const msg = this.inputDataCheck(e)
        alert(msg)
    }
    inputDataCheck = (e) => {
        if(!e.target.name.value.trim()){
            return "Input is invalid"
        }
        const validateZipPhone = (input, inputType) => {
            const numbers = "1234567890"
            const typeLength = inputType === "zip" ? 5 : 10
            if(input.length !== typeLength){
                return false
            } else {
                for(let i = 0; i < input.length; i++){
                    if(!numbers.includes(input[i])){
                        return false
                    }
                }
            }
            return true
        }
        const alertMsg1 = "Zip code is not valid"
        const zip = e.target.zip.value.trim()
        if(!validateZipPhone(zip, "zip")){
            return alertMsg1
        }
        const alertMsg2 = "Phone number is not valid"
        const phone = e.target.phone.value.trim()
        if(!validateZipPhone(phone, "phone")){
            return alertMsg2
        }
        const { GPA, length } = this.props
        const msg = `You are now the teacher.
            You have ${length} students.
            The average GPA is ${GPA}`
        return msg
    }
    render() {
        return (
            <div className="teacher-form">
                <h1>Teacher Enrollment</h1>
                <form onSubmit={this.onSubmit}>
                    <label htmlFor="name">Name</label>
                    <input type="text" name="name" id="name"></input>
                    <label htmlFor="subject">Subject</label>
                    <input type="text" name="subject" id="subject"></input>
                    <label htmlFor="email">Email</label>
                    <input type="email" name="email" id="email"></input>
                    <label htmlFor="zip">Zip Code</label>
                    <input type="text" name="zip" id="zip"></input>
                    <label htmlFor="phone">Phone Number</label>
                    <input type="tel" name="phone" id="phone"></input>
                    <button type="submit">Teach Class</button>
                </form>
            </div>
        )
    }
}
