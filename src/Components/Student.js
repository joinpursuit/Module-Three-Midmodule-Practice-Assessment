import React from 'react'


const Student = (props) => {
    const {name, age, image, bio, GPA, addStudent} = props


    return (
        <li > 
            {/* onSubmit={this.addToClass} */}
            <h3>{name}</h3>
            <p>{age}</p>
            <img src={image} />
            <p>{bio}</p>
            <p>GPA: {GPA.toFixed(2)}</p>
            <button onClick={()=>addStudent(name, GPA)}>Add To Class</button>

        </li>
    )
}

export default Student