<<<<<<< HEAD
import React, { useState } from 'react';
import './Navbar.css';
import { toggleSidebar } from '../redux/sidebarSlice';
import SearchIcon from '@mui/icons-material/Search';
import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';
import CircleNotificationsIcon from '@mui/icons-material/CircleNotifications';
import { useDispatch, useSelector } from 'react-redux';
import { Dropdown } from 'rsuite';
import { Link } from 'react-router-dom';
const Navbar = () => {
  const [show, setShow] = useState(false);
  const username=useSelector((state)=>state.user.user);
  const isSidebarOpen = useSelector((state) => state.sidebar.isOpen);
  const dispatch = useDispatch();
  const handleToggleSidebar = () => {
    dispatch(toggleSidebar());
  };
  return (
    <div className="nav">
      <header>
        <div className="nav-content">
          <div className='logo'>
          <img  class="logo1" alt="logo" src="https://img.freepik.com/premium-vector/success-student-consulting_7109-29.jpg"/>
          </div>
          <div class="logo-name"> 
         {isSidebarOpen ? (<Link to="/" className='me'><h1 className='me1'>LearnNeo</h1></Link>):(<></>) } 
          </div>
          <div className="toggle" onClick={handleToggleSidebar}>
         {username ?(<>  <MenuIcon/></>):(<></>)}
        </div>
          <nav className={`${show ? 'mobile-nav' : 'list'}`}>
            <ul>
            <li class="li-search">
              <input class="search" type="text" placeholder="Search"/>
             </li>
             <li class="notification-icon"><img src="https://w7.pngwing.com/pngs/537/580/png-transparent-bell-notification-communication-information-icon.png" class="notification-icon"/></li>
             {
              username? (<>            
              <li class="user-icon">
              <img class="user-icon-image" src="https://cdn-icons-png.flaticon.com/512/219/219983.png"/>
              </li>
              <li class="user-name-li">
             <h5 class="user-name">{username}</h5>
              </li>
              </>):(<li><Link to="/login" class="logh"><h3 class="login">Login</h3></Link></li>)}
            </ul>
          </nav>
        </div>
        <div className='socialIcons'></div>
      </header>
    </div>
  );
};

export default Navbar;
=======
import React, { useState } from 'react';
import './Navbar.css';
import { toggleSidebar } from '../redux/sidebarSlice';
import SearchIcon from '@mui/icons-material/Search';
import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';
import CircleNotificationsIcon from '@mui/icons-material/CircleNotifications';
import { useDispatch, useSelector } from 'react-redux';
import { Dropdown } from 'rsuite';
import { Link } from 'react-router-dom';
const Navbar = () => {
  const [show, setShow] = useState(false);
  const username=useSelector((state)=>state.user.user);
  const isSidebarOpen = useSelector((state) => state.sidebar.isOpen);
  const dispatch = useDispatch();
  const handleToggleSidebar = () => {
    dispatch(toggleSidebar());
  };
  return (
    <div className="nav">
      <header>
        <div className="nav-content">
          <div className='logo'>
          <img  class="logo1" alt="logo" src="https://img.freepik.com/premium-vector/success-student-consulting_7109-29.jpg"/>
          </div>
          <div class="logo-name"> 
         {isSidebarOpen ? (<Link to="/" className='me'><h1 className='me1'>LearnNeo</h1></Link>):(<></>) } 
          </div>
          <div className="toggle" onClick={handleToggleSidebar}>
         {username ?(<>  <MenuIcon/></>):(<></>)}
        </div>
          <nav className={`${show ? 'mobile-nav' : 'list'}`}>
            <ul>
            <li class="li-search">
              <input class="search" type="text" placeholder="Search"/>
             </li>
             <li class="notification-icon"><img src="https://w7.pngwing.com/pngs/537/580/png-transparent-bell-notification-communication-information-icon.png" class="notification-icon"/></li>
             {
              username? (<>            
              <li class="user-icon">
              <img class="user-icon-image" src="https://cdn-icons-png.flaticon.com/512/219/219983.png"/>
              </li>
              <li class="user-name-li">
             <h5 class="user-name">{username}</h5>
              </li>
              </>):(<li><Link to="/login" class="logh"><h3 class="login">Login</h3></Link></li>)}
            </ul>
          </nav>
        </div>
        <div className='socialIcons'></div>
      </header>
    </div>
  );
};

export default Navbar;
>>>>>>> a1900e588f2252b25795fec4df5f5a0ab51fc5d3
