import React from "react";

const Profile = (props) => {
    const { name, age, image, bio, gpa, id } = props;
    return (
        <li key={id}>
            <h3>{name}</h3>
            <p>Age: {age}</p>
            <img src={image} alt="student" width='150'></img>
            <p className="Bio">Bio: {bio}</p>
            <p>GPA: {gpa}</p>
            <button onClick={() => this.addToClass()}>Add To Class</button>
        </li>
    )
}

export default Profile;