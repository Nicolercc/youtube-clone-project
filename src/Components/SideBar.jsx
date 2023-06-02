import React from 'react';
import { BsNewspaper } from 'react-icons/bs';
import { categories } from '../utils';
import { CategoriesSearch } from '.';

const SideBar = ({ selectedCategory, setSelectedCategory, homeVideos }) => {
  return (
    <div className="col-auto col-md-3 col-xl-2 px-sm-2 px-0 bg-light sidebar">
      <div className="d-flex flex-column align-items-center align-items-sm-start px-3 pt-2 text-dark min-vh-100">
        <ul className="nav nav-pills flex-column mb-sm-auto mb-0 align-items-center align-items-sm-start">
          <li className="nav-item">
            <button
              className="nav-link align-middle px-0 mt-5"
              onClick={() => {
                setSelectedCategory('News');
              }}
            >
              {' '}
              <span
                className="icon"
                style={{
                  color: selectedCategory === 'News' ? 'red' : 'black',
                  marginRight: '15px',
                  fontSize: '20px',
                }}
              >
                <BsNewspaper />
              </span>
              <span
                className="ms-1 d-none d-sm-inline"
                style={{
                  color: selectedCategory === 'News' ? 'red' : 'black',
                }}
              >
                News
              </span>
            </button>
          </li>
          {categories.map((category) => (
            <li className="nav-item" key={category.name}>
              <button
                className="nav-link align-middle px-0 mb-2"
                onClick={() => {
                  setSelectedCategory(category.name);
                }}
              >
                {' '}
                <span
                  className="icon"
                  style={{
                    color: selectedCategory === category.name ? 'red' : 'black',
                    marginRight: '15px',
                    fontSize: '20px',
                  }}
                >
                  {category.icon}
                </span>
                <span
                  className="ms-1 d-none d-sm-inline"
                  style={{
                    color: selectedCategory === category.name ? 'red' : 'black',
                  }}
                >
                  {category.name}
                </span>
              </button>
            </li>
          ))}
        </ul>
      </div>
      {selectedCategory === 'MostPopular' && (
        <div className="most-popular">
          <CategoriesSearch videos={homeVideos} />
        </div>
      )}
    </div>
  );
};

export default SideBar;
