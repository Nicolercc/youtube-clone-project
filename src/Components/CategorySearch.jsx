import React from 'react';
import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { SideBar, MostPopular } from '.';
import { fetchSearchResults } from '../yt-fetch';

const CategorySearch = () => {
  const [categoryVideos, setCategoryVideos] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState('News');
  const navigate = useNavigate();

  const handleVideoClick = (videoId) => {
    navigate(`/video/${videoId}`);
  };
  const handleSearch = async (category) => {
    try {
      const data = await fetchSearchResults(category);
      setCategoryVideos(data.items);
      setSelectedCategory(category);
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    const category = selectedCategory;
    if (selectedCategory !== '') {
      handleSearch(category);
    }
  }, [selectedCategory]);

  return (
    <div className="container-fluid">
      <div className="row flex-nowrap">
        <SideBar
          selectedCategory={selectedCategory}
          setSelectedCategory={setSelectedCategory}
        />

        <div className="col py-3">
          {selectedCategory && (
            <MostPopular
              videos={categoryVideos}
              handleVideoClick={handleVideoClick}
            />
          )}
        </div>
      </div>
    </div>
  );
};

export default CategorySearch;
