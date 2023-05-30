import React from 'react';
import { AiOutlineHome } from 'react-icons/ai';
import { categories } from '../utils';
import MostPopular from './MostPopular';

const SideBar = ({ selectedCategory, setSelectedCategory, homeVideos }) => {
  return (
    <div className="sidebar">
      <div className="">
        <div className="category-list">
          <li>
            <button
              className="category-btn"
              style={{
                background: selectedCategory === 'MostPopular' && '#FC1503',
                color: '#333',
              }}
              onClick={() => {
                setSelectedCategory('MostPopular');
              }}
            >
              <span
                style={{
                  color: selectedCategory === 'MostPopular' ? 'white' : 'red',
                  marginRight: '15px',
                }}
              >
                <AiOutlineHome />
              </span>
              <span
                className="text"
                style={{
                  opacity: selectedCategory === 'MostPopular' ? '1' : '0.8',
                }}
              >
                MostPopular
              </span>
            </button>
          </li>
          {categories.map((category) => (
            <li key={category.name}>
              <button
                className="category-btn"
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
                  className="text"
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
      {selectedCategory === 'MostPopular' && (
        <div className="most-popular">
          <MostPopular videos={homeVideos} />
        </div>
      )}
    </div>
  );
};

export default SideBar;
