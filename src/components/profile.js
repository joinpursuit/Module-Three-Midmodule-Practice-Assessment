import React from "react";

const Profile = (props) => {
    const { name, age, image, bio, gpa, id } = props;
    return (
        <section key={id}>
            <h4>{name}</h4>
            <p>age: {age}</p>
            <img src={image} alt="student"></img>
            <p>short bio {bio}</p>
            <p>GPA: {gpa}</p>
            <button>Add To Class</button>
        </section>
    )
}

export default Profile;