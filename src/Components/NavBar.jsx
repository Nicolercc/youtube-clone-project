import React from 'react';
import { NavLink } from 'react-router-dom';

function NavBar() {
  return (
    <nav className="navbar">
      <h3>Youtube</h3>
      <form className="form">
        <input type="text" placeholder="Search..." className="input" />
      </form>
      <NavLink to="/">Home</NavLink>

      <NavLink to="/about">About</NavLink>
    </nav>
  );
}

export default NavBar;
