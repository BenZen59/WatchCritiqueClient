import { NavLink } from 'react-router-dom';
import { useState, useEffect } from 'react';
import LoginImg from '../../img/login.png';
import RegisterImg from '../../img/register.png';
import LogoutImg from '../../img/logout.png';
import Addlist from '../../img/addlist.png';
import './Header.css';
import Axios from 'axios';

export default function Header() {
  const [loginStatus, setLoginStatus] = useState(false);
  const [showSignup, setShowSignup] = useState(false);
  const [showLogin, setShowLogin] = useState(false);
  const [showLoginout, setShowLogout] = useState(true);
  const [showList, setShowList] = useState(true);

  useEffect(() => {
    Axios.get('http://localhost:3001/login').then((response) => {
      if (response.data.loggedIn === true) {
        setLoginStatus(response.data.user[0].username);
        setShowSignup(true);
        setShowLogin(true);
        setShowLogout(false);
        setShowList(false);
      }
    });
  }, []);

  const logout = () => {
    Axios.get('http://localhost:3001/logout').then((response) => {
      setLoginStatus(false);
      setShowSignup(false);
      setShowLogin(false);
      setShowLogout(true);
      setShowList(true);
    });
  };

  const refreshPage = () => {
    window.location.reload();
  };

  return (
    <div className='nav'>
      <NavLink to='/' className='watchcritique'>
        <span>WATCHCRITIQUE 👀✏</span>
      </NavLink>

      <link
        rel='stylesheet'
        href='https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css'
      ></link>
      <form className='search'>
        <input type='text' placeholder='Search..' name='search' />
        <button type='submit' className='searchIcone'>
          <i class='fa fa-search'></i>
        </button>
      </form>
      <span className='headerUsername'>{loginStatus}</span>
      <button className='buttonregister' title='Sign up' hidden={showSignup}>
        <NavLink to='/register'>
          <img src={RegisterImg} alt='login' />
        </NavLink>
      </button>
      <button className='buttonlogin' title='Log in' hidden={showLogin}>
        <NavLink to='/login'>
          <img src={LoginImg} alt='login' />
        </NavLink>
      </button>
      <button className='buttonlist' title='List' hidden={showList}>
        <NavLink to='/list'>
          <img src={Addlist} alt='list' />
        </NavLink>
      </button>
      <button
        className='buttonlogin'
        title='Log out'
        hidden={showLoginout}
        onClick={() => {
          logout();
          refreshPage();
        }}
      >
        <img src={LogoutImg} alt='logout' />
      </button>
    </div>
  );
}
