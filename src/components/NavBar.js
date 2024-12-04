import React from 'react'
import './NavBar.css';

const NavBar = () => {
  const navs = ['WEB DEVELOPMENT','WEB DESIGN','MOBILE DEVELOPMENT','DIGITAL MARKETING'];
  return (
    
    <nav className='navbar'>
      <div className='logo'>
       <a href='#'>POSITIVE<i><span>MINDS</span></i></a>
      </div>
      <ul className='navbar-navi'>
        {navs.map((item, i) => (
          <li key={i} className="nav-items">{item}</li>
        ) )}
        {/* <li className='navbar-cont'>
          <a href='#' className='nav-li'>Web Design</a>
        </li>
        <li className='navbar-cont'>
          <a href='#' className='nav-li'>Web Development</a>
        </li>
        <li className='navbar-cont'>
          <a href='#' className='nav-li'>Mobile Development</a>
        </li>
        <li className='navbar-cont'>
          <a href='#' className='nav-li'>Web Design</a>
        </li> */}
      </ul>
       </nav>
  )
};

export default NavBar;
