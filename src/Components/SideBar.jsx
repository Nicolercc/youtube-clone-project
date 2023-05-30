import React from 'react';
import { categories } from '../utils';
import { NavLink } from 'react-router-dom';

const SideBar = ({ selectedCategory, setSelectedCategory }) => {
  return (
    <div className="sidebar">
      <div className="top-sidebar">
        <NavLink to="/">
          <span className="material-icons home-icon">home</span>
          <p>Home</p>
        </NavLink>
      </div>
      <div className="middle-sidebar">
        <div className="category-list">
          {categories.map((category) => (
            <li key={category.name}>
              <button
                style={{
                  background: category.name === selectedCategory && '#FC1503',
                  color: '#333',
                }}
                onClick={() => {
                  setSelectedCategory(category.name);
                }}
              >
                <span
                  style={{
                    color: category.name === selectedCategory ? 'white' : 'red',
                    marginRight: '15px',
                  }}
                >
                  {category.icon}
                </span>
                <span
                  style={{
                    opacity: category.name === selectedCategory ? '1' : '0.8',
                  }}
                >
                  {category.name}
                </span>
              </button>
            </li>
          ))}
        </div>
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

export default SideBar;
