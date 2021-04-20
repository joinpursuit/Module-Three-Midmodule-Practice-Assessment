import React from "react"
import studentData from "../data/studentData"
import Student from "./Student"

class Students extends React.Component {
    render(){
        return (
            <section>
                <h1>Build a Class</h1>
                <ul>
                    {studentData.map(student =>{
                        <Student
                            
                        />
                    })}
                </ul>
            </section>
        )
    }
}

export default Students