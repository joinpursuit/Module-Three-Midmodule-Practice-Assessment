import React from 'react'

function Student (props) {
  const student = props.student
  const {name, GPA, age, image , bio} = {...student}
  return (
    <li>
      <h3>{name}</h3>
      Age: {age}
      <hr />
      <img src={image} />
      <p>Bio: {bio}</p>
      GPA: {GPA.toFixed(2)}
      <button>Add To Class</button>
    </li>
  )
}

export default Student
