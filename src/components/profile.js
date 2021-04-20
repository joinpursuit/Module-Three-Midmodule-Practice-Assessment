import React from "react";

const Profile = (props) => {
  const { studentData, addToRoster } = props;
  return (
    <>
      {studentData.map((profile) => {
        const arr = [profile.name, profile.GPA]
        return (
          <li key={profile.id}>
            <h3>{profile.name}</h3>
            <p>Age: {profile.age}</p>
            <img src={profile.image} alt="student" width="150"></img>
            <p className="Bio">Bio: {profile.bio}</p>
            <p>GPA: {profile.GPA}</p>
            <button onClick={() => addToRoster(arr)}>Add To Class</button>
          </li>
        );
      })}
    </>
  );
};

export default Profile;

// {
//   studentData.map((profile) => {
//     return (
//       <Profile
//         name={profile.name}
//         age={profile.age}
//         image={profile.image}
//         bio={profile.bio}
//         gpa={profile.GPA}
//         key={profile.id}
//       />
//     );
//   });
// }
