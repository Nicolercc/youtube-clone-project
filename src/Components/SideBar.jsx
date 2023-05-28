import React from 'react';
import { categoryIcons } from '../utils';
import { NavLink } from 'react-router-dom';

const Sidebar = () => {
  return (
    <div className="sidebar">
      <div className="top-sidebar">
        <NavLink to="/">
          <span className="material-icons home-icon">home</span>
          <p>Home</p>
        </NavLink>
      </div>
      <div className="middle-sidebar">
        <ul className="category-list">
          {Object.entries(categoryIcons).map(([category, icon]) => (
            <li key={category}>
              <NavLink
                to={`/category/${category}`}
                style={(isActive) => ({
                  className: isActive ? 'active ' : 'navlink',
                })}
              >
                {icon} {category}
              </NavLink>
            </li>
          ))}
        </ul>
      </div>
      <div className="bottom-sidebar">
        {/* <div className="settings">
          <AiOutlineSetting className="icon" />
          <span className="theme">Settings</span>
        </div>
        <div className="info-footer">
          <span className="copy">{new Date().getFullYear()} Ytube</span>
          <h6>&copy; Copyright</h6>
        </div> */}
      </div>
    </div>
  );
};

export default Sidebar;
