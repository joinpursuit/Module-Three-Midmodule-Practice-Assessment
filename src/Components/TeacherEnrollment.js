import React, { Component } from 'react'

export default class TeacherEnrollment extends Component {
    state = { name: "", subject: "", email: "", zipCode: "", phoneNumber: "" };
    
    onlyNums = (str) => {
        const nums = "0123456789";
        for (const char of str) {
            if (!nums.includes(char)) {
                return false;
            } else {
                return true;
            }
        }
    }
    
    handleSubmit = (e) => {
        e.preventDefault();
        let {roster} = this.props
        let total = 0
        roster.forEach(studt => {
            total += studt.GPA
        })
       
        const { name, subject, email, zipCode, phoneNumber } = this.state;
        if (!name || !subject || !email || !zipCode || !phoneNumber) {
            window.alert("Input is invalid")
        } else if (zipCode.length !== 5 || !this.onlyNums(zipCode)) {
            window.alert("Zip code is not valid")
        } else if (phoneNumber.length !== 10 || !this.onlyNums(phoneNumber)) {
            window.alert("Phone number is not valid")
        }else{
            window.alert(`You are now the teacher.
                You have ${roster.length} students. 
                The average GPA is ${(total/roster.length).toFixed(2)}`
            )
        }
    }
    handleChange = (e) => {
        const { name, value } = e.target;
        this.setState({ [name]: value });
    }
    render() {
        const { name, subject, email, zipCode, phoneNumber } = this.state;
        
        return (
            <>
                <h2>Teacher Enrollment</h2>
                <form onSubmit={this.handleSubmit} >
                    <label>
                        Name <br />
                        <input name="name" value={name} onChange={this.handleChange} />
                    </label>
                    <br />
                    <label>
                        Subject <br />
                        <input name="subject" value={subject} onChange={this.handleChange} />
                    </label>
                    <br />
                    <label>
                        Email <br />
                        <input name="email" value={email} onChange={this.handleChange} />
                    </label>
                    <br />
                    <label>
                        Zip Code <br />
                        <input name="zipCode" value={zipCode} onChange={this.handleChange} />
                    </label>
                    <br />
                    <label>
                        Phone Number <br />
                        <input name="phoneNumber" value={phoneNumber} onChange={this.handleChange} />
                    </label>
                    <br />
                    <button>Teach Class</button>
                </form>
            </>
        )
    }
}
