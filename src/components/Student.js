import React from 'react'

function Student (props) {
  const {
    addStudent,
    student: { name, GPA, age, image, bio }
  } = props

  const handleClick = e => {
    addStudent(name, GPA)
  }

  return (
    <li>
      <h3>{name}</h3>
      Age: {age}
      <hr />
      <img src={image} alt="img"/>
      <p>Bio: {bio}</p>
      GPA: {GPA.toFixed(2)}
      <button onClick={handleClick}>Add To Class</button>
    </li>
  )
}

export default Student
