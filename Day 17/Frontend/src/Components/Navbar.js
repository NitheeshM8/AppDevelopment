import React, { useState } from 'react';
import './Navbar.css';
import { toggleSidebar } from '../redux/sidebarSlice';
import SearchIcon from '@mui/icons-material/Search';
import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';
import CircleNotificationsIcon from '@mui/icons-material/CircleNotifications';
import { useDispatch, useSelector } from 'react-redux';
import { Dropdown } from 'rsuite';
import { Link, useNavigate } from 'react-router-dom';
import { getEmail, getToken } from './LocalStorage';
import { useEffect } from 'react';
import axios from 'axios';

const Navbar = () => {
  const nav=useNavigate();
  const [show, setShow] = useState(false);
  const token=getToken();
  const CryptoJS = require('crypto-js');
  const [isValidityExpired,setValidity]=useState(true)
 const Email=getEmail();

 const isSidebarOpen = useSelector((state) => state.sidebar.isOpen);
 const dispatch = useDispatch();
 const handleToggleSidebar = () => {
   dispatch(toggleSidebar());
  };
  useEffect(()=>{
 
    try {
      const parts = token.split('.');
      const decodedPayload = CryptoJS.enc.Base64.parse(parts[1]).toString(CryptoJS.enc.Utf8);
      console.log(decodedPayload);
      const parsedPayload = JSON.parse(decodedPayload);
      if (parsedPayload.exp) {
        const currentTimestamp = Math.floor(Date.now() / 1000);
        if (parsedPayload.exp < currentTimestamp) {
          alert("Session Expired. Please Login again....!")
          localStorage.clear();
          nav("/login")
        }
      } else {
        console.log('JWT does not contain an expiration claim (exp).');
      }
    } catch (error) {
      console.error('Error decoding JWT:', error);
    }
  },[])
  return (
    <div className="nav">
      <header>
        <div className="nav-content">
    <div className='logo'>
     <Link to="/">  <img  class="logo1" alt="logo" src="https://img.freepik.com/premium-vector/success-student-consulting_7109-29.jpg"/>
     </Link>   </div>
          <div class="logo-name"> 
         {isSidebarOpen ? (<Link to="/" className='me'><h1 className='me1'>LearnNeo</h1></Link>):(<></>) }
          </div>
          <div className="toggle" onClick={handleToggleSidebar}>
         {Email ?(<>  <MenuIcon/></>):(<></>)}
        </div>
          <nav className={`${show ? 'mobile-nav' : 'list'}`}>
            <ul>
              <li class="li-search">
              <input class="search" type="text" placeholder="Search..."/>
             </li>
             <div className="top-bar">
  <ul>
<li className="li-elements">
  <Link to="/about" className='liele'>About</Link>
</li>
    <li className="li-elements">
      <img src="https://w7.pngwing.com/pngs/537/580/png-transparent-bell-notification-communication-information-icon.png" className="notification-icon" alt="Notification Icon"/>
    </li>
    {Email ? (
      <>
        <li className="li-elements">
          <img className="user-icon" src="https://cdn-icons-png.flaticon.com/512/219/219983.png" alt="User Icon"/>
        </li>
        <li className="li-elements">
          <h5 className="li-elementsv">{Email}</h5>
        </li>
      </>
    ) : (
        <Link to="/login" className="login-link">
          <h3 className="login">Login</h3>
        </Link>
    )}
  </ul>
</div>
            </ul>
          </nav>
        </div>
        <div className='socialIcons'></div>
      </header>
    </div>
  );
};

export default Navbar;
