import React from 'react'

class Form extends React.Component{
    state = {name:"", subject: "", email: "", phone: "", zip: ""}


    handleSubmit=(e)=>{
        e.preventDefault();
        const {students} = this.props;
        debugger
        let average = students.reduce((sum,student) => sum + student.gpa, 0) / students.length
        console.log(average)
        const {name, subject, email, phone, zip} = this.state;
        if(phone.length!==10){
            window.alert("Phone number is not valid")
            return;
        }
        if(zip.length!==5){
            window.alert("Zip code is not valid")
            return;
        }
        if(!name ||!subject || !email || !phone || !zip){
            window.alert("Input is invalid")
            return;
        }
        window.alert(`You are now the teacher. You have ${students.length} students. The average GPA is ${average.toFixed(2)}`)

    }

    handleChange= (e) =>{
        const {name, value} = e.target;
        this.setState({[name]: value})
    }

    render() {
        const {name, subject, email, phone, zip} = this.state;
        return (
                <form onSubmit={this.handleSubmit}>
                    <h2>Teacher Enrollment</h2>
                <label>Name<input name="name" onChange={this.handleChange} value={name}/></label>
                <label>Subject<input name="subject" onChange={this.handleChange} value={subject}/></label>
                <label>Email<input name="email" onChange={this.handleChange} value={email}/></label>
                <label>Phone Number<input name="phone" onChange={this.handleChange} value={phone}/></label>
                <label>Zip Code<input name="zip" onChange={this.handleChange} value={zip}/></label>
                <button type="submit">Teach Class</button>
                </form>
                )
    }

}

export default Form;