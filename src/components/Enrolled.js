import React, { Component } from 'react'

export class Enrolled extends Component {
    render() {
        return (
            <div>
                <h2>Enrolled</h2>
                <ul className ="EnrolledList"></ul>
                <h3>Total Student Count: 0</h3>
                <h3>Average GPA: 0</h3>
            </div>
        )
    }
}

export default Enrolled
