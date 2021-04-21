import React from "react";
import "./Student.css";
// import studentData from "../data/studentData"
const Student = ({student}) => {
    
  const {name, age, bio, image, GPA,id } = student; 
    
    
    return (
        
        <li key={id}>
            <h3>{name}</h3>
            <h4>Age:{age}</h4>
            <img src={image} alt="student"/>
            <p>{bio}</p>
            GPA: {GPA.toFixed(2)}
            
        </li>
    )
}
export default Student