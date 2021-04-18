import { Component } from "react";

export default class TeachClass extends Component {
    state = { username: "", subject: "", email: "", zip: "", phone: "" }
    
    handleChange = (e) => {
        const { name, value } = e.target;
        this.setState({ [name]: value });
    };

    render() {
        const { username, subject, email, zip, phone } = this.state
        console.log(this.state);


        return(
            <div>
                <h1>Teacher Enrollment</h1>
            <form>
            <label>
            Name
            <input name="username" onChange={this.handleChange} value={username} />
          </label>{" "}<br></br>
            <label>
            Subject
            <input name="subject" onChange={this.handleChange} value={subject} />
          </label>{" "}<br></br>
            <label>
            Email
            <input name="email" onChange={this.handleChange} value={email} />
          </label>{" "}<br></br>
            <label>
            Zip Code
            <input name="zip" onChange={this.handleChange} value={zip} />
          </label>{" "}<br></br>
            <label>
            Phone Number
            <input name="phone" onChange={this.handleChange} value={phone} />
          </label>{" "}<br></br>
          <button>Teach Class</button>
            </form>
            </div>
        )
    }
}