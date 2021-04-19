import React from "react";
import "./styles/TeacherEnrollment.css";

class TeacherEnrollment extends React.Component {
  constructor(props) {
    super(props);
  }

  state = { name: "", subject: "", email: "", phoneNumber: "", zipCode: "" };

  handleSubmit = (e) => {
    e.preventDefault();
    console.log(this.state);
    let arrayInputs = Object.values(this.state);
    if (arrayInputs.includes("")) {
      window.alert(`Input is invalid`);
    }

    if (e.target.phoneNumber.value.length !== 10) {
      window.alert(`Phone number is not valid`);
    }
    if (e.target.zipCode.value.length !== 5) {
      window.alert(`Zip code is not valid`);
    }

    // if(e.target.phoneNumber.value.length !== 10){
    // window.alert(`Phone number is not valid`)

    // }

    //      console.log(this.props)
    window.alert(
      `You are now the teacher, You have ` +
        this.props.allClass +
        ` students. the average GPA is ` +
        this.props.averageGPA.toFixed(2)
    );
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

  render() {
    return (
      <section className="TeachEnroll">
        <h2>Teacher Enrollment</h2>
        <form onSubmit={this.handleSubmit}>
          <label>
            Name
            <br />
            <input
              type="text"
              name="name"
              value={this.name}
              onChange={this.handleInputChange}
            />
          </label><br />
          <label>
            Subject 
            <br />
            <input
              name="subject"
              value={this.subject}
              onChange={this.handleInputChange}
            />
          </label>
          <br />
          <label>
            Email <br />
            <input
              name="email"
              value={this.email}
              onChange={this.handleInputChange}
            />
          </label>
          <br />
          <label>
            Phone Number
            <br />
            <input
              type="tel"
              name="phoneNumber"
              value={this.phoneNumber}
              onChange={this.handleInputChange}
            />
          </label>{" "}
          <br />
          <label>
            Zip Code <br />
            <input
              name="zipCode"
              // pattern="[0-9]{5}"
              for="zipCode"
              value={this.zipCode}
              onChange={this.handleInputChange}
             
            />
          </label>{" "}
          <br />
          <button>Teach Class</button>
        </form>
      </section>
    );
  }
}
export default TeacherEnrollment;

// onClick={this.showAlert()}

// - When I complete the form but a piece of data is missing, an alert tells me that my input is not valid.
//   - Alert text should include: `Input is invalid`
// - When I complete the form but the phone number is not 10 digits long, an alert tells me `Phone number is not valid`
// - When I complete the form but the zip code is not 5 digits long, an alert tells me `Zip code is not valid`
