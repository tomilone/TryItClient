import React, { useState } from 'react';
import userAPI from '../services/user-api-service';

export default function Register(props) {
  const [userName, setUserName] = useState();
  const [userPass, setUserPass] = useState();
  const [error, setError] = useState(false);

  let reRoute = (status) => {
    if (status) {
      setError('invalid credentials');
    }
    return props.history.push('/dashboard');
  };

  // reminder, set url to remember login from register or something
  // console.log(window.location.search);

  let handleLogin = (e) => {
    e.preventDefault();
    if (!userName || !userPass) {
      setError('missing required field');
      return 0;
    }
    if (userName.trim().length >= 4 && userPass.trim().length >= 4) {
      const data = { userName, userPass };
      userAPI.loginUser(data, reRoute);
    } else {
      setError('username and password must be longer than 4 characters');
      return 0;
    }
  };

  return (
    <form onSubmit={(e) => handleLogin(e)}>
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
      {error ? <p>{error}</p> : null}
    </form>
  );
}
