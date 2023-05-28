import React from 'react';
import { NavLink } from 'react-router-dom';
import VideoSearch from './VideoSearch';

function NavBar() {
  return (
    <nav className="navbar">
      <div className="logo-container navbar">
        <h3 className="logo">Youtube</h3>
      </div>
      <div className="nav-form navbar">
        <VideoSearch />
        <span className="material-icons mic-icon">mic</span>
      </div>
      <div className="nav-links">
        <NavLink to="/">Home</NavLink>

        <NavLink to="/about">About</NavLink>
      </div>
    </nav>
  );
}

export default NavBar;
