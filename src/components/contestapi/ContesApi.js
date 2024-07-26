import React, { useState } from 'react';
import UserContext from './User';
import UserProfile from './profile';

function ContestApi() {
  const [user, setUser] = useState({ name: 'Ramkumar', age: 26});

  return (
    <UserContext.Provider value={user}>
      <div className="ContestApi">
        <UserProfile />
      </div>
    </UserContext.Provider>
  );
}

export default ContestApi;
