import React, { Component } from 'react'
import "./TeacherForm.css"


export default class TeacherForm extends Component {
    state = { name: "", subject: "", email: "", zipcode: "", phone: "" };
    
    teachClass = (e, props) => {
        e.preventDefault()
        console.log("teach class")
        const { name, subject, email, phone, zipcode } = this.state;
        if(phone.length !== 10) {
            window.alert("Phone number is not valid")
        }
        else if(zipcode.length !== 5) {
            window.alert("Zip code is not valid")
        }
        else if(!name ||!subject || !email || !phone || !zipcode){
            window.alert("Input is invalid")
        } 
        else {
        const msg = `You are now the teacher. You have ${this.props.count} students. The average GPA is ${this.props.averageGPA.toFixed(2)}`
        alert(msg)
        }
    }

    handleChange = (e) => {
        const { name, value } = e.target;
        this.setState({ [name]: value });
    }


    render() {
        const { enrolled, averageGPA, count } = this.props
        const {name, subject, email, phone, zipcode} = this.state;
        return (
            <div className="form">
                <h3>Teacher Enrollment</h3>
                <form onSubmit={this.teachClass}>
                  
                    <label htmlFor="name">Name</label>
                    <br/>
                    <input type="text" name="name" id="name" value={name} onChange={this.handleChange}/>
                    <br/>
                    <label htmlFor="subject">Subject</label>
                    <br/>
                    <input type="text" name="subject" id="subject" value={subject} onChange={this.handleChange}/>
                    <br/>
                    <label htmlFor="email">Email</label>
                    <br/>
                    <input type="email" name="email" id="email" value={email} onChange={this.handleChange}/>
                    <br/>
                    <label htmlFor="zipcode">Zip Code</label>
                    <br/>
                    <input type="number" name="zipcode" id="zipcode" value={zipcode} onChange={this.handleChange}/>
                    <br/>
                    <label htmlFor="phone">Phone Number</label>
                    <br/>
                    <input type="tel" name="phone" id="phone" maxlength="10" minlength="10" value={phone} onChange={this.handleChange}/>
                    <br/>
                    <button>Teach Class</button>
                </form>
            </div>
        )
    }
}
