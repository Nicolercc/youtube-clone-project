import React from "react";
import { NavLink } from "react-router-dom";
import VideoSearch from "./VideoSearch";

function NavBar() {
  return (
    <nav className="navbar">
      <h3>Youtube</h3>
      <VideoSearch />
      <NavLink to="/">Home</NavLink>

      <NavLink to="/about">About</NavLink>
    </nav>
  );
}

export default NavBar;
