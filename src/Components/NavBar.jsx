import React from 'react';
import { NavLink } from 'react-router-dom';
import VideoSearch from './VideoSearch';
import Logo from './Assets/logo.png';

function NavBar() {
  return (
    <nav className="navbar">
      <div className="logo-container navbar">
        <img src={Logo} alt="logo" className="logo" />
      </div>
      <div className="nav-form navbar">
        <VideoSearch />
        <span className="material-icons mic-icon">mic</span>
      </div>
      <div className="nav-links">
        <NavLink to="/categories">Categories</NavLink>
        <NavLink to="/">Home</NavLink>
        <NavLink to="/about">About</NavLink>
      </div>
    </nav>
  );
}

export default NavBar;
