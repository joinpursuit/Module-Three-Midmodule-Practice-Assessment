import React from "react";

const Profile = (props) => {
  const { studentData, addToRoster } = props;
  return (
    <>
      {studentData.map((profile) => {
        return (
          <li key={profile.id}>
            <h3>{profile.name}</h3>
            <p>Age: {profile.age}</p>
            <img src={profile.image} alt="student" width="150"></img>
            <p className="Bio">Bio: {profile.bio}</p>
            <p>GPA: {profile.GPA.toFixed(2)}</p>
            <button onClick={() => addToRoster(profile)}>Add To Class</button>
          </li>
        );
      })}
    </>
  );
};

export default Profile;
