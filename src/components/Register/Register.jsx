import './Register.css';
import { useState, useEffect } from 'react';
import Axios from 'axios';

export default function Register() {
  const [usernameReg, setUsernameReg] = useState('');
  const [passwordReg, setPasswordReg] = useState('');

  const [loginStatus, setLoginStatus] = useState(false);

  Axios.defaults.withCredentials = true;

  const register = () => {
    Axios.post('http://localhost:3001/register', {
      username: usernameReg,
      password: passwordReg,
    }).then((response) => {
      console.log(response);
    });
  };

  const userAuthenticated = () => {
    Axios.get('http://localhost:3001/isUserAuth', {
      headers: {
        'x-access-token': localStorage.getItem('token'),
      },
    }).then((response) => {
      console.log(response);
    });
  };

  return (
    <div>
      <h1 className='h1login'>Register</h1>
      <div className='Login'>
        <label>Username</label>
        <input
          type='text'
          placeholder='Username...'
          onChange={(e) => {
            setUsernameReg(e.target.value);
          }}
          className='inputLogin'
        />
        <label>Password</label>
        <input
          type='password'
          placeholder='Password...'
          onChange={(e) => {
            setPasswordReg(e.target.value);
          }}
          className='inputLogin'
        />
        <br />
        <br />
        <button class='submit' type='submit' onClick={register}>
          Crée un compte
        </button>
      </div>
    </div>
  );
}
