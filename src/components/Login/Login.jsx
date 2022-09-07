import './Login.css';
import { useState, useEffect } from 'react';
import TEST from 'axios';

export default function Login() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const [loginStatus, setLoginStatus] = useState(false);

  TEST.defaults.withCredentials = true;

  const login = () => {
    TEST.post('http://localhost:3001/login', {
      username: username,
      password: password,
    }).then((response) => {
      if (!response.data.auth) {
        setLoginStatus(false);
      } else {
        console.log(response.data);
        localStorage.setItem('token', response.data.token);
        setLoginStatus(true);
      }
    });
  };

  // const userAuthenticated = () => {
  //   TEST.get('http://localhost:3001/isUserAuth', {
  //     headers: {
  //       'x-access-token': localStorage.getItem('token'),
  //     },
  //   }).then((response) => {
  //     console.log(response);
  //   });
  // };

  useEffect(() => {
    TEST.get('http://localhost:3001/login').then((response) => {
      if (response.data.loggedIn === true) {
        setLoginStatus(response.data.user[0].username);
      }
    });
  }, []);
  return (
    <div className='Login'>
      <div className='login'>
        <h1 className='h1login'>Login</h1>
        <label>Username</label>
        <input
          type='text'
          placeholder='Username...'
          onChange={(e) => {
            setUsername(e.target.value);
          }}
          className='inputLogin'
        />
        <label>Password</label>
        <input
          type='password'
          placeholder='Password...'
          onChange={(e) => {
            setPassword(e.target.value);
          }}
          className='inputLogin'
        />
        <br />
        <br />
        <button class='submit' type='submit' onClick={login}>
          Se connecter
        </button>
      </div>
      {/* {loginStatus && (
        <button onClick={userAuthenticated}> Check if Authenticated </button>
      )} */}
    </div>
  );
}
