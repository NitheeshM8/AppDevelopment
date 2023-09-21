import React, { useState } from 'react';
import { Sidebar, Menu, MenuItem } from 'react-pro-sidebar';
import './Sidebar.css';
import { Link, useNavigate } from 'react-router-dom';
import SpaceDashboardIcon from '@mui/icons-material/SpaceDashboard';
import LibraryBooksIcon from '@mui/icons-material/LibraryBooks';
import SubjectIcon from '@mui/icons-material/Subject';
import PeopleOutlineIcon from '@mui/icons-material/PeopleOutline';
import ImportContactsIcon from '@mui/icons-material/ImportContacts';
import LogoutIcon from '@mui/icons-material/Logout';
import MenuIcon from '@mui/icons-material/Menu';
import BadgeIcon from '@mui/icons-material/Badge';
import { useDispatch, useSelector } from 'react-redux';
import { selectSidebarState } from '../redux/sidebarSlice';
import CloseIcon from '@mui/icons-material/Close';
import { logout } from '../redux/userSlice';
function SideBar() {
  const username=useSelector((state)=>state.user.user);
  const nav=useNavigate();
  const [activeMenuItem, setActiveMenuItem] = useState('Dashboard');
  const handleMenuItemClick = (menuItemId) => {
    setActiveMenuItem(menuItemId);
  };
  const dispatch=useDispatch();
  const handleLogout=()=>{
    if(window.confirm("Are You sure to logout?")){
    dispatch(logout());
    nav("/")
  }
}
  const isSidebarOpen = useSelector(selectSidebarState);
  return (
    <>
    {username? (<>
    <div className={`sidebar-container ${isSidebarOpen ? 'open' : 'menu2'}`}>
      <Sidebar>
      {isSidebarOpen ? (
          <Menu className="menu">
          <>
              <MenuItem  style={{ backgroundColor: activeMenuItem === 'Dashboard' ? 'coral' : 'transparent',borderRadius:50}}  component={<Link to="/admin-dashboard" />} icon={<SpaceDashboardIcon />} onClick={() => handleMenuItemClick('Dashboard')}>Dashboard</MenuItem>
              <MenuItem  style={{ backgroundColor: activeMenuItem === 'Courses' ? 'coral' : 'transparent',borderRadius:50}} component={<Link to="/courses" />} icon={<LibraryBooksIcon />} onClick={() => handleMenuItemClick('Courses')}>Courses</MenuItem>
              <MenuItem  style={{ backgroundColor: activeMenuItem === 'ins' ? 'coral' : 'transparent',borderRadius:50}} component={<Link to="/instructors" />} icon={<BadgeIcon />} onClick={() => handleMenuItemClick('ins')}>Instructors</MenuItem>
              <MenuItem  style={{ backgroundColor: activeMenuItem === 'Students' ? 'coral' : 'transparent',borderRadius:50}} component={<Link to="/students" />} icon={<PeopleOutlineIcon />} onClick={() => handleMenuItemClick('Students')}>Students</MenuItem>
              <MenuItem  style={{ backgroundColor: activeMenuItem === 'Subjects' ? 'coral' : 'transparent',borderRadius:50}} component={<Link to="/subjects" />} icon={<SubjectIcon />} onClick={() => handleMenuItemClick('Subjects')}>Subjects</MenuItem>
              <MenuItem  style={{ backgroundColor: activeMenuItem === 'Reports' ? 'coral' : 'transparent',borderRadius:50}} component={<Link to="/reports" />} icon={<ImportContactsIcon />} onClick={() => handleMenuItemClick('Reports')}>Reports</MenuItem>
              <MenuItem onClick={handleLogout} icon={<LogoutIcon />} className="menu-item-l">Logout</MenuItem>
              <footer>&copy; Copyright 2023 123.abc</footer>
            </></Menu>
          ) : (
              <Menu className="menu2">
              <>
              
              <MenuItem  style={{ color: activeMenuItem === 'Dashboard' ? 'coral' : 'black',borderRadius:50}}  component={<Link to="/" />} icon={<SpaceDashboardIcon />} onClick={() => handleMenuItemClick('Dashboard')}></MenuItem>
              <MenuItem  style={{ color: activeMenuItem === 'Courses' ? 'coral' : 'black',borderRadius:50}} component={<Link to="/courses" />} icon={<LibraryBooksIcon />} onClick={() => handleMenuItemClick('Courses')}></MenuItem>
              <MenuItem  style={{ color: activeMenuItem === 'ins' ? 'coral' : 'black',borderRadius:50}} component={<Link to="/instructors" />} icon={<BadgeIcon />} onClick={() => handleMenuItemClick('ins')}></MenuItem>
              <MenuItem  style={{ color: activeMenuItem === 'Students' ? 'coral' : 'black',borderRadius:50}} component={<Link to="/students" />} icon={<PeopleOutlineIcon />} onClick={() => handleMenuItemClick('Students')}></MenuItem>
              <MenuItem  style={{ color: activeMenuItem === 'Subjects' ? 'coral' : 'black',borderRadius:50}} component={<Link to="/subjects" />} icon={<SubjectIcon />} onClick={() => handleMenuItemClick('Subjects')}></MenuItem>
              <MenuItem  style={{ color: activeMenuItem === 'Reports' ? 'coral' : 'black',borderRadius:50}} component={<Link to="/reports" />} icon={<ImportContactsIcon />} onClick={() => handleMenuItemClick('Reports')}></MenuItem>
              <MenuItem onClick={handleLogout} icon={<LogoutIcon />} className="menu-item-l">Logout</MenuItem>
           
              </>
              </Menu>
          )}
      </Sidebar>
      </div>
    </>):(<></>)}
    </>
  );
}

export default SideBar;
