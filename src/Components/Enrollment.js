import React from 'react'

class Enrollment extends React.Component{

    findAverage = ()=>{
        const {students} = this.props
        if(students.length===0) return false;
        let total = students.reduce((a, b) => a + b.gpa, 0)
        return (total/students.length).toFixed(2);
    }

    render(){
        const {students} = this.props;
        return (<section>
                <h2>Enrolled</h2>
                <ul className="EnrolledList">
                    {students.map((e,i)=><li key={i}>{e.name}: {e.gpa.toFixed(2)}</li>)}
                </ul>

                <h3>Total Student Count: {students.length}</h3>
                <h3>Average GPA: {this.findAverage() || 0}</h3>

        </section>

        )
    }

}

export default Enrollment;