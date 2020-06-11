import React, { useState } from 'react';
import userAPI from '../services/user-api-service';

export default function Register(props) {
  const [userName, setUserName] = useState();
  const [userPass, setUserPass] = useState();

  let reRoute = () => {
    props.history.push('/login');
  };

  let handleRegistration = (e) => {
    e.preventDefault();
    if (userName.trim().length >= 5 && userPass.trim().length >= 5) {
      const data = { userName, userPass };
      userAPI.createUser(data, reRoute);
    }
  };

  return (
    <form onSubmit={(e) => handleRegistration(e)}>
      <input
        name="userName"
        type="text"
        placeholder="user-name"
        onChange={(e) => setUserName(e.target.value)}
      />
      <input
        name="password"
        type="text"
        placeholder="password"
        onChange={(e) => setUserPass(e.target.value)}
      />
      <button type="submit">submit</button>
    </form>
  );
}
