import React, { Component } from 'react'

export class Roster extends Component {
    constructor () {
        super()

        this.state = {
            studentCount: "",
            avgGPA: "",
        }
    }

    

    render() {        
        return (
            <div>
                <h2>Enrolled</h2>
                <ul>

                </ul>
                <h3>Total Student Count: </h3>
                <h3>Average GPA: </h3>
            </div>
        )
    }
}

export default Roster;
