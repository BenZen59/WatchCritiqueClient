import { NavLink } from 'react-router-dom';
import LoginImg from '../../img/login.png';
import './Header.css';

export default function Header() {
  const CallLogin = () => {};

  return (
    <div className='nav'>
      <span className='watchcritique'>WATCHCRITIQUE 👀✏</span>
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
      <button className='buttonlogin' title='Login' onClick={CallLogin}>
        <NavLink to='/login'>
          <img src={LoginImg} alt='login' />
        </NavLink>
      </button>
    </div>
  );
}
