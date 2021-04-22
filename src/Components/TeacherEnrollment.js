import React, { Component } from 'react'
import "./TeacherEnrollment.css"

export class TeacherEnrollment extends Component {
    constructor(){
        super()

        this.state = {
            name: "",
            subject: "",
            email: "",
            zipCode: "",
            phoneNum: "",
        }
    }

    updateUserInput = (event) => {
        this.setState({
            [event.target.id]: event.target.value,
        })

    }

    isValid = (event) => {

        event.preventDefault();

        if(this.state.name.length === 0 || this.state.subject.length === 0 || this.state.email.length === 0){
            alert("Input is invalid!")
        } else if (this.state.zipCode.length < 5){
            alert("Zip code is not valid")
        } else if (this.state.phoneNum.length < 10) {
            alert("Phone number is not valid")
        } else {
            alert("You are now the teacher. \r\n\nYou have 0 students. \r\nThe average GPA is 0.00")
        }
    }

    render() {
        return (
            <div>
                <h2>Teacher Enrollment</h2>
                <form onSubmit={this.isValid} className="TeacherEnrollment" >
                    <label htmlFor="name">Name</label>
                    <input type="text" name="name" id="name" onChange={this.updateUserInput}/>
                    <label htmlFor="subject">Subject</label>
                    <input type="text" name="subject" id="subject" onChange={this.updateUserInput}/>
                    <label htmlFor="email">Email</label>
                    <input type="text" name="email" id="email" onChange={this.updateUserInput}/>
                    <label htmlFor="zipCode">Zip Code</label>
                    <input type="text" name="zipCode" id="zipCode" onChange={this.updateUserInput}/>
                    <label htmlFor="phoneNum">Phone Number</label>
                    <input type="text" name="phoneNum" id="phoneNum" onChange={this.updateUserInput}/>

                    <button>Teach Class</button>
                </form>
            </div>
        )
    }
}

export default TeacherEnrollment;
