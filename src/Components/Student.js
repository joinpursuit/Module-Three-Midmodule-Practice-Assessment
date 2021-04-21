import React from 'react';

const Student = ({ student, addStudent }) => {
    const { id, name, age, bio, image, GPA } = student;
    return (<li>
        <h3>{name}</h3>
        <p>Age: {age}</p>
        <img alt={id} src={image} />
        <p>Bio: {bio}</p>
        <p>GPA: {GPA.toFixed(2)}</p>
        <button onClick={()=>addStudent(name, GPA)}>Add To Class</button>
    </li>)

}


export default Student;


// class Student extends React.Component {
//     state = {data: this.props.data}

//     render(){
//         const {id, name, age, bio, image, GPA} = this.state.data;
//         const {addToClass} = this.props;
//         return(<li>
//             <h3>{name}</h3>
//             <p>Age: {age}</p>
//             <img alt={id} src={image}/>
//             <p>Bio: {bio}</p>
//             <p>GPA: {GPA.toFixed(2)}</p>
//             <button onClick={()=>addToClass(name,GPA)}>Add To Class</button>

//         </li>)
//     }
// }
