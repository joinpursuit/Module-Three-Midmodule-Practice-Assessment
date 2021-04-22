import React from 'react';

const Student = (props) => {
    return (
        <>
            <h2>{props.name} </h2>
            <div>{props.age}</div>
            <img alt='student pic'
                src={props.image} />
            <div>{props.bio}</div>
            <div>{props.GPA}</div>
        </>
    )
}

export default Student;