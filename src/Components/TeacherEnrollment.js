import React from 'react'

class TeacherEnrollment extends React.Component {
    state = {name: "", subject: "", email: "", zipCode: "", phoneNumber: ""}

    handleChange = (e) => {
        const {name, value} = e.target;
        this.setState({[name]: value})
    }

    handleSubmit = (e) => {
        e.preventDefault();
        const {averageGPA, studentCount} = this.props
        const {name, subject, email, zipCode, phoneNumber} = this.state
        if (!name || !subject || !email) {
            window.alert("Input is invalid")
        } else if (phoneNumber.length !== 10) {
            window.alert("Phone number is not valid")
        } else if (zipCode.length !== 5) {
            window.alert("Zip Code is not valid")
        } else {
            window.alert(`You are now the teacher
                     You have ${studentCount} students
                     The average GPA is ${averageGPA.toFixed(2)}`);
    }
}

    render() {
        const {name, subject, email, zipCode, phoneNumber} = this.state
        return (
            <section>
            <h2> Teacher Enrollment </h2>
            <form onSubmit={this.handleSubmit}>
            <label htmlFor="name">Name</label>
            <input  
            onChange={this.handleChange} id="name" name="name" value={name}/>
            <label htmlFor="subject">Subject</label>
            <input  onChange={this.handleChange} id="subject" name="subject" value={subject}/>
            <label htmlFor="email">Email</label>
            <input  onChange={this.handleChange} id="email" name="email" value={email}/>
            <label htmlFor="zipCode">Zip Code</label>
            <input  onChange={this.handleChange} id="zipCode" name="zipCode" value={zipCode}/>
            <label htmlFor="phoneNumber">Phone Number</label>
            <input  onChange={this.handleChange} id="phoneNumber" name="phoneNumber" value={phoneNumber}/>
            <button>Teach Class</button>
            </form>
            </section>
        )
    }
}

export default TeacherEnrollment