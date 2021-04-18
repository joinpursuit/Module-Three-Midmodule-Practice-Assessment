import React from "react";
import "./styles/TeacherEnrollment.css"

class TeacherEnrollment extends React.Component {
  constructor(props){
      super(props)
  }
    
  state = { name: "", subject: "", email: "", phoneNumber: "", zipCode: "" };



  handleSubmit = (e) => {
    e.preventDefault();
    console.log(this.state)

 
//      console.log(this.props)
 window.alert(`You are now the teacher, you have ` +  this.props.allClass + ` students. the average GPA is `+this.props.averageGPA);
  };

  handleInputChange = (event) => {
    const { name, value } = event.target;
    this.setState({ [name]: value });
  };

// showAlert = ()=>{
//     const {roster} = this.props;
//     console.log(roster)
//  window.alert("test");
// }

render(){


  return (
    <section className="TeachEnroll">
        <h2>Teacher Enrollment</h2>
      <form onSubmit={this.handleSubmit} >
        <label>Name: </label>  <br/>
        <input name="userName" value={this.userName} onChange={this.handleInputChange}/>
        <br/>
        <label>Subject: </label>  <br/>
        <input name="subject" value={this.subject} onChange={this.handleInputChange}/>
        <br/>
        <label>Email: </label>  <br/>
        <input name="email" value={this.email} onChange={this.handleInputChange}/>
        <br/>
        <label>Phone Number: </label>   <br/>
        <input name="phoneNumber" value={this.phoneNumber} onChange={this.handleInputChange}/>
        <br/>
        <label>Zip Code: </label>   <br/>
        <input name="zipCode" value={this.zipCode} onChange={this.handleInputChange}/>
        <br/>
        <button >enroll</button>
      </form>
    </section>
  );
}
};
export default TeacherEnrollment;

// onClick={this.showAlert()}
