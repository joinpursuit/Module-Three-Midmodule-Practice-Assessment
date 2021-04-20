import React, { Component } from 'react'

export default class TeacherEnrollment extends Component {
    onSubmit = (e) => {
        e.preventDefault()
        const msg = this.inputDataCheck(e)
        alert(msg)
    }
    inputDataCheck = (e) => {
        const alertMsg1 = "Zip code is not valid"
        if(!e.target.name.value.trim()){
            return "Input is invalid"
        }
        const zip = e.target.zip.value.trim()
        const numbers = "1234567890"
        if(zip.length !== 5){
            return alertMsg1
        } else {
            for(let i = 0; i < zip.length; i++){
                if(!numbers.includes(zip[i])){
                    return alertMsg1
                }
            }
        }
        const alertMsg2 = "Phone number is not valid"
        const phone = e.target.phone.value.trim()
        if(phone.length !== 10){
            return alertMsg2
        } else {
            for(let i = 0; i < phone.length; i++){
                if(!numbers.includes(phone[i])){
                    return alertMsg2
                }
            }
        }
        const { GPA, length } = this.props
        const msg = `You are now the teacher.
            You have ${length} students.
            The average GPA is ${GPA}`
        return msg
    }
    render() {
        return (
            <div>
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
