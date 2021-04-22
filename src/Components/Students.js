import React from "react"
import "./Students.css";


class Students extends React.Component{
constructor(props){
    super(props)
}
render(){
    return (
    <div>
        <section>
        <h3>{this.props.name}</h3>
        <p>Age: {this.props.age}</p>
        <img src={this.props.image} alt={this.props.name} width="150" height="200"></img>
        <p>Bio: {this.props.bio}</p>
        <p>GPA: {this.props.gpa.toPrecision(3)}</p>
        <button onClick={() => this.roster("class")} value={"class"}>Add To Class</button>
        </section>
    </div>
    )
}
}

export default Students;