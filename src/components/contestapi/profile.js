// UserProfile.js
import React, { useContext } from 'react';
import UserContext from './User';

function UserProfile() {
  const user = useContext(UserContext);

  return (
    <div>
      <h1>User Profile</h1>
      <p>Name: {user.name}</p>
      <p>Age: {user.age}</p>
    </div>
  );
}

export default UserProfile;
