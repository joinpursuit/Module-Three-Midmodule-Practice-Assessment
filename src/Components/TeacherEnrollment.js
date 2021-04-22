import React, { Component } from 'react'

export class TeacherEnrollment extends Component {

    constructor(){
        super()

        this.state = {
            name: "",
            subject: "",
            email: "",
            zipCode: "",
            phoneNo: ""
        }
    }

    handleSubmit = (e) => {
        e.preventDefault()
        
        
        
    }






    render() {
        return (
            <form onSubmit={this.handleSubmit}>
                <h2>Teacher Enrollment</h2>
                <label>Name</label>
                <input type="text"></input>
                <label>Subject</label>
                <input type="text"></input>
                <label>Email</label>
                <input type="text"></input>
                <label>Zipcode</label>
                <input type="text"></input>
                <label>Phone Number</label>
                <input type="text"></input>
                <button>Teach Class</button> 
            </form>
        )
    }
}

export default TeacherEnrollment
