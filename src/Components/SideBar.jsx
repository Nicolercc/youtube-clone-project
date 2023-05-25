import React from 'react';
import { AiOutlineSetting } from 'react-icons/ai';
import { categoryIcons } from '../utils';
import { NavLink } from 'react-router-dom';

const Sidebar = () => {
  return (
    <div className="sidebar">
      <div className="top-sidebar">
        <span className="category">Categories</span>
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
        <div className="settings">
          <AiOutlineSetting className="icon" />

          <span>Settings</span>
        </div>
        <p>
          &copy; {new Date().getFullYear()}
          <span>Youtube</span>
        </p>
        <p>All rights reserved</p>
      </div>
    </div>
  );
};

export default Sidebar;
