/*import React from 'react'




function TeacherEnrollment (props) {
    let name = ""
    let subject = ""
    let email = ""
    let zipCode = ""
    let phoneNumber = ""
    const { students, GPA } = props
    const submitForm = (event) => {
        event.preventDefault()
        //if any input is not entered, will pop alert
        if (!name || !subject || !email || !zipCode || !phoneNumber) {
            window.alert("Input is invalid")
        } else if (phoneNumber.length !== 10){
            window.alert("Phone number is not valid")
        } else if (zipCode.length !== 5){
            window.alert("zip code is not valid")
        } else {
            //window alert does not follow jsx rules ${}
            window.alert(`You are the now the teacher \n You have ${students.length} students. \n The average GPA is ${GPA}' to include 'You are now the teacher`)
        }
    }
    const handleChange = (event) => {        
        this.setState({ [event.target.id] : e.target.value})
    }
export default function Enrolled() {
    return (
        <div>
            
        </div>
    )
}
*/






import React, { Component } from 'react'

export class Enrolled extends Component {
    constructor(){
        super()
        this.state = {
            name: "",
            subject: "",
            email: "",
            zipCode: "",
            phoneNumber: ""
        }
    }
    submitForm = (e) => {
        e.preventDefault()
        const {name, subject, email, zipCode, phoneNumber} = this.state
        //if any input is not entered, will pop alert
        if (!name || !subject || !email || !zipCode || !phoneNumber) {
            window.alert("Input is invalid")
        } else if (phoneNumber.length !== 10){
            window.alert("Phone number is not valid")
        } else if (zipCode.length !== 5){
            window.alert("zip code is not valid")
        } else {
            //window alert does not follow jsx rules ${}
            window.alert(`You are the now the teacher \n You have ${this.props.classSize} students. \n The average GPA is ${this.props.average.toFixed(2)}' to include 'You are now the teacher`)
        }
    }
    handleChange = (e) => {        
        this.setState({ [e.target.id] : e.target.value})
        // use [] because you are defining a variable
    }
    render() {
        let handleChange = this.handleChange
        return (
        <div>
            <h3>Teacher Enrollment</h3>
            <form onSubmit={this.submitForm}>
                <label htmlFor="name">Name</label> 
                <br></br>
                <input type="text" id="name" onChange={handleChange}></input> 
                <br></br>
                <label htmlFor="subject">Subject</label> 
                <br></br>
                <input type="text" id="subject" onChange={handleChange}></input> 
                <br></br>
                <label htmlFor="email" onChange={handleChange}>Email</label> 
                <br></br>
                <input type="text" id="email" onChange={handleChange}></input> 
                <br></br>
                <label htmlFor ="zip">Zip Code</label> 
                <br></br>
                <input type="text" id="zip" onChange={handleChange}></input> 
                <br></br>
                <label htmlFor = "number">Phone Number</label> 
                <br></br>
                <input type="text" id="number" onChange={handleChange}></input>
                <br></br>
                <br></br>
                <button type="submit">Teach Class</button>
            </form>
        </div>
        )
    }

}
export default Enrolled
