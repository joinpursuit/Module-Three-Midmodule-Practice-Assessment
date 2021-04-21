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

    isValid = (event) => {

        event.preventDefault();

        if(this.state.name.length === 0 || this.state.subject.length === 0 || this.state.email.length === 0){
            alert("Input is invalid!")
        } else if (this.state.zipCode.length < 5){
            alert("Zip Code is invalid!")
        } else if (this.state.phoneNum.length < 10) {
            alert("Phone number is invalid!")
        } else {
            alert("You are now the teacher.")
        }
    }

    render() {
        return (
            <div>
                <h2>Teacher Enrollment</h2>
                <form onSubmit={this.isValid} className="TeacherEnrollment" >
                    <label htmlFor="">Name</label>
                    <input type="text"/>
                    <label htmlFor="">Subject</label>
                    <input type="text"/>
                    <label htmlFor="">Email</label>
                    <input type="text"/>
                    <label htmlFor="">Zip Code</label>
                    <input type="text"/>
                    <label htmlFor="">Phone Number</label>
                    <input type="text"/>

                    <button>Teach Class</button>
                </form>
            </div>
        )
    }
}

export default TeacherEnrollment;
