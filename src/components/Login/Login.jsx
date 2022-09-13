import './Login.css';
import { useState, useEffect } from 'react';
import Axios from 'axios';

export default function Login() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [loginStatus, setLoginStatus] = useState(false);

  Axios.defaults.withCredentials = true;

  const refreshPage = () => {
    window.location.reload();
  };

  const login = () => {
    Axios.post('http://localhost:3001/login', {
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

  useEffect(() => {
    Axios.get('http://localhost:3001/login').then((response) => {
      if (response.data.loggedIn === true) {
        setLoginStatus(response.data.user[0].username);
      }
    });
  }, []);
  return (
    <div>
      <h1 className='h1login'>Login</h1>
      <div className='Login'>
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
        <button
          class='submit'
          type='submit'
          onClick={() => {
            login();
            refreshPage();
          }}
        >
          Se connecter
        </button>
      </div>
    </div>
  );
}
