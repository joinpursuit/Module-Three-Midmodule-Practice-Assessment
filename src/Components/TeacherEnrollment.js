import {Component} from "react"

class TeacherEnrollment extends Component {
    state = {
        name: "",
        subject: "",
        email: "",
        zipCode: "",
        phoneNum: ""
    }

    handleChange = (event) => {
        const {name,value} = event.target;
        this.setState({[name]: value})
    }

    handleSubmit = (event) => {
        event.preventDefault(); 
        const {studentCount, averageGPA} = this.props;
        const {name, subject, email, zipCode, phoneNum} = this.state;
        if(!name || !subject || !email) {
            window.alert("Input is invalid.")
        } else if (phoneNum.length !== 10) {
            window.alert("Phone number is not valid.")
        } else if (zipCode.length !== 5) {
            window.alert("Zip code is not valid.")
        } else {
            window.alert(`You are now the teacher
                            You have ${studentCount} students.
                            The average GPA is ${averageGPA.toFixed(2)}.`);
        }

    }

    render () {
        const {name,subject,email,zipCode,phoneNum} = this.state

        return (
            <section className="teacherEnrollment">
                <h2>Teacher Enrollment</h2>
                <form onSubmit={this.handleSubmit} className="form">
                    {/* htmlFor and id are connected */}
                    <label htmlFor="name">Name</label>
                    <input name="name" id="name" value={name} onChange={this.handleChange}></input>
                    <label htmlFor="subject">Subject</label>
                    <input name="subject" id="subject" value={subject} onChange={this.handleChange}></input>
                    <label htmlFor="email">Email</label>
                    <input name="email" id="email" value={email} onChange={this.handleChange}></input>
                    <label htmlFor="zipCode">Zip Code</label>
                    <input name="zipCode" id="zipCode" value={zipCode} onChange={this.handleChange}></input>
                    <label htmlFor="phoneNum">Phone Number</label>
                    <input name="phoneNum" id="phoneNum" value={phoneNum} onChange={this.handleChange}></input>
                    <button>Teach Class</button>
                </form>
            </section>
        )
    }
}

export default TeacherEnrollment;





// import React, { Component } from 'react'
// import "./TeacherEnrollment.css"

// export class TeacherEnrollment extends Component {
//     constructor(){
//         super()

//         this.state = {
//             name: "",
//             subject: "",
//             email: "",
//             zipCode: "",
//             phoneNum: "",
//         }
//     }

//     updateUserInput = (event) => {
//         this.setState({
//             [event.target.id]: event.target.value,
//         })

//     }

//     isValid = (event) => {

//         event.preventDefault();

//         if(this.state.name.length === 0 || this.state.subject.length === 0 || this.state.email.length === 0){
//             alert("Input is invalid!")
//         } else if (this.state.zipCode.length < 5){
//             alert("Zip code is not valid")
//         } else if (this.state.phoneNum.length < 10) {
//             alert("Phone number is not valid")
//         } else {
//             alert("You are now the teacher. \r\n\nYou have 0 students. \r\nThe average GPA is 0.00")
//         }
//     }

//     render() {
//         return (
//             <div>
//                 <h2>Teacher Enrollment</h2>
//                 <form onSubmit={this.isValid} className="TeacherEnrollment" >
//                     <label htmlFor="name">Name</label>
//                     <input type="text" name="name" id="name" onChange={this.updateUserInput}/>
//                     <label htmlFor="subject">Subject</label>
//                     <input type="text" name="subject" id="subject" onChange={this.updateUserInput}/>
//                     <label htmlFor="email">Email</label>
//                     <input type="text" name="email" id="email" onChange={this.updateUserInput}/>
//                     <label htmlFor="zipCode">Zip Code</label>
//                     <input type="text" name="zipCode" id="zipCode" onChange={this.updateUserInput}/>
//                     <label htmlFor="phoneNum">Phone Number</label>
//                     <input type="text" name="phoneNum" id="phoneNum" onChange={this.updateUserInput}/>

//                     <button>Teach Class</button>
//                 </form>
//             </div>
//         )
//     }
// }

// export default TeacherEnrollment;
