import React, { Component } from 'react'

export class Enrollment extends Component {
    constructor(){
        super()
        this.state = {
            name: "",
            subject: "",
            email: "",
            zip: "",
            number: ""
        }
    }

    submitForm = (e) => {
        e.preventDefault()
        const {name, subject, email, zip, number} = this.state

        if (!name || !subject || !email || !zip || !number) {
            window.alert("Input is invalid")
        } else if (number.length !== 10){
            window.alert("Phone number is not valid")
        } else if (zip.length !== 5){
            window.alert("Zip code is not valid")
        } else {
            window.alert(`You are the now the teacher \n You have ${this.props.studentCount} students. \n The average GPA is ${this.props.average.toFixed(2)}' to include 'You are now the teacher`)
            // window.alert("You are the now the teacher \n You have " + this.props.studentCount + " students. \n The average GPA is " + this.props.average.toFixed(2) )
        }
    }
    
    handleChange = (e) => {        
        this.setState({ [e.target.id] : e.target.value})
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

export default Enrollment

