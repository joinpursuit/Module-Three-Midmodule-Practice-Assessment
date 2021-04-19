import React from 'react';
import Student from './Student'

class Students extends React.Component {
    state = {data: this.props.data}

    render(){
        return(<ul className="EnrolledList Students">
            {this.props.data.map((studentData,i)=><Student key={i} data={studentData} addToClass={this.props.addToClass}/>)}
        </ul>)
    }
}

export default Students;

