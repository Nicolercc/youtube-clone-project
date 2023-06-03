import React from 'react';
import { NavLink } from 'react-router-dom';
import { VideoSearch } from '.';
import Logo from './Assets/logo.png';

function NavBar() {
  return (
    <div className="row">
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <div className="navbar-brand">
          <img className="logo mx-5" src={Logo} alt="logo" />
        </div>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarCollapse"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div
          className="collapse navbar-collapse justify-content-around"
          id="navbarCollapse"
        >
          <div className="navbar-nav">
            <NavLink to="/" className="nav-item nav-link">
              Home
            </NavLink>
            <NavLink to="/about" className="nav-item nav-link">
              About
            </NavLink>
            <NavLink
              to="/categories"
              className="nav-link "
              style={(isActive) => ({
                className: isActive ? 'active' : 'navlink',
              })}
            >
              Categories
            </NavLink>
          </div>
          <div className="nav-form navbar">
            <VideoSearch />
          </div>
        </div>
      </nav>
    </div>
  );
}

export default NavBar;
