import React from "react";

const Profile = (props) => {
  const { name, age, image, bio, gpa, id, addToRoster } = props;
  return (
    <li key={id}>
      <h3>{name}</h3>
      <p>Age: {age}</p>
      <img src={image} alt="student" width="150"></img>
      <p className="Bio">Bio: {bio}</p>
      <p>GPA: {gpa}</p>
      <button onClick={() => addToRoster()}>Add To Class</button>
    </li>
  );
};

export default Profile;

{
  studentData.map((profile) => {
    return (
      <Profile
        name={profile.name}
        age={profile.age}
        image={profile.image}
        bio={profile.bio}
        gpa={profile.GPA}
        key={profile.id}
      />
    );
  });
}
